# u_web_browser

- **Type**: User Object (Visuel)
- **Ancetre**: olecustomcontrol
- **Module**: _pad
- **Description**: Objet utilisateur - communication HTTP/Web

## Variables d'instance

| Variable | Type |
|----------|------|
| INVALID_HANDLE_VALUE | ULong (Constant) |
| GENERIC_READ | ULong (Constant) |
| GENERIC_WRITE | ULong (Constant) |
| FILE_SHARE_READ | ULong (Constant) |
| FILE_SHARE_WRITE | ULong (Constant) |
| CREATE_NEW | ULong (Constant) |
| CREATE_ALWAYS | ULong (Constant) |
| OPEN_EXISTING | ULong (Constant) |
| OPEN_ALWAYS | ULong (Constant) |
| TRUNCATE_EXISTING | ULong (Constant) |
| OLECMDEXECOPT_DODEFAULT | integer |
| OLECMDEXECOPT_PROMPTUSER | integer |
| OLECMDEXECOPT_DONTPROMPTUSER | integer |
| OLECMDEXECOPT_SHOWHELP | integer |
| OLECMDID_OPEN | integer |
| OLECMDID_NEW | integer |
| OLECMDID_SAVE | integer |
| OLECMDID_SAVEAS | integer |
| OLECMDID_SAVECOPYAS | integer |
| OLECMDID_PRINT | integer |
| OLECMDID_PRINTPREVIEW | integer |
| OLECMDID_PAGESETUP | integer |
| OLECMDID_SPELL | integer |
| OLECMDID_PROPERTIES | integer |
| OLECMDID_CUT | integer |
| OLECMDID_COPY | integer |
| OLECMDID_PASTE | integer |
| OLECMDID_PASTESPECIAL | integer |
| OLECMDID_UNDO | integer |
| OLECMDID_REDO | integer |
| OLECMDID_SELECTALL | integer |
| OLECMDID_CLEARSELECTION | integer |
| OLECMDID_ZOOM | integer |
| OLECMDID_GETZOOMRANGE | integer |
| OLECMDID_UPDATECOMMANDS | integer |
| OLECMDID_REFRESH | integer |
| OLECMDID_STOP | integer |
| OLECMDID_HIDETOOLBARS | integer |
| OLECMDID_SETPROGRESSMAX | integer |
| OLECMDID_SETPROGRESSPOS | integer |
| OLECMDID_SETPROGRESSTEXT | integer |
| OLECMDID_SETTITLE | integer |
| OLECMDID_SETDOWNLOADSTATE | integer |
| OLECMDID_STOPDOWNLOAD | integer |
| OLECMDID_ONTOOLBARACTIVATED | integer |
| OLECMDID_FIND | integer |
| OLECMDID_DELETE | integer |
| OLECMDID_HTTPEQUIV | integer |
| OLECMDID_HTTPEQUIV_DONE | integer |
| OLECMDID_ENABLE_INTERACTION | integer |
| OLECMDID_ONUNLOAD | integer |
| OLECMDID_PROPERTYBAG2 | integer |
| OLECMDID_PREREFRESH | integer |
| OLECMDID_SHOWSCRIPTERROR | integer |
| OLECMDID_SHOWMESSAGE | integer |
| OLECMDID_SHOWFIND | integer |
| OLECMDID_SHOWPAGESETUP | integer |
| OLECMDID_SHOWPRINT | integer |
| OLECMDID_CLOSE | integer |
| OLECMDID_ALLOWUILESSSAVEAS | integer |
| OLECMDID_DONTDOWNLOADCSS | integer |
| OLECMDID_UPDATEPAGESTATUS | integer |
| OLECMDID_PRINT2 | integer |
| OLECMDID_PRINTPREVIEW2 | integer |
| OLECMDID_SETPRINTTEMPLATE | integer |
| OLECMDID_GETPRINTTEMPLATE | integer |
| OLECMDID_PAGEACTIONBLOCKED | integer |
| OLECMDID_PAGEACTIONUIQUERY | integer |
| OLECMDID_FOCUSVIEWCONTROLS | integer |
| OLECMDID_FOCUSVIEWCONTROLSQUERY | integer |
| OLECMDID_SHOWPAGEACTIONMENU | integer |
| OLECMDID_ADDTRAVELENTRY | integer |
| OLECMDID_UPDATETRAVELENTRY | integer |
| OLECMDID_UPDATEBACKFORWARDSTATE | integer |
| OLECMDID_OPTICAL_ZOOM | integer |
| OLECMDID_OPTICAL_GETZOOMRANGE | integer |
| OLECMDID_WINDOWSTATECHANGED | integer |
| OLECMDID_ACTIVEXINSTALLSCOPE | integer |
| inv_winsock | n_winsock |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ShellExecute(long hwindow, string lpOperation, string lpFile, ...) : long | Public | Fonction publique |
| GetDesktopWindow() : long | Public | Fonction publique |
| CreateFile(string lpFileName, ulong dwDesiredAccess, ulong dwShareMode, ...) : ulong | Public | Fonction publique |
| ReadFile(ulong hFile, blob lpBuffer, ulong nNumberOfBytesToRead, ...) : boolean | Public | Fonction publique |
| WriteFile(ulong hFile, blob lpBuffer, ulong nNumberOfBytesToWrite, ...) : boolean | Public | Fonction publique |
| CloseHandle(ulong hObject) : boolean | Public | Fonction publique |
| of_getsource() : string | Public | Fonction publique |
| of_geturl() : string | Public | Fonction publique |
| of_ispropertyset(string as_propname) : boolean | Public | Fonction publique |
| of_parentwindow() : window | Public | Fonction publique |
| of_writefile(string as_filename, string as_filecontents) : integer | Public | Fonction publique |
| of_readfile(string as_filename, string as_filecontents) : unsignedlong | Public | Fonction publique |
| of_getencoding(string as_filename) : encoding | Public | Fonction publique |
| of_getsourcetext() : string | Public | Fonction publique |
| of_goback() : void (subroutine) | Public | Fonction publique |
| of_goforward() : void (subroutine) | Public | Fonction publique |
| of_gohome() : void (subroutine) | Public | Fonction publique |
| of_refresh() : void (subroutine) | Public | Fonction publique |
| of_gosearch() : void (subroutine) | Public | Fonction publique |
| of_stop() : void (subroutine) | Public | Fonction publique |
| of_execwb(integer command_id, integer execution_option) : void (subroutine) | Public | Fonction publique |
| of_navigate(string as_url) : void (subroutine) | Public | Fonction publique |
| of_execwb_saveas() : void (subroutine) | Public | Fonction publique |
| of_execwb_save() : void (subroutine) | Public | Fonction publique |
| of_execwb_print(boolean ab_prompt) : void (subroutine) | Public | Fonction publique |
| of_resize(integer ai_newwidth, integer ai_newheight) : void (subroutine) | Public | Fonction publique |
| of_designmode() : void (subroutine) | Public | Fonction publique |
| of_controlpanel(string as_control_app) : void (subroutine) | Public | Fonction publique |
| of_setsource(string as_source) : void (subroutine) | Public | Fonction publique |
| of_execwb_printpreview() : void (subroutine) | Public | Fonction publique |
| of_execwb_pagesetup() : void (subroutine) | Public | Fonction publique |
| of_documentcommand(string as_command) : void (subroutine) | Public | Fonction publique |
| of_documentcommand(string as_command, boolean ab_userinterface) : void (subroutine) | Public | Fonction publique |
| of_toggle_property(string as_propname) : void (subroutine) | Public | Fonction publique |
| of_inserthtml(string as_html) : void (subroutine) | Public | Fonction publique |
| of_documentcommand(string as_command, string as_value) : void (subroutine) | Public | Fonction publique |
| of_execscript(integer as_script) : void (subroutine) | Public | Fonction publique |
| of_silentmode(boolean ab_silent) : void (subroutine) | Public | Fonction publique |
| of_changepicture() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
