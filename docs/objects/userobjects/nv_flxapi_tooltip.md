# nv_flxapi_tooltip

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport - communication HTTP/Web

## Variables d'instance

| Variable | Type |
|----------|------|
| TOOLTIPS_CLASS | string (Constant) |
| CW_USEDEFAULT | ulong (Constant) |
| WM_USER | long (Constant) |
| WS_EX_TOPMOST | long (Constant) |
| WM_SETFONT | long (Constant) |
| WM_GETFONT | long (Constant) |
| TTM_SETDELAYTIME | long (Constant) |
| TTM_ADDTOOL | long (Constant) |
| TTM_DELTOOL | long (Constant) |
| TTM_NEWTOOLRECT | long (Constant) |
| TTM_RELAYEVENT | long (Constant) |
| TTM_UPDATETIPTEXT | long (Constant) |
| TTM_TRACKACTIVATE | long (Constant) |
| TTM_TRACKPOSITION | long (Constant) |
| TTM_SETTIPBKCOLOR | long (Constant) |
| TTM_SETTIPTEXTCOLOR | long (Constant) |
| TTM_GETDELAYTIME | long (Constant) |
| TTM_SETMAXTIPWIDTH | long (Constant) |
| TTM_GETMAXTIPWIDTH | long (Constant) |
| TTM_SETTITLEA | long (Constant) |
| hWndTT | long |
| ToolID | long |
| TTF_CENTERTIP | integer (Constant) |
| TTF_RTLREADING | integer (Constant) |
| TTF_SUBCLASS | integer (Constant) |
| TTF_TRACK | integer (Constant) |
| TTF_ABSOLUTE | integer (Constant) |
| TTF_TRANSPARENT | integer (Constant) |
| TTF_DI_SETITEM | integer (Constant) |
| TTS_BALLOON | integer (Constant) |
| TTI_NONE | integer (Constant) |
| TTI_INFO | integer (Constant) |
| TTI_WARNING | integer (Constant) |
| TTI_ERROR | integer (Constant) |
| TTDT_AUTOMATIC | integer (Constant) |
| TTDT_RESHOW | integer (Constant) |
| TTDT_AUTOPOP | integer (Constant) |
| TTDT_INITIAL | integer (Constant) |
| iul_Handle | uLong[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| CreateWindowExA(ulong dwExStyle, string ClassName, long WindowName, ...) : long | Public | Fonction publique |
| DestroyWindow(long hWnd) : integer | Public | Fonction publique |
| ToolTipMsg(long hWnd, long uMsg, long wParam, TOOLINFO ToolInfo) : integer | Public | Fonction publique |
| RelayMsg(long hWnd, long uMsg, long wParam, MSG Msg) : integer | Public | Fonction publique |
| LocalAlloc(long Flags, long Bytes) : long | Public | Fonction publique |
| LocalFree(long MemHandle) : long | Public | Fonction publique |
| lstrcpy(long Destination, string Source) : long | Public | Fonction publique |
| SendMessageString(uLong hwnd, uLong Msg, uLong wParam, String lpzString) : uLong | Public | Fonction publique |
| of_getfont() : long | Public | Fonction publique |
| of_removetool(dragobject ado_object, integer ai_toolid) : integer | Public | Fonction publique |
| of_addtool(dragobject ado_object, string as_tiptext, integer ai_flags) : integer | Public | Fonction publique |
| of_getdelaytime(integer ai_duration) : integer | Public | Fonction publique |
| InitCommonControls() : void (subroutine) | Public | Fonction publique |
| of_setfont(long hfont) : void (subroutine) | Public | Fonction publique |
| of_settipposition(integer ai_x, integer ai_y) : void (subroutine) | Public | Fonction publique |
| of_settrack(dragobject ado_object, integer ai_uid, boolean ab_status) : void (subroutine) | Public | Fonction publique |
| of_updatetiprect(dragobject ado_object, long al_uid, long al_left, ...) : void (subroutine) | Public | Fonction publique |
| of_relaymsg(dragobject ado_object) : void (subroutine) | Public | Fonction publique |
| of_setmaxwidth(long al_maxwidth) : void (subroutine) | Public | Fonction publique |
| of_settipbkcolor(unsignedlong aul_color) : void (subroutine) | Public | Fonction publique |
| of_settiptextcolor(unsignedlong aul_color) : void (subroutine) | Public | Fonction publique |
| of_settiptitle(integer ai_icon, string as_title) : void (subroutine) | Public | Fonction publique |
| of_settiptext(dragobject ado_object, long al_uid, long al_tiptext) : void (subroutine) | Public | Fonction publique |
| of_setdelaytime(integer ai_duration, integer ai_milliseconds) : void (subroutine) | Public | Fonction publique |
| of_settiptext(dragobject ado_object, long al_uid, string as_tiptext) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
