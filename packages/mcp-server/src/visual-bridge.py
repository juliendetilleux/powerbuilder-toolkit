#!/usr/bin/env python3
"""
PowerBuilder Visual Testing Bridge
===================================
Called by the MCP server (visual.ts) to interact with running PB application
windows via pywinauto.

Usage:
    python visual-bridge.py '<json>'

The JSON argument must contain an "action" key plus any action-specific keys.
The script prints a single JSON object to stdout and exits.

Requires (install with pip):
    pywinauto pyautogui Pillow pixelmatch
"""

import sys
import json
import os
import re
import time
import base64
import io


# ---------------------------------------------------------------------------
# Dependency check helper
# ---------------------------------------------------------------------------

def _check_visual_deps(include_pixelmatch: bool = False):
    """Return a list of missing package names, or an empty list if all present."""
    missing = []
    for pkg in ("pywinauto", "pyautogui", "PIL"):
        try:
            __import__(pkg)
        except ImportError:
            missing.append("Pillow" if pkg == "PIL" else pkg)
    if include_pixelmatch:
        try:
            import pixelmatch  # noqa: F401
        except ImportError:
            missing.append("pixelmatch")
    return missing


# ---------------------------------------------------------------------------
# DPI scale helper
# ---------------------------------------------------------------------------

def _get_dpi_scale():
    """Get the DPI scale factor for the primary monitor.

    Returns a float like 1.0, 1.25, 1.5, etc.
    Falls back to 1.0 if detection fails.
    """
    try:
        import ctypes
        import ctypes.wintypes
        # SetProcessDPIAware so we get real coordinates.
        ctypes.windll.user32.SetProcessDPIAware()
        # GetDpiForSystem returns the system DPI (96 = 100%).
        dpi = ctypes.windll.user32.GetDpiForSystem()
        return dpi / 96.0
    except Exception:
        try:
            import ctypes
            # Fallback: GetDeviceCaps on the desktop DC.
            hdc = ctypes.windll.user32.GetDC(0)
            dpi = ctypes.windll.gdi32.GetDeviceCaps(hdc, 88)  # LOGPIXELSX
            ctypes.windll.user32.ReleaseDC(0, hdc)
            return dpi / 96.0
        except Exception:
            return 1.0


# ---------------------------------------------------------------------------
# Control finder helper
# ---------------------------------------------------------------------------

def _find_control(win, control_text=None, control_class=None, control_index=None, visible_only=True):
    """
    Locate a control inside *win*.

    Uses ``win.descendants()`` (matching ``do_list_controls``) so that
    ``control_index`` values from ``list_controls`` output map correctly.

    When *visible_only* is True (default, matching list_controls default),
    invisible controls are excluded before indexing.

    When *control_index* is given, collects all controls matching the
    optional class/text/visibility filters and picks the one at that index.
    Otherwise delegates to pywinauto's child_window() for a unique match.

    Raises:
        ValueError  – no search criteria supplied
        IndexError  – control_index out of range
        ElementNotFoundError – pywinauto cannot find the control
    """
    import pywinauto

    if not control_text and not control_class:
        raise ValueError("Provide at least control_text or control_class.")

    if control_index is not None:
        matching = []
        for c in win.descendants():
            try:
                if visible_only and not c.is_visible():
                    continue
                if control_class and c.class_name() != control_class:
                    continue
                if control_text and control_text not in c.window_text():
                    continue
                matching.append(c)
            except Exception:
                continue
        if not matching:
            raise pywinauto.findwindows.ElementNotFoundError(
                f"No controls found matching class={control_class!r} "
                f"text={control_text!r} visible_only={visible_only}"
            )
        if control_index >= len(matching):
            available = [c.window_text()[:40] for c in matching]
            raise IndexError(
                f"control_index={control_index} out of range: "
                f"found {len(matching)} controls matching "
                f"class={control_class!r} text={control_text!r}. "
                f"Available: {available}"
            )
        return matching[control_index]
    else:
        search_params = {}
        if control_text:
            search_params["title"] = control_text
        if control_class:
            search_params["class_name"] = control_class
        return win.child_window(**search_params)


# ---------------------------------------------------------------------------
# DataWindow edit helper
# ---------------------------------------------------------------------------

def _find_active_edit(dw_ctrl):
    """Find the active Edit control inside a DataWindow after clicking a column.

    When a DW column is clicked, PB creates a transient Edit child control
    for the column being edited. This function finds it.
    """
    for child in dw_ctrl.children():
        try:
            if child.class_name() == 'Edit' and child.is_visible():
                r = child.rectangle()
                if r.width() > 10:  # Real edit, not a hidden one
                    return child
        except Exception:
            continue
    return None


# ---------------------------------------------------------------------------
# Window connection helper
# ---------------------------------------------------------------------------

def _connect_window(data: dict):
    """
    Connect to a window by PID and/or title regex.
    Returns (app, win) tuple.

    PB MDI applications often have multiple windows with the same title
    (the MDI frame and its client area).  When *pid* is given we prefer
    ``app.top_window()`` which reliably returns the main frame.
    ``window_title`` matching is attempted first but falls back to
    ``top_window()`` on ``ElementAmbiguousError``.
    """
    import pywinauto
    import warnings

    pid = data.get("pid")
    if pid is not None:
        pid = int(pid)
    window_title = data.get("window_title") or ""

    if not pid and not window_title:
        raise ValueError("Either pid or window_title must be provided")

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")

        if pid:
            app = pywinauto.Application(backend="win32").connect(process=pid)
            if window_title:
                try:
                    win = app.window(title_re=window_title)
                    # Force resolution to detect ambiguity early.
                    win.wrapper_object()
                except pywinauto.findwindows.ElementAmbiguousError:
                    win = app.top_window()
            else:
                win = app.top_window()
        else:
            try:
                app = pywinauto.Application(backend="win32").connect(title_re=window_title)
            except pywinauto.findwindows.ElementAmbiguousError:
                # Multiple processes match — pick the first.
                app = pywinauto.Application(backend="win32").connect(
                    title_re=window_title, found_index=0,
                )
            win = app.top_window()

    return app, win


# ---------------------------------------------------------------------------
# Action handlers
# ---------------------------------------------------------------------------

def do_launch(data: dict) -> dict:
    """
    Launch or reconnect to a PowerBuilder application.

    Returns:
        {status, exe, window_title, window_class, position}
    """
    missing = _check_visual_deps()
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    import pywinauto

    exe_path = data.get("exe_path", "") or os.environ.get("PB_EXE_PATH", "")
    wait_seconds = int(data.get("wait_seconds", 5))

    if not exe_path:
        return {"error": "No exe_path provided. Set PB_EXE_PATH env or pass exe_path."}
    if not os.path.isfile(exe_path):
        return {"error": f"Executable not found: {exe_path}"}

    connected = False
    app = None

    # Try connecting to an already-running instance by exe path.
    try:
        import warnings
        with warnings.catch_warnings():
            warnings.simplefilter("ignore")
            app = pywinauto.Application(backend="win32").connect(path=exe_path)
        connected = True
    except Exception:
        pass

    if not connected:
        app = pywinauto.Application(backend="win32").start(exe_path)
        time.sleep(wait_seconds)

    win = app.top_window()
    win.wait("visible", timeout=wait_seconds)

    rect = win.rectangle()
    return {
        "status": "connected" if connected else "launched",
        "exe": exe_path,
        "pid": win.process_id(),
        "window_title": win.window_text(),
        "window_class": win.class_name(),
        "position": {
            "left": rect.left,
            "top": rect.top,
            "width": rect.width(),
            "height": rect.height(),
        },
    }


def do_screenshot(data: dict) -> dict:
    """
    Capture a screenshot of a running window.

    Returns:
        {status, window_title, save_path, size, image_base64}
    """
    missing = _check_visual_deps()
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    import pywinauto
    import pyautogui
    from PIL import Image  # noqa: F401 (imported for type-checking; pyautogui returns PIL Image)

    save_path = data.get("save_path") or None

    try:
        app, win = _connect_window(data)
        win.set_focus()
        time.sleep(0.5)

        # Use pywinauto's capture_as_image which handles DPI correctly.
        try:
            img = win.capture_as_image()
        except Exception:
            # Fallback to pyautogui with DPI adjustment.
            rect = win.rectangle()
            scale = _get_dpi_scale()
            if scale != 1.0:
                region = (
                    int(rect.left / scale),
                    int(rect.top / scale),
                    int(rect.width() / scale),
                    int(rect.height() / scale),
                )
            else:
                region = (rect.left, rect.top, rect.width(), rect.height())
            img = pyautogui.screenshot(region=region)

        if not save_path:
            os.makedirs("screenshots", exist_ok=True)
            timestamp = time.strftime("%Y%m%d_%H%M%S")
            safe_title = re.sub(r"[^\w]", "_", win.window_text())[:30]
            save_path = f"screenshots/{safe_title}_{timestamp}.png"

        img.save(save_path)

        return {
            "status": "captured",
            "pid": win.process_id(),
            "window_title": win.window_text(),
            "save_path": os.path.abspath(save_path),
            "size": {"width": img.width, "height": img.height},
        }
    except ValueError as ve:
        return {"error": str(ve)}
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching pid={data.get('pid')}, title='{data.get('window_title', '')}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_list_controls(data: dict) -> dict:
    """
    Enumerate controls in a running window.

    Returns:
        {window, pid, control_count, class_summary, controls}
    """
    missing = _check_visual_deps()
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    import pywinauto

    visible_only = bool(data.get("visible_only", True))

    try:
        app, win = _connect_window(data)

        controls = []
        class_counters: dict = {}

        for ctrl in win.descendants():
            try:
                is_visible = ctrl.is_visible()
                if visible_only and not is_visible:
                    continue
                rect = ctrl.rectangle()
                cls_name = ctrl.class_name()

                class_counters[cls_name] = class_counters.get(cls_name, -1) + 1

                tooltip = ""
                try:
                    el_info = ctrl.element_info
                    if hasattr(el_info, 'rich_text') and el_info.rich_text:
                        tooltip = str(el_info.rich_text)[:200]
                    elif hasattr(el_info, 'description') and el_info.description:
                        tooltip = str(el_info.description)[:200]
                except Exception:
                    pass

                control_info: dict = {
                    "index": len(controls),
                    "class_name": cls_name,
                    "text": ctrl.window_text()[:80],
                    "enabled": ctrl.is_enabled(),
                    "visible": is_visible,
                    "tooltip": tooltip,
                    "rect": {
                        "left": rect.left,
                        "top": rect.top,
                        "width": rect.width(),
                        "height": rect.height(),
                    },
                }
                controls.append(control_info)
            except Exception:
                continue

        # Build a per-class count summary.
        class_summary: dict = {}
        for ctrl_info in controls:
            cls = ctrl_info["class_name"]
            if cls not in class_summary:
                class_summary[cls] = {"count": 0, "indices": []}
            class_summary[cls]["count"] += 1
            class_summary[cls]["indices"].append(ctrl_info["index"])

        return {
            "window": win.window_text(),
            "pid": win.process_id(),
            "control_count": len(controls),
            "class_summary": class_summary,
            "controls": controls,
        }
    except ValueError as ve:
        return {"error": str(ve)}
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching pid={data.get('pid')}, title='{data.get('window_title', '')}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_interact(data: dict) -> dict:
    """
    Perform an action on a control inside a window.

    Returns:
        {status, pid, control?, text?, value?, tooltip?}
    """
    missing = _check_visual_deps()
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    import pywinauto

    action = data.get("control_action", "")
    control_text = data.get("control_text") or None
    control_class = data.get("control_class") or None
    control_index = data.get("control_index")  # may be None or int
    if control_index is not None:
        control_index = int(control_index)
    value = data.get("value")  # None when absent, "" when explicitly empty
    control_handle = data.get("control_handle")  # hex string e.g. "0x31092"

    visible_only = bool(data.get("visible_only", True))

    # Optional click coordinates (relative to control's top-left).
    raw_coords = data.get("coords")  # e.g. {"x": 100, "y": 30}
    coords = None
    if raw_coords and isinstance(raw_coords, dict):
        cx = raw_coords.get("x")
        cy = raw_coords.get("y")
        if cx is not None and cy is not None:
            coords = (int(cx), int(cy))

    try:
        app, win = _connect_window(data)

        # If control_handle is given, target control directly by Win32 handle.
        if control_handle:
            try:
                handle = int(control_handle, 16)
                ctrl = pywinauto.controls.hwndwrapper.HwndWrapper(handle)
            except Exception as e:
                return {"error": f"Invalid control_handle '{control_handle}': {e}"}
        else:
            try:
                ctrl = _find_control(
                    win,
                    control_text=control_text,
                    control_class=control_class,
                    control_index=control_index,
                    visible_only=visible_only,
                )
            except ValueError as ve:
                return {"error": str(ve)}
            except IndexError as ie:
                return {"error": str(ie)}

        # Capture identifiers BEFORE actions that may close the window.
        cached_pid = win.process_id()
        cached_ctrl_text = ctrl.window_text()

        if action == "click":
            if coords:
                ctrl.click_input(coords=coords)
            else:
                ctrl.click_input()
            time.sleep(0.3)
            return {"status": "clicked", "pid": cached_pid, "control": cached_ctrl_text}

        elif action == "double_click":
            ctrl.double_click_input(coords=coords)
            time.sleep(0.5)
            return {"status": "double_clicked", "pid": cached_pid, "control": cached_ctrl_text}

        elif action == "right_click":
            ctrl.right_click_input(coords=coords)
            time.sleep(0.3)
            return {"status": "right_clicked", "pid": cached_pid, "control": cached_ctrl_text}

        elif action == "set_text":
            if value is None:
                return {"error": "'value' is required for set_text action."}
            ctrl.set_text(value)
            return {"status": "text_set", "pid": cached_pid, "value": value}

        elif action == "get_text":
            return {"status": "ok", "pid": cached_pid, "text": ctrl.window_text()}

        elif action == "get_tooltip":
            tooltip = ""
            try:
                el_info = ctrl.element_info
                if hasattr(el_info, 'rich_text') and el_info.rich_text:
                    tooltip = str(el_info.rich_text)[:200]
                elif hasattr(el_info, 'description') and el_info.description:
                    tooltip = str(el_info.description)[:200]
            except Exception:
                pass
            return {"status": "ok", "pid": cached_pid, "tooltip": tooltip}

        elif action == "type_keys":
            if value is None:
                return {"error": "'value' is required for type_keys action."}
            ctrl.type_keys(value, with_spaces=True)
            time.sleep(0.3)
            return {"status": "keys_typed", "pid": cached_pid, "keys": value}

        elif action == "select":
            if value is None:
                return {"error": "'value' is required for select action."}
            ctrl.select(value)
            return {"status": "selected", "pid": cached_pid, "value": value}

        elif action == "click_popup_item":
            menu_text = value or ""
            if not menu_text:
                return {"error": "'value' is required for click_popup_item (the menu item text)."}

            # Approach 1: Find popup window (#32768) and click item via pywinauto.
            try:
                import pywinauto.findwindows
                popup_handles = pywinauto.findwindows.find_windows(class_name='#32768')
                if popup_handles:
                    popup_app = pywinauto.Application(backend='win32').connect(
                        handle=popup_handles[0])
                    popup_win = popup_app.window(handle=popup_handles[0])
                    menu = popup_win.menu()
                    menu_path = menu.get_menu_path(menu_text)
                    if menu_path:
                        menu_path[-1].click_input()
                        return {"status": "popup_clicked", "pid": cached_pid,
                                "item": menu_text, "method": "pywinauto"}
            except Exception:
                pass

            # Approach 2: WM_COMMAND fallback — enumerate menu items and send message.
            try:
                import ctypes
                import ctypes.wintypes
                popup_handles = pywinauto.findwindows.find_windows(class_name='#32768')
                if popup_handles:
                    hmenu = ctypes.windll.user32.SendMessageW(
                        popup_handles[0], 0x01E1, 0, 0)  # MN_GETHMENU
                    if hmenu:
                        count = ctypes.windll.user32.GetMenuItemCount(hmenu)
                        for i in range(count):
                            buf = ctypes.create_unicode_buffer(256)
                            ctypes.windll.user32.GetMenuStringW(
                                hmenu, i, buf, 256, 0x00000400)  # MF_BYPOSITION
                            if menu_text.lower() in buf.value.lower():
                                item_id = ctypes.windll.user32.GetMenuItemID(hmenu, i)
                                # Send WM_COMMAND to the parent window.
                                parent_hwnd = ctypes.windll.user32.GetParent(popup_handles[0])
                                if parent_hwnd == 0:
                                    parent_hwnd = win.handle
                                ctypes.windll.user32.PostMessageW(
                                    parent_hwnd, 0x0111, item_id, 0)  # WM_COMMAND
                                return {"status": "popup_clicked", "pid": cached_pid,
                                        "item": menu_text, "method": "wm_command"}
            except Exception as e:
                return {"error": f"Could not click popup item '{menu_text}': {e}"}

            return {"error": f"No popup menu found or item '{menu_text}' not found."}

        elif action == "dw_click_column":
            column_name = value or ""
            if not column_name:
                return {"error": "'value' is required for dw_click_column (the column name)."}
            column_layout = data.get("column_layout", {})
            columns = column_layout.get("columns", [])
            col = next((c for c in columns if c.get("name") == column_name), None)
            if not col:
                return {"error": f"Column '{column_name}' not found in column_layout. "
                        f"Available: {[c.get('name') for c in columns]}"}
            px = col.get("pixel", {})
            if not px:
                return {"error": f"Column '{column_name}' has no pixel coordinates. "
                        "Pass pid and control_handle to pb_dw_get_columns."}
            # pixel coords are relative to one detail row.
            # row_height_px = estimated height of a single row.
            row_height = column_layout.get("row_height_px", 16)
            # Click on the first visible data row: offset past the header band.
            # DW header is typically 1-2 row heights tall. Use 1.5x as default.
            row_index = data.get("row_index", 1)
            header_offset = int(row_height * 1.2)
            center_x = px.get("x", 0) + px.get("w", 0) // 2
            center_y = header_offset + (row_index - 1) * row_height + row_height // 2
            ctrl.click_input(coords=(center_x, center_y))
            time.sleep(0.3)
            edit = _find_active_edit(ctrl)
            if edit:
                r = edit.rectangle()
                return {"status": "editing", "pid": cached_pid,
                        "column": column_name,
                        "edit_rect": {"left": r.left, "top": r.top,
                                      "width": r.width(), "height": r.height()}}
            else:
                return {"status": "clicked_no_edit", "pid": cached_pid,
                        "column": column_name}

        elif action == "dw_set_value":
            column_name = value or ""
            new_value = data.get("new_value", "")
            if not column_name:
                return {"error": "'value' is required for dw_set_value (the column name)."}
            column_layout = data.get("column_layout", {})
            columns = column_layout.get("columns", [])
            col = next((c for c in columns if c.get("name") == column_name), None)
            if not col:
                return {"error": f"Column '{column_name}' not found in column_layout."}
            px = col.get("pixel", {})
            if not px:
                return {"error": f"Column '{column_name}' has no pixel coordinates."}
            row_height = column_layout.get("row_height_px", 16)
            row_index = data.get("row_index", 1)
            header_offset = int(row_height * 1.2)
            center_x = px.get("x", 0) + px.get("w", 0) // 2
            center_y = header_offset + (row_index - 1) * row_height + row_height // 2
            ctrl.click_input(coords=(center_x, center_y))
            time.sleep(0.3)
            edit = _find_active_edit(ctrl)
            if edit:
                edit.set_text("")
                edit.type_keys(str(new_value), with_spaces=True)
                return {"status": "value_set", "pid": cached_pid,
                        "column": column_name,
                        "value": edit.window_text()}
            else:
                return {"error": f"No edit control activated for column '{column_name}'."}

        elif action == "dw_get_value":
            column_name = value or ""
            if not column_name:
                return {"error": "'value' is required for dw_get_value (the column name)."}
            column_layout = data.get("column_layout", {})
            columns = column_layout.get("columns", [])
            col = next((c for c in columns if c.get("name") == column_name), None)
            if not col:
                return {"error": f"Column '{column_name}' not found in column_layout."}
            px = col.get("pixel", {})
            if not px:
                return {"error": f"Column '{column_name}' has no pixel coordinates."}
            row_height = column_layout.get("row_height_px", 16)
            row_index = data.get("row_index", 1)
            header_offset = int(row_height * 1.2)
            center_x = px.get("x", 0) + px.get("w", 0) // 2
            center_y = header_offset + (row_index - 1) * row_height + row_height // 2
            ctrl.click_input(coords=(center_x, center_y))
            time.sleep(0.3)
            edit = _find_active_edit(ctrl)
            if edit:
                return {"status": "value_read", "pid": cached_pid,
                        "column": column_name,
                        "value": edit.window_text()}
            else:
                return {"status": "value_read_empty", "pid": cached_pid,
                        "column": column_name, "value": ""}

        else:
            return {
                "error": (
                    f"Unknown action '{action}'. "
                    "Use: click, double_click, right_click, set_text, get_text, "
                    "get_tooltip, select, click_popup_item, dw_click_column, "
                    "dw_set_value, dw_get_value"
                )
            }

    except ValueError as ve:
        return {"error": str(ve)}
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"Window or control not found matching pid={data.get('pid')}, title='{data.get('window_title', '')}'."}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_get_control_rect(data: dict) -> dict:
    """
    Get the client rectangle of a specific control by handle.
    Used by pb_dw_get_columns to calculate pixel coordinates.

    Returns:
        {status, handle, rect: {left, top, width, height}}
    """
    missing = _check_visual_deps()
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    import pywinauto
    import pywinauto.controls.hwndwrapper

    control_handle = data.get("control_handle", "")
    if not control_handle:
        return {"error": "control_handle is required for get_control_rect."}

    try:
        handle = int(control_handle, 16)
        ctrl = pywinauto.controls.hwndwrapper.HwndWrapper(handle)
        rect = ctrl.client_rect()
        return {
            "status": "ok",
            "handle": control_handle,
            "rect": {
                "left": rect.left,
                "top": rect.top,
                "width": rect.width(),
                "height": rect.height(),
            },
        }
    except Exception as exc:
        return {"error": f"get_control_rect failed: {type(exc).__name__}: {exc}"}


def do_save_reference(data: dict) -> dict:
    """
    Save a screenshot as a named visual reference.

    Returns:
        {status, pid, reference_name, path, size}
    """
    missing = _check_visual_deps()
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    import pywinauto
    import pyautogui

    reference_name = data.get("reference_name", "")
    refs_dir = data.get("references_dir") or os.environ.get("PB_REFERENCES_DIR", "./references")

    os.makedirs(refs_dir, exist_ok=True)

    try:
        app, win = _connect_window(data)
        win.set_focus()
        time.sleep(0.5)

        try:
            img = win.capture_as_image()
        except Exception:
            rect = win.rectangle()
            scale = _get_dpi_scale()
            if scale != 1.0:
                region = (
                    int(rect.left / scale),
                    int(rect.top / scale),
                    int(rect.width() / scale),
                    int(rect.height() / scale),
                )
            else:
                region = (rect.left, rect.top, rect.width(), rect.height())
            img = pyautogui.screenshot(region=region)

        safe_name = re.sub(r"[^\w]", "_", reference_name)
        save_path = os.path.join(refs_dir, f"{safe_name}.png")
        img.save(save_path)

        # Persist metadata alongside the image.
        meta_path = os.path.join(refs_dir, f"{safe_name}.json")
        meta = {
            "reference_name": reference_name,
            "window_title": win.window_text(),
            "captured_at": time.strftime("%Y-%m-%d %H:%M:%S"),
            "size": {"width": img.width, "height": img.height},
            "image_path": os.path.abspath(save_path),
        }
        with open(meta_path, "w") as fh:
            json.dump(meta, fh, indent=2)

        return {
            "status": "saved",
            "pid": win.process_id(),
            "reference_name": reference_name,
            "path": os.path.abspath(save_path),
            "size": {"width": img.width, "height": img.height},
        }

    except ValueError as ve:
        return {"error": str(ve)}
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching pid={data.get('pid')}, title='{data.get('window_title', '')}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_visual_compare(data: dict) -> dict:
    """
    Compare the current window state against a saved reference.

    Returns:
        {status, pid, difference_percent, passed, diff_image_path}
    """
    missing = _check_visual_deps(include_pixelmatch=True)
    if missing:
        return {
            "error": (
                f"Missing dependencies: {', '.join(missing)}. "
                f"Install: pip install {' '.join(missing)}"
            )
        }

    from pixelmatch.contrib.PIL import pixelmatch as pm
    import pywinauto
    import pyautogui
    from PIL import Image

    reference_name = data.get("reference_name", "")
    threshold = float(data.get("threshold", 0.1))
    max_diff_pct = float(data.get("max_diff_percent", 1.0))
    refs_dir = data.get("references_dir") or os.environ.get("PB_REFERENCES_DIR", "./references")

    safe_name = re.sub(r"[^\w]", "_", reference_name)
    ref_path = os.path.join(refs_dir, f"{safe_name}.png")

    if not os.path.isfile(ref_path):
        return {
            "error": (
                f"Reference not found: {ref_path}. "
                "Use pb_save_reference first."
            )
        }

    try:
        app, win = _connect_window(data)
        win.set_focus()
        time.sleep(0.5)

        try:
            current = win.capture_as_image()
        except Exception:
            rect = win.rectangle()
            scale = _get_dpi_scale()
            if scale != 1.0:
                region = (
                    int(rect.left / scale),
                    int(rect.top / scale),
                    int(rect.width() / scale),
                    int(rect.height() / scale),
                )
            else:
                region = (rect.left, rect.top, rect.width(), rect.height())
            current = pyautogui.screenshot(region=region)

        reference = Image.open(ref_path)

        # Normalise sizes — resize current to match reference if they differ.
        if current.size != reference.size:
            current = current.resize(reference.size)

        diff_img = Image.new("RGBA", reference.size)
        num_diff = pm(reference, current, diff_img, threshold=threshold)

        total_pixels = reference.size[0] * reference.size[1]
        diff_pct = round((num_diff / total_pixels) * 100, 2) if total_pixels else 0.0

        # Persist diff and current screenshots.
        os.makedirs("screenshots/diffs", exist_ok=True)
        timestamp = time.strftime("%Y%m%d_%H%M%S")
        diff_path = f"screenshots/diffs/{safe_name}_diff_{timestamp}.png"
        diff_img.save(diff_path)

        return {
            "status": "compared",
            "pid": win.process_id(),
            "reference": os.path.abspath(ref_path),
            "difference_percent": diff_pct,
            "passed": diff_pct <= max_diff_pct,
            "max_diff_percent": max_diff_pct,
            "diff_image_path": os.path.abspath(diff_path),
            "different_pixels": num_diff,
            "total_pixels": total_pixels,
            "threshold": threshold,
        }

    except ValueError as ve:
        return {"error": str(ve)}
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching pid={data.get('pid')}, title='{data.get('window_title', '')}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No input provided"}))
        sys.exit(1)

    try:
        data = json.loads(sys.argv[1])
    except json.JSONDecodeError as exc:
        print(json.dumps({"error": f"Invalid JSON input: {exc}"}))
        sys.exit(1)

    action = data.get("action", "")

    try:
        if action == "launch":
            result = do_launch(data)
        elif action == "screenshot":
            result = do_screenshot(data)
        elif action == "list_controls":
            result = do_list_controls(data)
        elif action == "interact":
            result = do_interact(data)
        elif action == "save_reference":
            result = do_save_reference(data)
        elif action == "visual_compare":
            result = do_visual_compare(data)
        elif action == "get_control_rect":
            result = do_get_control_rect(data)
        else:
            result = {"error": f"Unknown action: {action!r}"}
    except ImportError as exc:
        result = {
            "error": (
                f"Missing dependency: {exc}. "
                "Install: pip install pywinauto pyautogui Pillow pixelmatch"
            )
        }
    except Exception as exc:
        result = {"error": f"{type(exc).__name__}: {exc}"}

    print(json.dumps(result))


if __name__ == "__main__":
    main()
