# uo_extendeddw_2

- **Type**: User Object (Visuel)
- **Ancetre**: uo_datawindow
- **Module**: _system
- **Description**: Objet systeme - gestion DataWindow

## Variables d'instance

| Variable | Type |
|----------|------|
| il_selectedrowID | long[] |
| ib_showcurrent | boolean |
| ib_ctrla | boolean |
| ib_ctrl | Boolean |
| ib_clicked | Boolean |
| il_clickedrow | long |
| ib_mousemove | boolean |
| ib_keepselect | boolean |
| ib_gorowfocuschanged | boolean |
| ib_goclicked | boolean |
| is_refcol1 | string |
| ib_pre_garnissage | boolean |
| ii_temp | integer |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_getselectedrows(long al_selectedrows[]) : integer | Public | Fonction utilisateur publique |
| uof_selectall() : integer | Public | Fonction utilisateur publique |
| uof_setselectall(boolean ab_value) : integer | Public | Fonction utilisateur publique |
| uof_getorderedselectedrows(long al_selectedrows[]) : integer | Public | Fonction utilisateur publique |
| uof_addmultiselect(string as_col_name, string as_values[]) : integer | Public | Fonction utilisateur publique |
| uof_get_multiselectedrows(string as_col_name, string as_values[]) : integer | Public | Fonction utilisateur publique |
| uof_get_multiselectedrows(string as_col_name, long al_values[]) : integer | Public | Fonction utilisateur publique |
| uof_get_multiselectedrows(string as_col_name, string as_col_name_2, string as_values_1[], string as_values_2[]) : integer | Public | Fonction utilisateur publique |
| uof_tridw() : integer | Public | Fonction utilisateur publique |
| uof_get_multiselectedrows(string as_col_name, string as_col_name_2, long al_values_1[], string as_values_2[]) : integer | Public | Fonction utilisateur publique |
| uof_addmultiselect(string as_col_name, long al_values[]) : integer | Public | Fonction utilisateur publique |
| uof_showcurrent(boolean ab_value) : integer | Public | Fonction utilisateur publique |
| sort() : integer | Public | Fonction publique |
| filter() : integer | Public | Fonction publique |
| uof_setmultiselect(boolean ab_value) : integer | Public | Fonction utilisateur publique |
| uof_recup_past_filtered() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_removeselect(long al_row) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_clicked(long al_x, long al_y, long al_row, dwobject adw_dwo) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_end_pregarnissage() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_remove_from_vector(long al_loop) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_remove_from_vector(long al_filterid[]) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_selectionchanged | Evenement personnalise |
| ue_keypressed | Evenement personnalise |
| ue_lbuttonup | Evenement personnalise |
| ue_lbuttondown | Evenement personnalise |
