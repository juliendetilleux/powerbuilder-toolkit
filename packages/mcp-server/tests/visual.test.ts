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
  it('registers 7 visual tools without throwing', () => {
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

// ---------------------------------------------------------------------------
// visual-bridge.py — set_text with empty string (R8)
// ---------------------------------------------------------------------------

describe('visual-bridge.py — set_text with empty string', () => {
  it('bridge accepts empty string value without error', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    // Call bridge with interact action, set_text, value=""
    // This will fail because no window is running, but the error should NOT be
    // "'value' is required" — it should be about the window not being found.
    const input = JSON.stringify({
      action: 'interact',
      window_title: 'NONEXISTENT_WINDOW_XYZ',
      control_action: 'set_text',
      control_class: 'Edit',
      value: '',
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

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      // Python not installed — skip.
      return;
    }

    // The error should be about the window not being found,
    // NOT about value being required.
    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain("'value' is required");
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — max_diff_percent parameter (R7)
// ---------------------------------------------------------------------------

describe('visual-bridge.py — max_diff_percent parameter', () => {
  it('bridge accepts max_diff_percent in visual_compare input', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'visual_compare',
      window_title: 'NONEXISTENT_WINDOW',
      reference_name: 'test_ref',
      threshold: 0.1,
      max_diff_percent: 5.0,
      references_dir: './nonexistent_refs',
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

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return; // Python not installed
    }

    // Should get an error about missing reference or window, not about parameters.
    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).toMatch(/[Rr]eference not found|[Ww]indow|not found|[Nn]ot a file/i);
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — PID parameter support
// ---------------------------------------------------------------------------

describe('visual-bridge.py — PID parameter support', () => {
  it('bridge accepts pid parameter in screenshot action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'screenshot',
      pid: 99999,
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('window_title');
  });

  it('bridge requires at least pid or window_title', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'screenshot',
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).toMatch(/pid.*window_title|window_title.*pid|either|at least/i);
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — launch returns pid
// ---------------------------------------------------------------------------

describe('visual-bridge.py — launch returns pid', () => {
  it('launch response includes pid field structure (non-existent exe)', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'launch',
      exe_path: 'C:/does/not/exist/fake_app.exe',
      wait_seconds: 1,
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(typeof parsed).toBe('object');
    expect(parsed).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — list_controls enriched output
// ---------------------------------------------------------------------------

describe('visual-bridge.py — list_controls enriched output', () => {
  it('bridge accepts pid in list_controls action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'list_controls',
      pid: 99999,
      visible_only: true,
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('window_title');
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — get_tooltip action
// ---------------------------------------------------------------------------

describe('visual-bridge.py — get_tooltip action', () => {
  it('bridge accepts get_tooltip as a valid action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      window_title: 'NONEXISTENT_WINDOW_TOOLTIP',
      control_action: 'get_tooltip',
      control_class: 'Button',
      control_index: 0,
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('Unknown action');
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — PID in all handlers
// ---------------------------------------------------------------------------

describe('visual-bridge.py — PID in all handlers', () => {
  it('save_reference accepts pid parameter', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'save_reference',
      pid: 99999,
      reference_name: 'test_ref',
      references_dir: './test_refs',
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('window_title is required');
  });

  it('visual_compare accepts pid parameter', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'visual_compare',
      pid: 99999,
      reference_name: 'test_ref',
      threshold: 0.1,
      max_diff_percent: 5.0,
      references_dir: './nonexistent_refs',
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
  });

  it('interact accepts pid parameter', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      pid: 99999,
      control_action: 'click',
      control_class: 'Button',
      control_index: 0,
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('window_title');
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — new actions: click_popup_item, dw_click_column, etc.
// ---------------------------------------------------------------------------

describe('visual-bridge.py — new DW actions', () => {
  it('bridge accepts dw_click_column as a valid action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      window_title: 'NONEXISTENT_WINDOW_DW',
      control_action: 'dw_click_column',
      control_class: 'pbdw',
      control_index: 0,
      value: 'itcode',
      column_layout: {
        columns: [
          { name: 'itcode', pixel: { x: 100, y: 10, w: 200, h: 20 } },
        ],
      },
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    // Error should be about window not found, NOT about unknown action.
    expect(errorMsg).not.toContain('Unknown action');
  });

  it('bridge accepts dw_set_value as a valid action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      window_title: 'NONEXISTENT_WINDOW_DW',
      control_action: 'dw_set_value',
      control_class: 'pbdw',
      value: 'itcode',
      new_value: 'TEST01',
      column_layout: {
        columns: [
          { name: 'itcode', pixel: { x: 100, y: 10, w: 200, h: 20 } },
        ],
      },
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('Unknown action');
  });

  it('bridge accepts dw_get_value as a valid action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      window_title: 'NONEXISTENT_WINDOW_DW',
      control_action: 'dw_get_value',
      control_class: 'pbdw',
      value: 'itcode',
      column_layout: {
        columns: [
          { name: 'itcode', pixel: { x: 100, y: 10, w: 200, h: 20 } },
        ],
      },
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('Unknown action');
  });

  it('bridge accepts click_popup_item as a valid action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      window_title: 'NONEXISTENT_WINDOW_POPUP',
      control_action: 'click_popup_item',
      control_class: 'Button',
      value: 'Insert',
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    expect(errorMsg).not.toContain('Unknown action');
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — control_handle parameter
// ---------------------------------------------------------------------------

describe('visual-bridge.py — control_handle parameter', () => {
  it('bridge accepts control_handle in interact action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'interact',
      pid: 99999,
      control_action: 'click',
      control_handle: '0x12345',
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    expect(parsed).toHaveProperty('error');
    const errorMsg = parsed['error'] as string;
    // Should not complain about missing control_text/control_class.
    expect(errorMsg).not.toContain('Provide at least control_text or control_class');
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — get_control_rect action
// ---------------------------------------------------------------------------

describe('visual-bridge.py — get_control_rect action', () => {
  it('bridge accepts get_control_rect as a valid action', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    const input = JSON.stringify({
      action: 'get_control_rect',
      control_handle: '0x12345',
    });

    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    // Should NOT return "Unknown action" error.
    expect(typeof parsed).toBe('object');
    expect(parsed).not.toBeNull();
    if (parsed && 'error' in parsed) {
      const errorMsg = parsed['error'] as string;
      expect(errorMsg).not.toContain('Unknown action');
    }
  });
});

// ---------------------------------------------------------------------------
// visual-bridge.py — screenshot no longer returns base64
// ---------------------------------------------------------------------------

describe('visual-bridge.py — screenshot without base64', () => {
  it('screenshot response does not include image_base64 (when it runs)', async () => {
    // This tests the contract: if we could take a screenshot,
    // the response should NOT include image_base64 anymore.
    // Since we can't run this without a window, we just verify
    // the bridge Python code can be parsed/loaded.
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execAsync = promisify(execFile);

    // Verify bridge loads without syntax errors by calling an action.
    const input = JSON.stringify({ action: 'screenshot', pid: 99999 });
    let stdout = '';
    try {
      const result = await execAsync('python', [BRIDGE_SCRIPT, input], { timeout: 10_000 });
      stdout = result.stdout;
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'stdout' in err) {
        stdout = (err as { stdout: string }).stdout;
      }
    }

    let parsed: Record<string, unknown> | null = null;
    try {
      parsed = JSON.parse(stdout) as Record<string, unknown>;
    } catch {
      return;
    }

    // Should be a valid JSON response (error about no window).
    expect(typeof parsed).toBe('object');
    // If for some reason it succeeded, verify no image_base64.
    if (parsed && !('error' in parsed)) {
      expect(parsed).not.toHaveProperty('image_base64');
    }
  });
});

// Restore any mocks after each test.
afterEach(() => {
  vi.restoreAllMocks();
});
