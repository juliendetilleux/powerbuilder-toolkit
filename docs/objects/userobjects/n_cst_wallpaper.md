# n_cst_wallpaper

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _design
- **Description**: Objet de design/theme

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_mdi | boolean |
| i_mdi | mdiclient |
| iw_window | window |
| ls_bitmap | string |
| iul_hbitmap | ulong |
| iul_hmdi | ulong |
| iul_dcmdi | ulong |
| iul_hDCMem | ulong |
| istr_Bitmap | s_bitmap |
| ib_center | boolean |
| ib_resize | boolean |
| ii_TitleBarHeight | integer |
| il_x | Integer |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| ReleaseDC(ulong handle, ulong hDC) : int | Public | Fonction publique |
| SelectObject(ulong hDC, ulong hGDIObj) : ulong | Public | Fonction publique |
| BitBlt(ulong hDC, int num, int num, ...) : int | Public | Fonction publique |
| CreateCompatibleDC(ulong hDC) : ulong | Public | Fonction publique |
| GetDC(ulong handle) : ulong | Public | Fonction publique |
| LoadImageA(ulong hints, string lpszName, UINT uType, ...) : ulong | Public | Fonction publique |
| GetObjectBitmap(ulong  hgdiobj, int  cbBuffer, s_bitmap bm) : ulong | Public | Fonction publique |
| DeleteObject(ulong hgdiobj) : boolean | Public | Fonction publique |
| StretchBlt(ulong hDCdest, int x1, int y1, ...) : boolean | Public | Fonction publique |
| of_setwindow(window wa_window) : integer | Public | Fonction publique |
| of_setbitmap(string as_filename) : integer | Public | Fonction publique |
| of_setwallpaper(boolean ab_switch) : integer | Public | Fonction publique |
| of_setwindow(window wa_window, mdiclient a_mdi) : integer | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_paint | Evenement personnalise |
