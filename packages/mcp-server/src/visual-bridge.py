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
# Control finder helper
# ---------------------------------------------------------------------------

def _find_control(win, control_text=None, control_class=None, control_index=None):
    """
    Locate a control inside *win*.

    When *control_index* is given, collects all controls matching the
    optional class/text filters and picks the one at that 0-based index.
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
        matching = [
            c for c in win.children()
            if (not control_class or c.class_name() == control_class)
            and (not control_text or control_text in c.window_text())
        ]
        if not matching:
            raise pywinauto.findwindows.ElementNotFoundError(
                f"No controls found matching class={control_class!r} "
                f"text={control_text!r}"
            )
        if control_index >= len(matching):
            raise IndexError(
                f"control_index {control_index} out of range. "
                f"Only {len(matching)} controls match."
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

    window_title = data.get("window_title", "")
    save_path = data.get("save_path") or None

    try:
        app = pywinauto.Application(backend="win32").connect(title_re=window_title)
        win = app.top_window()
        win.set_focus()
        time.sleep(0.5)

        rect = win.rectangle()
        img = pyautogui.screenshot(
            region=(rect.left, rect.top, rect.width(), rect.height())
        )

        if not save_path:
            os.makedirs("screenshots", exist_ok=True)
            timestamp = time.strftime("%Y%m%d_%H%M%S")
            safe_title = re.sub(r"[^\w]", "_", window_title)[:30]
            save_path = f"screenshots/{safe_title}_{timestamp}.png"

        img.save(save_path)

        buffer = io.BytesIO()
        img.save(buffer, format="PNG")
        img_b64 = base64.b64encode(buffer.getvalue()).decode()

        return {
            "status": "captured",
            "window_title": win.window_text(),
            "save_path": os.path.abspath(save_path),
            "size": {"width": img.width, "height": img.height},
            "image_base64": img_b64,
        }
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching '{window_title}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_list_controls(data: dict) -> dict:
    """
    Enumerate controls in a running window.

    Returns:
        {window, control_count, class_summary, controls}
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

    window_title = data.get("window_title", "")
    visible_only = bool(data.get("visible_only", True))

    try:
        app = pywinauto.Application(backend="win32").connect(title_re=window_title)
        win = app.top_window()

        controls = []
        class_counters: dict = {}

        for ctrl in win.descendants():
            try:
                if visible_only and not ctrl.is_visible():
                    continue
                rect = ctrl.rectangle()
                cls_name = ctrl.class_name()

                class_counters[cls_name] = class_counters.get(cls_name, -1) + 1

                control_info: dict = {
                    "index": len(controls),
                    "class_name": cls_name,
                    "text": ctrl.window_text()[:80],
                    "enabled": ctrl.is_enabled(),
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
            "control_count": len(controls),
            "class_summary": class_summary,
            "controls": controls,
        }
    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching '{window_title}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_interact(data: dict) -> dict:
    """
    Perform an action on a control inside a window.

    Returns:
        {status, control?, text?, value?}
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

    window_title = data.get("window_title", "")
    action = data.get("action", "")
    control_text = data.get("control_text") or None
    control_class = data.get("control_class") or None
    control_index = data.get("control_index")  # may be None or int
    if control_index is not None:
        control_index = int(control_index)
    value = data.get("value") or None

    try:
        app = pywinauto.Application(backend="win32").connect(title_re=window_title)
        win = app.top_window()

        try:
            ctrl = _find_control(
                win,
                control_text=control_text,
                control_class=control_class,
                control_index=control_index,
            )
        except ValueError as ve:
            return {"error": str(ve)}
        except IndexError as ie:
            return {"error": str(ie)}

        if action == "click":
            ctrl.click()
            time.sleep(0.3)
            return {"status": "clicked", "control": ctrl.window_text()}

        elif action == "set_text":
            if value is None:
                return {"error": "'value' is required for set_text action."}
            ctrl.set_text(value)
            return {"status": "text_set", "value": value}

        elif action == "get_text":
            return {"status": "ok", "text": ctrl.window_text()}

        elif action == "select":
            if value is None:
                return {"error": "'value' is required for select action."}
            ctrl.select(value)
            return {"status": "selected", "value": value}

        else:
            return {
                "error": (
                    f"Unknown action '{action}'. "
                    "Use: click, set_text, get_text, select"
                )
            }

    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": "Window or control not found."}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_save_reference(data: dict) -> dict:
    """
    Save a screenshot as a named visual reference.

    Returns:
        {status, reference_name, path, size}
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

    window_title = data.get("window_title", "")
    reference_name = data.get("reference_name", "")
    refs_dir = data.get("references_dir") or os.environ.get("PB_REFERENCES_DIR", "./references")

    os.makedirs(refs_dir, exist_ok=True)

    try:
        app = pywinauto.Application(backend="win32").connect(title_re=window_title)
        win = app.top_window()
        win.set_focus()
        time.sleep(0.5)

        rect = win.rectangle()
        img = pyautogui.screenshot(
            region=(rect.left, rect.top, rect.width(), rect.height())
        )

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
            "reference_name": reference_name,
            "path": os.path.abspath(save_path),
            "size": {"width": img.width, "height": img.height},
        }

    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching '{window_title}'"}
    except Exception as exc:
        return {"error": f"{type(exc).__name__}: {exc}"}


def do_visual_compare(data: dict) -> dict:
    """
    Compare the current window state against a saved reference.

    Returns:
        {status, difference_percent, passed, diff_image_path}
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

    window_title = data.get("window_title", "")
    reference_name = data.get("reference_name", "")
    threshold = float(data.get("threshold", 0.1))
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
        app = pywinauto.Application(backend="win32").connect(title_re=window_title)
        win = app.top_window()
        win.set_focus()
        time.sleep(0.5)

        rect = win.rectangle()
        current = pyautogui.screenshot(
            region=(rect.left, rect.top, rect.width(), rect.height())
        )

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
            "reference": os.path.abspath(ref_path),
            "difference_percent": diff_pct,
            "passed": diff_pct < 1.0,
            "diff_image_path": os.path.abspath(diff_path),
            "different_pixels": num_diff,
            "total_pixels": total_pixels,
            "threshold": threshold,
        }

    except pywinauto.findwindows.ElementNotFoundError:
        return {"error": f"No window found matching '{window_title}'"}
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
