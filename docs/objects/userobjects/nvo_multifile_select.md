# nvo_multifile_select

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| iOFN | OPENFILENAME |
| MAX_LENGTH | ulong (Constant) |
| OFN_READONLY | ulong (Constant) |
| OFN_OVERWRITEPROMPT | ulong (Constant) |
| OFN_HIDEREADONLY | ulong (Constant) |
| OFN_NOCHANGEDIR | ulong (Constant) |
| OFN_SHOWHELP | ulong (Constant) |
| OFN_ENABLEHOOK | ulong (Constant) |
| OFN_ENABLETEMPLATE | ulong (Constant) |
| OFN_ENABLETEMPLATEHANDLE | ulong (Constant) |
| OFN_NOVALIDATE | ulong (Constant) |
| OFN_ALLOWMULTISELECT | ulong |
| OFN_EXTENSIONDIFFERENT | ulong (Constant) |
| OFN_PATHMUSTEXIST | ulong (Constant) |
| OFN_FILEMUSTEXIST | ulong (Constant) |
| OFN_CREATEPROMPT | ulong (Constant) |
| OFN_SHAREAWARE | ulong (Constant) |
| OFN_NOREADONLYRETURN | ulong (Constant) |
| OFN_NOTESTFILECREATE | ulong (Constant) |
| OFN_NONETWORKBUTTON | ulong (Constant) |
| OFN_NOLONGNAMES | ulong (Constant) |
| OFN_EXPLORER | ulong (Constant) |
| OFN_NODEREFERENCELINKS | ulong (Constant) |
| OFN_LONGNAMES | ulong (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| GetOpenFileNameA(OPENFILENAME lpOFN) : boolean | Public | Fonction publique |
| CommDlgExtendedError() : ulong | Public | Fonction publique |
| RtlMoveMemory(char dest[], long source, long size) : long | Public | Fonction publique |
| RtlMoveMemory(long dest, char source[], long Size) : long | Public | Fonction publique |
| LocalAlloc(long uFlags, long uBytes) : long | Public | Fonction publique |
| LocalFree(long hMem) : long | Public | Fonction publique |
| of_getopenfilename(long al_hwnd, string as_title, string as_pathname[], ...) : integer | Public | Fonction publique |
| of_lastpos(string fullname, string search_char) : integer | Public | Fonction publique |
| of_getopenonefilename(long al_hwnd, string as_title, string as_pathname[], ...) : integer | Public | Fonction publique |
| of_getopenonefilename(long al_hwnd, string as_title, string as_pathname[], ...) : integer | Public | Fonction publique |
| of_char_string(string as_string, character ac_char[]) : long | Public | Fonction publique |
| of_string_char(character ac_char[], string as_string[]) : long | Public | Fonction publique |
| of_parse_csv(string as_list, string as_array[]) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
