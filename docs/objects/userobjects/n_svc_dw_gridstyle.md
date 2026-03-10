# n_svc_dw_gridstyle

- **Type**: User Object (Non-visuel)
- **Ancetre**: n_svc_dw_base
- **Module**: _design
- **Description**: Objet de design/theme - gestion DataWindow

## Variables d'instance

| Variable | Type |
|----------|------|
| iw_parent | Window |
| ARROW_SUFFIX | String (Constant) |
| SHADE_SUFFIX | String (Constant) |
| HLINE_SUFFIX | String (Constant) |
| TRANSPARENT | String (Constant) |
| is_colfilter | String[] |
| is_original_filter | String |
| is_original_sort | String |
| is_sort | String |
| ib_popupmenu | Boolean |
| ib_arrow | Boolean |
| ib_shade | Boolean |
| ib_highlite | Boolean |
| ib_highlite_added | Boolean |
| is_prevcolumn | String |
| is_prevcolor | String |
| ii_original | Integer[] |
| is_colname | String[] |
| is_graycolor | String[] |
| is_orangecolor | String[] |
| ib_mouseover | Boolean |
| WM_MOUSEHOVER | ULong (Constant) |
| WM_MOUSELEAVE | ULong (Constant) |
| TME_HOVER | ULong (Constant) |
| TME_LEAVE | ULong (Constant) |
| TME_NONCLIENT | ULong (Constant) |
| TME_QUERY | ULong (Constant) |
| TME_CANCEL | ULong (Constant) |
| HOVER_DEFAULT | ULong (Constant) |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| GetDC(ulong hWnd) : ulong | Public | Fonction publique |
| SelectObject(ulong hdc, ulong hWnd) : ulong | Public | Fonction publique |
| GetTextExtentPoint32(ulong hdcr, string lpString, long nCount, SIZE size) : boolean | Public | Fonction publique |
| ReleaseDC(ulong hWnd, ulong hdcr) : long | Public | Fonction publique |
| TrackMouseEvent(TRACKMOUSEEVENT lpEventTrack) : boolean | Public | Fonction publique |
| IsThemeActive() : boolean | Public | Fonction publique |
| of_resizewidth(string as_colname) : long | Public | Fonction publique |
| of_setreg(string as_entry, string as_value) : integer | Public | Fonction publique |
| of_getreg(string as_entry, string as_default) : string | Public | Fonction publique |
| of_getcoldesc(string as_colname, boolean ab_usecolname) : string | Public | Fonction publique |
| of_setreg(string as_subkey, string as_entry, string as_value) : integer | Public | Fonction publique |
| of_getreg(string as_subkey, string as_entry, string as_default) : string | Public | Fonction publique |
| of_combinefilter() : string | Public | Fonction publique |
| of_addvisuals() : void (subroutine) | Public | Fonction publique |
| of_delvisuals() : void (subroutine) | Public | Fonction publique |
| of_sortarrow(string as_colname) : void (subroutine) | Public | Fonction publique |
| of_process_popup(string as_process, long al_row, string as_colname) : void (subroutine) | Public | Fonction publique |
| of_initialize() : void (subroutine) | Public | Fonction publique |
| of_headerline(string as_colname) : void (subroutine) | Public | Fonction publique |
| of_sortshade(string as_colname) : void (subroutine) | Public | Fonction publique |
| of_addautowidth(string as_colname) : void (subroutine) | Public | Fonction publique |
| of_reordercolumns(string as_colname[]) : void (subroutine) | Public | Fonction publique |
| of_trackmouseevent(boolean ab_mousetracking) : void (subroutine) | Public | Fonction publique |
| of_setstyle(boolean ab_popupmenu, boolean ab_arrow, boolean ab_shade, boolean ab_highlite) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
