# nvo_printer_devmode

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme - gestion d'impression

## Variables d'instance

| Variable | Type |
|----------|------|
| PORTRAIT | integer (Constant) |
| LANDSCAPE | integer (Constant) |
| DM_OUT_BUFFER | integer (Constant) |
| DM_IN_BUFFER | integer (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| PRP_GetDC9(long al_printjob) : long | Public | Fonction publique |
| PRP_GetDC10(long al_printjob) : long | Public | Fonction publique |
| PRP_GetDC105(long al_printjob) : long | Public | Fonction publique |
| PRP_GetDC110(long al_printjob) : long | Public | Fonction publique |
| PRP_GetDC115(long al_printjob) : long | Public | Fonction publique |
| PRP_GetDC120(long al_printjob) : long | Public | Fonction publique |
| OpenPrinter(string as_printername, ulong aul_printerhandle, ulong aul_printerdefaults) : boolean | Public | Fonction publique |
| ClosePrinter(ulong aul_printerhandle) : boolean | Public | Fonction publique |
| DocumentProperties(ulong aul_hWnd, ulong aul_pinterhandle, string as_devicename, ...) : LONG | Public | Fonction publique |
| DocumentProperties2(ulong aul_hWnd, ulong aul_pinterhandle, string as_devicename, ...) : LONG | Public | Fonction publique |
| DocumentPropertiesCheck(ulong aul_hWnd, ulong aul_pinterhandle, string as_devicename, ...) : LONG | Public | Fonction publique |
| ResetDC(ulong aul_DC, s_devmode astr_devmode) : boolean | Public | Fonction publique |
| GetLastError() : ULONG | Public | Fonction publique |
| of_setcopies(long al_printjob, integer ai_nbcopies) : boolean | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
