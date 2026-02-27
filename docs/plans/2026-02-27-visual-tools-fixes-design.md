# Visual Tools Fixes & Enhancements — Design Document

**Date**: 2026-02-27
**Scope**: 9 issues identified during PMIX article creation automation
**Approach**: Surgical fixes in existing files + 1 new MCP tool + 4 new actions
**Architecture**: Hybrid (Python bridge + TypeScript .srd parsing)

## Context

During hands-on testing of the PB MCP visual tools (automating article creation in PMIX), 9 problems were identified. This design addresses all 9 with minimal architectural changes.

**Files affected**:
- `packages/mcp-server/src/visual-bridge.py` — Python automation bridge
- `packages/mcp-server/src/tools/visual.ts` — MCP tool definitions
- `packages/pb-parser/src/` — New DW layout parser
- `packages/mcp-server/tests/visual.test.ts` — Test updates

## Fix #1 — Screenshot: Remove base64 from bridge response

**Problem**: `pb_screenshot_window` returns base64-encoded PNG in JSON (~78K chars), exceeding MCP token limits.

**Changes**:

### visual-bridge.py (`do_screenshot`)
- Remove `image_base64` field from the returned JSON
- Keep saving PNG to disk (already done)
- Return only metadata: `{status, pid, window_title, save_path, size}`

### visual.ts (`pb_screenshot_window` handler)
- After `callBridge()`, read the saved PNG file from `save_path`
- Encode to base64 in TypeScript using `fs.readFileSync()` + `Buffer.toString('base64')`
- Return MCP response with dual content:
  ```typescript
  return {
    content: [
      { type: 'text', text: JSON.stringify({status, pid, window_title, save_path, size}) },
      { type: 'image', data: base64FromFile, mimeType: 'image/png' }
    ]
  };
  ```

**Result**: Claude Code sees the image directly. No token overflow.

## Fix #2 — New tool: `pb_dw_get_columns`

**Problem**: DW columns are not Win32 controls. `pb_list_controls` can't enumerate them. Clicking a DW field requires knowing its pixel position.

**Changes**:

### pb-parser: New function `parseDwLayout(srdContent: string)`
- Parse the detail band of a .srd file
- Extract column objects: `name`, `id`, `type`, `x`, `y`, `width`, `height`, `tabsequence`, `visible`, `edit.limit`, `dddw.name` (if dropdown)
- Extract text objects (labels): `name`, `text`, `x`, `y`, `width`, `height`
- Extract DataWindow dimensions: detail band `height`, total width from rightmost column

### visual.ts: New tool `pb_dw_get_columns`
**Input schema**:
```
dataobject: string (required) — e.g. "d_item_update1"
pid: number (optional) — running app PID for pixel resolution
control_handle: string (optional) — hex handle of the pbdw control
```

**Process**:
1. Find .srd file via cache: `cache.findObject(dataobject, 'datawindow')`
2. Read and parse with `parseDwLayout()`
3. If `pid` + `control_handle` provided:
   - Call bridge to get control's client rect (width, height in Win32 pixels)
   - Calculate pixel coords: `pixel_x = pbu_x / dw_pbu_width * control_pixel_width`
4. Return columns with PBU coords and optional pixel coords

**Output**:
```json
{
  "dataobject": "d_item_update1",
  "dw_size_pbu": {"width": 2907, "height": 480},
  "control_size_px": {"width": 636, "height": 120},
  "columns": [
    {
      "name": "itcode", "id": 1, "type": "char(20)",
      "pbu": {"x": 841, "y": 44, "w": 855, "h": 64},
      "pixel": {"x": 184, "y": 11, "w": 187, "h": 16},
      "tab": 20, "visible": true, "tag": "Code article",
      "edit_limit": 20, "edit_case": "upper"
    }
  ],
  "labels": [
    {"name": "itcode_t", "text": "Code", "pbu": {"x": 686, "y": 44, "w": 137, "h": 64}}
  ]
}
```

## Fix #3 — DPI scaling: Use click_input everywhere

**Problem**: Win32 coordinates are DPI-scaled (~130% on some machines). `pyautogui.click()` and `ctrl.click()` don't handle this. Only `pywinauto.click_input()` works correctly.

**Changes**:

### visual-bridge.py

**`do_interact()` — click action**:
Replace `ctrl.click()` with `ctrl.click_input()` when no coords:
```python
# Before:
if action == "click":
    ctrl.click_input(coords=coords) if coords else ctrl.click()

# After:
if action == "click":
    ctrl.click_input(coords=coords)  # Always use click_input
```

**New helper `_get_dpi_scale()`**:
```python
def _get_dpi_scale():
    """Get the DPI scale factor for the primary monitor."""
    try:
        import ctypes
        # Try GetScaleFactorForMonitor (most reliable)
        shcore = ctypes.windll.shcore
        monitor = ctypes.windll.user32.MonitorFromPoint(
            ctypes.wintypes.POINT(0, 0), 1)  # MONITOR_DEFAULTTOPRIMARY
        scale = ctypes.c_uint()
        shcore.GetScaleFactorForMonitor(monitor, ctypes.byref(scale))
        return scale.value / 100.0  # e.g. 1.25, 1.5
    except:
        return 1.0
```

**`do_screenshot()` — DPI-aware region capture**:
Use the DPI scale factor to convert Win32 rect to physical pixels for pyautogui:
```python
scale = _get_dpi_scale()
region = (
    int(rect.left / scale),
    int(rect.top / scale),
    int(rect.width() / scale),
    int(rect.height() / scale)
)
img = pyautogui.screenshot(region=region)
```

## Fix #4 — New action: `click_popup_item`

**Problem**: PB popup menus (class `#32768`) can't be clicked due to DPI scaling and fast disappearance.

**Changes**:

### visual-bridge.py — new action handler in `do_interact()`

**Strategy**: Try pywinauto first, fallback to WM_COMMAND.

```python
elif action == "click_popup_item":
    menu_text = data.get("value", "")

    # Approach 1: pywinauto PopupMenu
    try:
        popup_handles = pywinauto.findwindows.find_windows(class_name='#32768')
        if popup_handles:
            popup = pywinauto.Application(backend='win32').connect(
                handle=popup_handles[0]).window(handle=popup_handles[0])
            # Try to find and click menu item by text
            menu = popup.menu()
            item = menu.get_menu_path(menu_text)
            item[-1].click_input()
            return {"status": "popup_clicked", "item": menu_text, "method": "pywinauto"}
    except Exception:
        pass

    # Approach 2: WM_COMMAND fallback
    try:
        # ... enumerate menu items, find matching text, PostMessage WM_COMMAND
        return {"status": "popup_clicked", "item": menu_text, "method": "wm_command"}
    except Exception as e:
        return {"error": f"Could not click popup item '{menu_text}': {e}"}
```

### visual.ts
- Add `'click_popup_item'` to the action enum
- Update description

## Fix #5 — New actions: `dw_click_column` and `dw_set_value`

**Problem**: Clicking a DW doesn't activate column editing. Need to click at exact column position and verify Edit control appears.

**Changes**:

### visual-bridge.py — two new actions in `do_interact()`

**`dw_click_column`**:
```python
elif action == "dw_click_column":
    column_name = data.get("value", "")
    column_layout = data.get("column_layout", {})
    # Find column in layout
    col = next((c for c in column_layout.get("columns", []) if c["name"] == column_name), None)
    if not col:
        return {"error": f"Column '{column_name}' not found in layout"}
    # Calculate center pixel coords
    px = col["pixel"]
    center_x = px["x"] + px["w"] // 2
    center_y = px["y"] + px["h"] // 2
    ctrl.click_input(coords=(center_x, center_y))
    time.sleep(0.3)
    # Verify Edit control appeared
    edit = _find_active_edit(ctrl)
    if edit:
        return {"status": "editing", "column": column_name,
                "edit_rect": _rect_dict(edit.rectangle())}
    else:
        return {"status": "clicked_no_edit", "column": column_name}
```

**`dw_set_value`**:
```python
elif action == "dw_set_value":
    column_name = data.get("value", "")  # Column name
    new_value = data.get("new_value", "")  # Value to set
    column_layout = data.get("column_layout", {})
    # Click column first
    # ... same as dw_click_column ...
    # Find active Edit, clear and type
    edit = _find_active_edit(ctrl)
    if edit:
        edit.set_text("")
        edit.type_keys(new_value, with_spaces=True)
        return {"status": "value_set", "column": column_name,
                "value": edit.window_text()}
    else:
        return {"error": f"No edit control activated for column '{column_name}'"}
```

**Helper `_find_active_edit(dw_ctrl)`**:
```python
def _find_active_edit(dw_ctrl):
    """Find the active Edit control inside a DataWindow."""
    for child in dw_ctrl.children():
        if child.class_name() == 'Edit' and child.is_visible():
            r = child.rectangle()
            if r.width() > 10:  # Real edit, not hidden
                return child
    return None
```

### visual.ts
- Add `'dw_click_column'`, `'dw_set_value'` to action enum
- Add `column_layout` parameter (JSON object, optional)
- Add `new_value` parameter (string, optional, for dw_set_value)

## Fix #7 — `control_handle` parameter

**Problem**: 50+ `pbdw` controls without text. Only Win32 handle distinguishes them.

**Changes**:

### visual.ts
- Add `control_handle` parameter: `z.string().optional().describe('Win32 handle in hex (e.g. "0x31092")')`

### visual-bridge.py (`_find_control`)
- If `control_handle` provided, skip class/text/index search:
```python
handle_hex = data.get("control_handle")
if handle_hex:
    handle = int(handle_hex, 16)
    ctrl = app.window(handle=handle)
    return ctrl
```

## Fix #9 — New action: `dw_get_value`

**Problem**: `get_text` returns "" for DW controls instead of column values.

**Changes**:

### visual-bridge.py — new action in `do_interact()`
```python
elif action == "dw_get_value":
    column_name = data.get("value", "")
    column_layout = data.get("column_layout", {})
    # Click column to activate Edit
    # ... same as dw_click_column ...
    edit = _find_active_edit(ctrl)
    if edit:
        return {"status": "value_read", "column": column_name,
                "value": edit.window_text()}
    else:
        # Try clipboard approach: Ctrl+C
        ctrl.click_input(coords=(center_x, center_y))
        time.sleep(0.2)
        import subprocess
        subprocess.run(['clip'], input=b'', check=False)  # Clear clipboard
        ctrl.type_keys('^a^c')  # Select all, copy
        import win32clipboard
        win32clipboard.OpenClipboard()
        try:
            value = win32clipboard.GetClipboardData()
        except:
            value = ""
        finally:
            win32clipboard.CloseClipboard()
        return {"status": "value_read_clipboard", "column": column_name, "value": value}
```

### visual.ts
- Add `'dw_get_value'` to action enum

## Testing Strategy

Each fix gets dedicated tests:

| Fix | Test Type | What's Tested |
|-----|-----------|---------------|
| #1 | Unit | Bridge returns no base64; TS handler reads PNG file |
| #2 | Unit | parseDwLayout extracts columns from .srd content |
| #3 | Unit | click always uses click_input; _get_dpi_scale returns float |
| #4 | Unit | click_popup_item action accepted by bridge |
| #5 | Unit | dw_click_column/dw_set_value actions accepted |
| #7 | Unit | control_handle bypasses class/text search |
| #9 | Unit | dw_get_value action accepted |
| All | Integration (skip) | Full end-to-end with running PMIX app |

## Summary of New/Changed MCP Interface

### New Tool
- `pb_dw_get_columns(dataobject, pid?, control_handle?)`

### New Actions for `pb_interact_control`
- `click_popup_item` — click a popup menu item by text
- `dw_click_column` — click a DW column to enter edit mode
- `dw_set_value` — click a DW column and type a value
- `dw_get_value` — read the value of a DW column

### New Parameters for `pb_interact_control`
- `control_handle` — target control by Win32 handle (hex string)
- `column_layout` — DW column positions from pb_dw_get_columns
- `new_value` — value to set (for dw_set_value)

### Changed Behavior
- `pb_screenshot_window` — returns MCP image content, no base64 in bridge
- `click` action — always uses `click_input()` (DPI-safe)
- `double_click` action — already uses `double_click_input()` (OK)
- `right_click` action — already uses `right_click_input()` (OK)
