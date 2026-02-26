import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PBCache } from '../cache.js';

// ---------------------------------------------------------------------------
// Python bridge setup
// ---------------------------------------------------------------------------

const execFileAsync = promisify(execFile);

// ESM-compatible __dirname equivalent.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Bridge script is located at src/visual-bridge.py (one level up from tools/).
const BRIDGE_SCRIPT = resolve(__dirname, '..', 'visual-bridge.py');
const PYTHON_EXE = process.env['PYTHON_EXE'] ?? 'python';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Shape returned by the Python bridge for every action. */
type BridgeResult = Record<string, unknown>;

// ---------------------------------------------------------------------------
// callBridge — core helper
// ---------------------------------------------------------------------------

/**
 * Calls visual-bridge.py with the given action and parameters.
 * Returns the parsed JSON result.
 *
 * Errors thrown by child_process (timeout, spawn failure) propagate to the
 * caller so each tool can format them as MCP error responses.
 */
async function callBridge(
  action: string,
  params: Record<string, unknown>,
): Promise<BridgeResult> {
  const input = JSON.stringify({ action, ...params });

  const { stdout, stderr } = await execFileAsync(
    PYTHON_EXE,
    [BRIDGE_SCRIPT, input],
    { timeout: 30_000 },
  );

  if (stderr) {
    console.error(`[PB Visual] ${stderr}`);
  }

  return JSON.parse(stdout) as BridgeResult;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

function bridgeErrorText(err: unknown): string {
  const message = err instanceof Error ? err.message : String(err);
  return JSON.stringify({ error: `Bridge error: ${message}` });
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export function registerVisualTools(server: McpServer, _cache: PBCache): void {
  // -------------------------------------------------------------------------
  // pb_launch_app
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_launch_app',
    {
      title: 'Launch PowerBuilder Application',
      description:
        'Launches a PowerBuilder application .exe for visual testing. Connects to an already-running instance if one exists. Returns the main window title, class, and position.',
      inputSchema: {
        exe_path: z
          .string()
          .optional()
          .describe(
            'Path to the PB application .exe. Falls back to the PB_EXE_PATH environment variable.',
          ),
        wait_seconds: z
          .number()
          .int()
          .min(1)
          .max(30)
          .optional()
          .describe('Seconds to wait for the app window to appear (default: 5)'),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ exe_path, wait_seconds = 5 }) => {
      const resolvedExe = exe_path ?? process.env['PB_EXE_PATH'] ?? '';

      if (!resolvedExe) {
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                error: 'No exe_path provided and PB_EXE_PATH is not set',
              }),
            },
          ],
          isError: true,
        };
      }

      let result: BridgeResult;
      try {
        result = await callBridge('launch', {
          exe_path: resolvedExe,
          wait_seconds,
        });
      } catch (err) {
        return {
          content: [{ type: 'text' as const, text: bridgeErrorText(err) }],
          isError: true,
        };
      }

      if ('error' in result) {
        return {
          content: [{ type: 'text' as const, text: toText(result) }],
          isError: true,
        };
      }

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );

  // -------------------------------------------------------------------------
  // pb_screenshot_window
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_screenshot_window',
    {
      title: 'Screenshot PowerBuilder Window',
      description:
        'Captures a screenshot of a running PowerBuilder window by title. Returns the file path, image dimensions, and base64-encoded PNG data for AI vision analysis.',
      inputSchema: {
        window_title: z
          .string()
          .describe('Title (or regex pattern) of the window to capture'),
        save_path: z
          .string()
          .optional()
          .describe(
            'File path where the PNG should be saved. Auto-generated under screenshots/ if not set.',
          ),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ window_title, save_path }) => {
      let result: BridgeResult;
      try {
        result = await callBridge('screenshot', {
          window_title,
          ...(save_path !== undefined ? { save_path } : {}),
        });
      } catch (err) {
        return {
          content: [{ type: 'text' as const, text: bridgeErrorText(err) }],
          isError: true,
        };
      }

      if ('error' in result) {
        return {
          content: [{ type: 'text' as const, text: toText(result) }],
          isError: true,
        };
      }

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );

  // -------------------------------------------------------------------------
  // pb_list_controls
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_list_controls',
    {
      title: 'List Window Controls',
      description:
        'Lists all Win32 controls inside a running PowerBuilder window. Returns control class names, text, enabled state, and bounding rectangles. Use this before pb_interact_control to identify target controls.',
      inputSchema: {
        window_title: z
          .string()
          .describe('Title (or regex pattern) of the target window'),
        visible_only: z
          .boolean()
          .optional()
          .describe('When true, only visible controls are returned (default: true)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ window_title, visible_only = true }) => {
      let result: BridgeResult;
      try {
        result = await callBridge('list_controls', {
          window_title,
          visible_only,
        });
      } catch (err) {
        return {
          content: [{ type: 'text' as const, text: bridgeErrorText(err) }],
          isError: true,
        };
      }

      if ('error' in result) {
        return {
          content: [{ type: 'text' as const, text: toText(result) }],
          isError: true,
        };
      }

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );

  // -------------------------------------------------------------------------
  // pb_interact_control
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_interact_control',
    {
      title: 'Interact with Window Control',
      description:
        'Interacts with a control inside a running PowerBuilder window. Supported actions: click, set_text, get_text, select. Use pb_list_controls first to identify controls by class name, text, or index.',
      inputSchema: {
        window_title: z
          .string()
          .describe('Title (or regex pattern) of the target window'),
        action: z
          .enum(['click', 'set_text', 'get_text', 'select'])
          .describe('Action to perform on the control'),
        control_text: z
          .string()
          .optional()
          .describe('Text / title of the control to target'),
        control_class: z
          .string()
          .optional()
          .describe('Win32 class name of the control (e.g. Edit, Button)'),
        control_index: z
          .number()
          .int()
          .min(0)
          .optional()
          .describe(
            '0-based index when multiple controls match (e.g. 2nd Edit field = index 1)',
          ),
        value: z
          .string()
          .optional()
          .describe('Value for set_text or select actions'),
      },
      annotations: { readOnlyHint: false },
    },
    async ({
      window_title,
      action,
      control_text,
      control_class,
      control_index,
      value,
    }) => {
      let result: BridgeResult;
      try {
        result = await callBridge('interact', {
          window_title,
          action,
          ...(control_text !== undefined ? { control_text } : {}),
          ...(control_class !== undefined ? { control_class } : {}),
          ...(control_index !== undefined ? { control_index } : {}),
          ...(value !== undefined ? { value } : {}),
        });
      } catch (err) {
        return {
          content: [{ type: 'text' as const, text: bridgeErrorText(err) }],
          isError: true,
        };
      }

      if ('error' in result) {
        return {
          content: [{ type: 'text' as const, text: toText(result) }],
          isError: true,
        };
      }

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );

  // -------------------------------------------------------------------------
  // pb_save_reference
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_save_reference',
    {
      title: 'Save Visual Reference Screenshot',
      description:
        'Captures the current state of a PowerBuilder window and saves it as a named visual reference image for regression testing. Use pb_visual_compare to compare against this baseline later.',
      inputSchema: {
        window_title: z
          .string()
          .describe('Title of the window to capture'),
        reference_name: z
          .string()
          .min(1)
          .max(100)
          .describe('Name for the reference image (e.g. login_screen, main_window)'),
        references_dir: z
          .string()
          .optional()
          .describe(
            'Directory where references are stored. Falls back to the PB_REFERENCES_DIR environment variable or ./references.',
          ),
      },
      annotations: { readOnlyHint: false },
    },
    async ({ window_title, reference_name, references_dir }) => {
      const resolvedDir =
        references_dir ?? process.env['PB_REFERENCES_DIR'] ?? './references';

      let result: BridgeResult;
      try {
        result = await callBridge('save_reference', {
          window_title,
          reference_name,
          references_dir: resolvedDir,
        });
      } catch (err) {
        return {
          content: [{ type: 'text' as const, text: bridgeErrorText(err) }],
          isError: true,
        };
      }

      if ('error' in result) {
        return {
          content: [{ type: 'text' as const, text: toText(result) }],
          isError: true,
        };
      }

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );

  // -------------------------------------------------------------------------
  // pb_visual_compare
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_visual_compare',
    {
      title: 'Visual Regression Compare',
      description:
        'Compares the current state of a PowerBuilder window against a saved visual reference. Returns difference percentage, pass/fail result, and a diff image path. Requires pywinauto, pyautogui, Pillow, and pixelmatch.',
      inputSchema: {
        window_title: z
          .string()
          .describe('Title of the window to compare'),
        reference_name: z
          .string()
          .describe('Name of the previously saved reference image'),
        threshold: z
          .number()
          .min(0)
          .max(1)
          .optional()
          .describe(
            'Per-pixel comparison threshold (0.0 = exact match, 1.0 = very tolerant, default: 0.1)',
          ),
        references_dir: z
          .string()
          .optional()
          .describe(
            'Directory where references are stored. Falls back to the PB_REFERENCES_DIR environment variable or ./references.',
          ),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ window_title, reference_name, threshold = 0.1, references_dir }) => {
      const resolvedDir =
        references_dir ?? process.env['PB_REFERENCES_DIR'] ?? './references';

      let result: BridgeResult;
      try {
        result = await callBridge('visual_compare', {
          window_title,
          reference_name,
          threshold,
          references_dir: resolvedDir,
        });
      } catch (err) {
        return {
          content: [{ type: 'text' as const, text: bridgeErrorText(err) }],
          isError: true,
        };
      }

      if ('error' in result) {
        return {
          content: [{ type: 'text' as const, text: toText(result) }],
          isError: true,
        };
      }

      return { content: [{ type: 'text' as const, text: toText(result) }] };
    },
  );
}

// Export for testing the bridge helper path resolution.
export { BRIDGE_SCRIPT, PYTHON_EXE };
