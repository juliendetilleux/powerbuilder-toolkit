# uo_crm_selection

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _sales_crm
- **Description**: Objet du module CRM - gestion CRM

## Variables d'instance

| Variable | Type |
|----------|------|
| FILTERSEARCH | integer (Constant) |
| INACTIF | integer (Constant) |
| INACTIFCT | integer (Constant) |
| idw_target | uo_datawindow |
| idwc1 | datawindowchild |
| idwc2 | datawindowchild |
| icbx_null | uo_checkbox |
| ib_dwad | boolean |
| ib_dwct | boolean |
| screenfilter | string[] |
| is_dataobject_ad | string |
| is_dataobject_ct | string |
| is_FBColName | string |
| is_FJColName | string |
| is_origin_select_contact | string |
| is_origin_select | string |
| is_filterclause | string |
| is_queryclause | string |
| is_groupclause | string |
| its_adcode | string[] |
| iti_ctline | integer[] |
| its_ctmail | string[] |
| its_adname | string[] |
| its_ctname | string[] |
| iti_adtype | integer[] |
| its_ctfirstname | string[] |
| is_sqlselect | s_sqlselect |
| is_MULTICO | string |
| iw_parentwindow | w_window |
| is_fkey | string |
| is_greenfilter | string |
| is_select | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_insertfilteredrows() : long | Public | Fonction utilisateur publique |
| uof_selectadress() : long | Public | Fonction utilisateur publique |
| uof_setselection(long al_row, string as_type) : long | Public | Fonction utilisateur publique |
| get_select_difference() : string | Public | Fonction publique |
| get_origin_select() : string | Public | Fonction publique |
| uof_getcolname(string colname1, string colname2) : string | Public | Fonction utilisateur publique |
| ddlb_select(integer index) : integer | Public | Fonction publique |
| uof_filter() : string | Public | Fonction utilisateur publique |
| uof_init_dddw() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_init_filtersearch(string as_colname) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_init_linesearch(string as_colname) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_set_target(uo_datawindow aw_target) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_format(integer ai_format) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_load_ddlb() : void (subroutine) | Public | Fonction utilisateur publique |
| showdistgroup(boolean ab_show) : void (subroutine) | Public | Fonction publique |
| showfiltresql(boolean ab_show) : void (subroutine) | Public | Fonction publique |
| showquery(boolean ab_show) : void (subroutine) | Public | Fonction publique |
| retrieve_sqlfilters() : void (subroutine) | Public | Fonction publique |
| uof_refresh_query() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_resize | Evenement personnalise |
