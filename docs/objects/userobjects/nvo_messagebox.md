# nvo_messagebox

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _langue
- **Description**: Objet de gestion multilingue

## Variables d'instance

| Variable | Type |
|----------|------|
| IDABORT | long (Constant) |
| IDCANCEL | long (Constant) |
| IDCONTINUE | long (Constant) |
| IDIGNORE | long (Constant) |
| IDNO | long (Constant) |
| IDOK | long (Constant) |
| IDRETRY | long (Constant) |
| IDTRYAGAIN | long (Constant) |
| IDYES | long (Constant) |
| MB_ABORTRETRYIGNORE | ulong (Constant) |
| MB_CANCELTRYCONTINUE | ulong (Constant) |
| MB_HELP | ulong (Constant) |
| MB_OK | ulong (Constant) |
| MB_OKCANCEL | ulong (Constant) |
| MB_RETRYCANCEL | ulong (Constant) |
| MB_YESNO | ulong (Constant) |
| MB_YESNOCANCEL | ulong (Constant) |
| MB_DEFBUTTON1 | ulong (Constant) |
| MB_DEFBUTTON2 | ulong (Constant) |
| MB_DEFBUTTON3 | ulong (Constant) |
| MB_DEFBUTTON4 | ulong (Constant) |
| MB_ICONEXCLAMATION | ulong (Constant) |
| MB_ICONWARNING | ulong (Constant) |
| MB_ICONINFORMATION | ulong (Constant) |
| MB_ICONASTERISK | ulong (Constant) |
| MB_ICONQUESTION | ulong (Constant) |
| MB_ICONSTOP | ulong (Constant) |
| MB_ICONERROR | ulong (Constant) |
| MB_ICONHAND | ulong (Constant) |
| MB_APPLMODAL | ulong (Constant) |
| MB_SYSTEMMODAL | ulong (Constant) |
| MB_TASKMODAL | ulong (Constant) |
| MB_SETFOREGROUND | ulong (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| MessageBoxW(long hWnd, string lpText, string lpCaption, ulong uType) : long | Public | Fonction publique |
| messagebox(string as_title, string as_text, icon a_icon) : integer | Public | Fonction publique |
| messagebox(string as_title, string as_text) : integer | Public | Fonction publique |
| messagebox(string as_title, string as_text, icon a_icon, ...) : integer | Public | Fonction publique |
| messagebox(string as_title, string as_text, icon a_icon, button a_button) : integer | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
