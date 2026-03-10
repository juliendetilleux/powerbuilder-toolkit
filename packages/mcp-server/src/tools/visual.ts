import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PBCache } from '../cache.js';
import { parseDwLayout } from '@pb-toolkit/parser';

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
        'Launches a PowerBuilder application .exe for visual testing. Connects to an already-running instance if one exists. Returns the main window title, class, position, and pid.',
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
          .optional()
          .describe('Title (or regex pattern) of the window to capture'),
        pid: z
          .number()
          .int()
          .optional()
          .describe(
            'Process ID of the target application. Use this to avoid ambiguity when multiple windows share the same title. Returned by pb_launch_app.',
          ),
        save_path: z
          .string()
          .optional()
          .describe(
            'File path where the PNG should be saved. Auto-generated under screenshots/ if not set.',
          ),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ window_title, pid, save_path }) => {
      let result: BridgeResult;
      try {
        result = await callBridge('screenshot', {
          ...(window_title !== undefined ? { window_title } : {}),
          ...(pid !== undefined ? { pid } : {}),
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

      // Read the saved PNG and return as MCP image content.
      const pngPath = result['save_path'] as string | undefined;
      if (pngPath) {
        try {
          const pngData = readFileSync(pngPath);
          const base64Data = pngData.toString('base64');
          return {
            content: [
              { type: 'text' as const, text: toText(result) },
              { type: 'image' as const, data: base64Data, mimeType: 'image/png' },
            ],
          };
        } catch {
          // If file read fails, return metadata only.
        }
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
          .optional()
          .describe('Title (or regex pattern) of the target window'),
        pid: z
          .number()
          .int()
          .optional()
          .describe(
            'Process ID of the target application. Use this to avoid ambiguity when multiple windows share the same title. Returned by pb_launch_app.',
          ),
        visible_only: z
          .boolean()
          .optional()
          .describe('When true, only visible controls are returned (default: true)'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ window_title, pid, visible_only = true }) => {
      let result: BridgeResult;
      try {
        result = await callBridge('list_controls', {
          ...(window_title !== undefined ? { window_title } : {}),
          ...(pid !== undefined ? { pid } : {}),
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
  // pb_dw_get_columns
  // -------------------------------------------------------------------------
  server.registerTool(
    'pb_dw_get_columns',
    {
      title: 'Get DataWindow Column Layout',
      description:
        'Returns the visual layout of a DataWindow\'s detail band: column positions (PBU and optional pixel coordinates), labels, and dimensions. Use this before dw_click_column, dw_set_value, or dw_get_value actions in pb_interact_control.',
      inputSchema: {
        dataobject: z
          .string()
          .describe('DataWindow object name (e.g. "d_item_update1")'),
        pid: z
          .number()
          .int()
          .optional()
          .describe(
            'PID of the running app. When provided with control_handle, pixel coordinates are calculated.',
          ),
        control_handle: z
          .string()
          .optional()
          .describe(
            'Hex handle of the pbdw control (e.g. "0x31092"). Get from pb_list_controls. Used with pid for pixel coordinate calculation.',
          ),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ dataobject, pid, control_handle }) => {
      // Find the .srd file in cache.
      const obj = _cache.getByName(dataobject);
      if (!obj || obj.type !== 'datawindow') {
        return {
          content: [{
            type: 'text' as const,
            text: JSON.stringify({ error: `DataWindow '${dataobject}' not found in cache.` }),
          }],
          isError: true,
        };
      }

      // Read and parse the .srd file.
      let srdContent: string;
      try {
        srdContent = readFileSync(obj.filePath, 'utf-8');
      } catch {
        return {
          content: [{
            type: 'text' as const,
            text: JSON.stringify({ error: `Cannot read file: ${obj.filePath}` }),
          }],
          isError: true,
        };
      }

      const layout = parseDwLayout(srdContent);

      // Calculate the total DW width from the rightmost column.
      let dwWidth = 0;
      for (const col of layout.columns) {
        const right = col.x + col.width;
        if (right > dwWidth) dwWidth = right;
      }

      // Detect processing type from the .srd source.
      const PROC_TYPES: Record<number, string> = {
        0: 'freeform', 1: 'tabular', 2: 'grid', 3: 'label',
        4: 'nup', 5: 'crosstab', 6: 'group', 7: 'composite',
      };
      const procMatch = /\bdatawindow\b[^)]*\bprocessing=(\d+)/i.exec(srdContent);
      const processing = PROC_TYPES[procMatch ? parseInt(procMatch[1]!, 10) : 0] ?? 'freeform';
      const isFreeform = processing === 'freeform';

      const result: Record<string, unknown> = {
        dataobject,
        file: obj.filePath,
        processing,
        dw_size_pbu: { width: dwWidth, height: layout.detailHeight },
        columns: layout.columns.map(c => ({
          name: c.name,
          id: c.id,
          type: c.type,
          pbu: { x: c.x, y: c.y, w: c.width, h: c.height },
          tab: c.tabsequence,
          visible: c.visible,
          tag: c.tag,
          edit_limit: c.editLimit,
          edit_case: c.editCase,
          dddw: c.dddwName || undefined,
        })),
        labels: layout.labels.map(l => ({
          name: l.name,
          text: l.text,
          pbu: { x: l.x, y: l.y, w: l.width, h: l.height },
        })),
      };

      // If pid + control_handle provided, get pixel coordinates.
      if (pid !== undefined && control_handle) {
        try {
          const rectResult = await callBridge('get_control_rect', {
            control_handle,
          });
          if (!('error' in rectResult)) {
            const rect = rectResult['rect'] as { width: number; height: number } | undefined;
            if (rect && dwWidth > 0) {
              const pxW = rect.width;
              const pxH = rect.height;
              result['control_size_px'] = { width: pxW, height: pxH };

              // PBU-to-pixel scale factors.
              const xScale = pxW / dwWidth;
              // For freeform DWs: Y uses control height / detail height (absolute positioning).
              // For tabular/grid DWs: Y uses xScale (per-row relative positioning).
              const yScale = isFreeform && layout.detailHeight > 0
                ? pxH / layout.detailHeight
                : xScale;
              const rowHeightPx = Math.round(layout.detailHeight * (isFreeform ? yScale : xScale));
              result['row_height_px'] = rowHeightPx;

              // Add pixel coordinates to each column.
              const columnsWithPx = (result['columns'] as Array<Record<string, unknown>>).map(col => {
                const pbu = col['pbu'] as { x: number; y: number; w: number; h: number };
                return {
                  ...col,
                  pixel: {
                    x: Math.round(pbu.x * xScale),
                    y: Math.round(pbu.y * yScale),
                    w: Math.round(pbu.w * xScale),
                    h: Math.round(pbu.h * yScale),
                  },
                };
              });
              result['columns'] = columnsWithPx;
            }
          }
        } catch {
          // Pixel calculation failed — return PBU only.
        }
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
        'Interacts with a control inside a running PowerBuilder window. Supported actions: click, double_click, right_click, set_text, get_text, get_tooltip, select, click_popup_item, dw_click_column, dw_tab_to_column, dw_set_value, dw_get_value, dw_click_row. Use pb_list_controls first to identify controls by class name, text, or index. For DW actions, first call pb_dw_get_columns to get column layout. For freeform DWs, prefer use_tab=true which navigates via TAB key order.',
      inputSchema: {
        window_title: z
          .string()
          .optional()
          .describe('Title (or regex pattern) of the target window'),
        pid: z
          .number()
          .int()
          .optional()
          .describe(
            'Process ID of the target application. Use this to avoid ambiguity when multiple windows share the same title. Returned by pb_launch_app.',
          ),
        action: z
          .enum(['click', 'double_click', 'right_click', 'set_text', 'get_text', 'get_tooltip', 'select', 'type_keys', 'click_popup_item', 'dw_click_column', 'dw_tab_to_column', 'dw_set_value', 'dw_get_value', 'dw_click_row'])
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
        visible_only: z
          .boolean()
          .optional()
          .describe(
            'When true (default), only visible controls are considered for index matching. Must match the visible_only used in pb_list_controls.',
          ),
        coords: z
          .object({ x: z.number().int(), y: z.number().int() })
          .optional()
          .describe(
            'Click coordinates relative to the control\'s top-left corner. Use for click, double_click, and right_click to target a specific spot inside the control (e.g. a DataWindow row).',
          ),
        control_handle: z
          .string()
          .optional()
          .describe(
            'Win32 handle in hex (e.g. "0x31092"). When provided, targets the control directly by handle, bypassing class/text/index search. Get handles from pb_list_controls output.',
          ),
        column_layout: z
          .record(z.unknown())
          .optional()
          .describe(
            'DW column layout from pb_dw_get_columns. Required for dw_click_column, dw_set_value, dw_get_value actions.',
          ),
        new_value: z
          .string()
          .optional()
          .describe(
            'Value to set in a DW column. Used with dw_set_value action.',
          ),
        use_tab: z
          .boolean()
          .optional()
          .describe(
            'When true, navigate to DW columns using TAB key order instead of pixel clicks. More reliable for freeform DWs. Used with dw_click_column, dw_set_value, dw_get_value.',
          ),
        row_index: z
          .number()
          .int()
          .min(1)
          .optional()
          .describe(
            'Row number (1-based) for DW actions. Default is 1. Used with dw_click_column, dw_set_value, dw_get_value, dw_click_row.',
          ),
        row_number: z
          .number()
          .int()
          .min(1)
          .optional()
          .describe(
            'Row number for dw_click_row action (1-based). Alias for row_index.',
          ),
        double_click: z
          .boolean()
          .optional()
          .describe(
            'When true with dw_click_row, double-clicks the row instead of single-click.',
          ),
      },
      annotations: { readOnlyHint: false },
    },
    async ({
      window_title,
      pid,
      action,
      control_text,
      control_class,
      control_index,
      value,
      visible_only = true,
      coords,
      control_handle,
      column_layout,
      new_value,
      use_tab,
      row_index,
      row_number,
      double_click,
    }) => {
      let result: BridgeResult;
      try {
        result = await callBridge('interact', {
          ...(window_title !== undefined ? { window_title } : {}),
          ...(pid !== undefined ? { pid } : {}),
          control_action: action,
          ...(control_text !== undefined ? { control_text } : {}),
          ...(control_class !== undefined ? { control_class } : {}),
          ...(control_index !== undefined ? { control_index } : {}),
          ...(value !== undefined ? { value } : {}),
          visible_only,
          ...(coords !== undefined ? { coords } : {}),
          ...(control_handle !== undefined ? { control_handle } : {}),
          ...(column_layout !== undefined ? { column_layout } : {}),
          ...(new_value !== undefined ? { new_value } : {}),
          ...(use_tab !== undefined ? { use_tab } : {}),
          ...(row_index !== undefined ? { row_index } : {}),
          ...(row_number !== undefined ? { row_number } : {}),
          ...(double_click !== undefined ? { double_click } : {}),
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
          .optional()
          .describe('Title of the window to capture'),
        pid: z
          .number()
          .int()
          .optional()
          .describe(
            'Process ID of the target application. Use this to avoid ambiguity when multiple windows share the same title. Returned by pb_launch_app.',
          ),
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
    async ({ window_title, pid, reference_name, references_dir }) => {
      const resolvedDir =
        references_dir ?? process.env['PB_REFERENCES_DIR'] ?? './references';

      let result: BridgeResult;
      try {
        result = await callBridge('save_reference', {
          ...(window_title !== undefined ? { window_title } : {}),
          ...(pid !== undefined ? { pid } : {}),
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
          .optional()
          .describe('Title of the window to compare'),
        pid: z
          .number()
          .int()
          .optional()
          .describe(
            'Process ID of the target application. Use this to avoid ambiguity when multiple windows share the same title. Returned by pb_launch_app.',
          ),
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
        max_diff_percent: z
          .number()
          .min(0)
          .max(100)
          .optional()
          .describe(
            'Maximum acceptable difference percentage for pass/fail (default: 1.0). If difference_percent exceeds this, result is "failed".',
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
    async ({ window_title, pid, reference_name, threshold = 0.1, max_diff_percent = 1.0, references_dir }) => {
      const resolvedDir =
        references_dir ?? process.env['PB_REFERENCES_DIR'] ?? './references';

      let result: BridgeResult;
      try {
        result = await callBridge('visual_compare', {
          ...(window_title !== undefined ? { window_title } : {}),
          ...(pid !== undefined ? { pid } : {}),
          reference_name,
          threshold,
          max_diff_percent,
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
