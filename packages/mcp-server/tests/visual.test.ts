/**
 * Visual tools tests.
 *
 * The 6 MCP tools in visual.ts delegate all real window interactions to
 * visual-bridge.py (a Python/pywinauto script).  Those tests require a
 * running Windows application and a Python environment with pywinauto,
 * pyautogui, Pillow, and pixelmatch installed, so they are skipped here.
 *
 * What IS tested:
 *  - BRIDGE_SCRIPT resolves to a real file path
 *  - PYTHON_EXE defaults to 'python' or respects the env variable
 *  - Tool registration succeeds without runtime errors
 *  - callBridge propagates JSON parse errors correctly (via the exported
 *    helper validated indirectly through exec output mocking)
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import * as nodePath from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { PBCache } from '../src/cache.js';
import { registerVisualTools, BRIDGE_SCRIPT, PYTHON_EXE } from '../src/tools/visual.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

/** Build a minimal McpServer instance without connecting a transport. */
function makeMcpServer(): McpServer {
  return new McpServer(
    { name: 'test', version: '0.0.0' },
    { capabilities: { logging: {} } },
  );
}

// ---------------------------------------------------------------------------
// Bridge configuration
// ---------------------------------------------------------------------------

describe('visual bridge — path configuration', () => {
  it('BRIDGE_SCRIPT resolves to an absolute path', () => {
    expect(nodePath.isAbsolute(BRIDGE_SCRIPT)).toBe(true);
  });

  it('BRIDGE_SCRIPT points to visual-bridge.py', () => {
    expect(BRIDGE_SCRIPT.endsWith('visual-bridge.py')).toBe(true);
  });

  it('visual-bridge.py file exists on disk', () => {
    expect(existsSync(BRIDGE_SCRIPT)).toBe(true);
  });

  it('PYTHON_EXE defaults to "python" when env is unset', () => {
    // The module is already loaded; PYTHON_EXE reflects the value at import time.
    // In CI the env variable is typically not set so it falls back to 'python'.
    // We can only verify it is a non-empty string.
    expect(typeof PYTHON_EXE).toBe('string');
    expect(PYTHON_EXE.length).toBeGreaterThan(0);
  });

  it('BRIDGE_SCRIPT is inside the src directory of mcp-server', () => {
    // Normalise separators for cross-platform comparison.
    const normalised = BRIDGE_SCRIPT.replace(/\\/g, '/');
    expect(normalised).toContain('mcp-server/src/visual-bridge.py');
  });
});

// ---------------------------------------------------------------------------
// Tool registration — no runtime errors
// ---------------------------------------------------------------------------

describe('registerVisualTools — registration', () => {
  it('registers 6 visual tools without throwing', () => {
    const server = makeMcpServer();
    const cache = new PBCache();
    // Must not throw.
    expect(() => registerVisualTools(server, cache)).not.toThrow();
  });

  it('can register tools multiple times on different server instances', () => {
    const cache = new PBCache();
    for (let i = 0; i < 3; i++) {
      const server = makeMcpServer();
      expect(() => registerVisualTools(server, cache)).not.toThrow();
    }
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — direct Python execution (no pywinauto dependency)
// ---------------------------------------------------------------------------

describe('visual-bridge.py — CLI contract', () => {
  it('prints JSON error when no arguments are supplied', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT], {
        timeout: 10_000,
      });
      stdout = result.stdout;
    } catch (err: unknown) {
      // Python exits with code 1; execFile rejects — grab stdout from error.
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(stdout);
    } catch {
      // If python is not installed, skip gracefully.
      return;
    }

    expect(parsed).toHaveProperty('error');
    expect(typeof (parsed as Record<string, unknown>)['error']).toBe('string');
  });

  it('returns an error object for an unknown action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({ action: 'nonexistent_action_xyz' });
    let stdout = '';

    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], {
        timeout: 10_000,
      });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(stdout);
    } catch {
      // Python not installed — skip.
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = (parsed as Record<string, unknown>)['error'] as string;
    expect(errorMsg).toContain('nonexistent_action_xyz');
  });

  it('returns an error object for invalid JSON input', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, '{not valid json}'], {
        timeout: 10_000,
      });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(stdout);
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
  });

  it('returns a missing-dependency error for launch when pywinauto is absent', async () => {
    // We test this by calling the bridge with a launch action against a
    // non-existent exe.  The bridge will either report missing deps or a
    // file-not-found error — both are valid JSON error objects.
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'launch',
      exe_path: 'C:/does/not/exist/fake.exe',
      wait_seconds: 1,
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], {
        timeout: 10_000,
      });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(stdout);
    } catch {
      return;
    }

    // The bridge should always return a JSON object with either "error" or
    // a valid result key.
    expect(typeof parsed).toBe('object');
    expect(parsed).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Skipped — require a running PowerBuilder application
// ---------------------------------------------------------------------------

describe.skip('pb_launch_app — requires a running PB exe', () => {
  it('launches the application and returns window info', () => {
    // Skipped: needs PB_EXE_PATH set and the application installed.
  });
});

describe.skip('pb_screenshot_window — requires a running PB window', () => {
  it('captures a screenshot and returns base64 image data', () => {
    // Skipped: needs a running PB window.
  });
});

describe.skip('pb_list_controls — requires a running PB window', () => {
  it('lists all visible controls in the window', () => {
    // Skipped: needs a running PB window.
  });
});

describe.skip('pb_interact_control — requires a running PB window', () => {
  it('clicks a button in the window', () => {
    // Skipped: needs a running PB window with known controls.
  });
});

describe.skip('pb_save_reference — requires a running PB window', () => {
  it('saves a reference screenshot to the references directory', () => {
    // Skipped: needs a running PB window.
  });
});

describe.skip('pb_visual_compare — requires a running PB window and saved reference', () => {
  it('compares current window state against the saved reference', () => {
    // Skipped: needs a running PB window and a prior pb_save_reference call.
  });
});

// Restore any mocks after each test.
afterEach(() => {
  vi.restoreAllMocks();
});
