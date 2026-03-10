# n_cst_dwsrv

- **Type**: User Object (Non-visuel)
- **Ancetre**: n_base
- **Module**: _design
- **Description**: Objet de design/theme - service DataWindow

## Variables d'instance

| Variable | Type |
|----------|------|
| DEFAULT | integer (Constant) |
| DBNAME2 | integer (Constant) |
| HEADER | integer (Constant) |
| ii_source | integer |
| is_defaultheadersuffix | string |
| is_displayunits | string |
| is_displayitem | string |
| idw_requestor | uo_datawindow |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_getitem(long al_row, string as_column) : string | Public | Fonction publique |
| of_GetItem(long al_row, integer ai_column) : string | Public | Fonction publique |
| of_GetItem(long al_row, integer ai_column, dwbuffer adw_buffer, boolean ab_orig_value) : string | Public | Fonction publique |
| of_setitem(long al_row, integer ai_column, string as_value) : integer | Public | Fonction publique |
| of_getobjects(string as_objlist[]) : integer | Public | Fonction publique |
| of_Modify(string as_attribute, string as_value, string as_col) : string | Public | Fonction publique |
| of_modify(string as_attribute, string as_value, string as_objtype, ...) : string | Public | Fonction publique |
| of_Modify(string as_attribute, string as_value) : string | Public | Fonction publique |
| of_getheadername(string as_column, string as_suffix) : string | Public | Fonction publique |
| of_refreshdddws() : integer | Public | Fonction publique |
| of_GetItemany(long al_row, integer ai_column) : any | Public | Fonction publique |
| of_GetItemany(long al_row, integer ai_column, dwbuffer adw_buffer, boolean ab_orig_value) : any | Public | Fonction publique |
| of_GetItemany(long al_row, string as_column) : any | Public | Fonction publique |
| of_getheight() : long | Public | Fonction publique |
| of_getwidth() : long | Public | Fonction publique |
| of_describe(n_cst_dwobjectattrib a_dwobject_attrib[], string as_attribute, string as_objtype, ...) : integer | Public | Fonction publique |
| of_describe(n_cst_dwobjectattrib a_dwobject_attrib[], string as_attribute) : integer | Public | Fonction publique |
| of_describe(n_cst_dwobjectattrib a_dwobject_attrib[], string as_attribute, string as_col) : integer | Public | Fonction publique |
| of_getdefaultheadersuffix() : string | Public | Fonction publique |
| of_setdefaultheadersuffix(string as_suffix) : integer | Public | Fonction publique |
| of_SetDisplayUnits(string as_displayunits) : integer | Public | Fonction publique |
| of_SetDisplayItem(string as_displayitem) : integer | Public | Fonction publique |
| of_GetDisplayItem() : string | Public | Fonction publique |
| of_GetDisplayUnits() : string | Public | Fonction publique |
| of_setcolumnnamesource(integer ai_colsource) : integer | Public | Fonction publique |
| of_setrequestor(uo_datawindow adw_requestor) : integer | Public | Fonction publique |
| of_buildexpression(long al_row, string as_column, string as_operator) : any | Public | Fonction publique |
| of_buildexpression(long al_row, string as_column) : any | Public | Fonction publique |
| of_getdescription() : string | Public | Fonction publique |
| of_getcolumndisplayname(string as_colname) : string | Public | Fonction publique |
| of_getcolumndisplayname(integer ai_colnumber) : string | Public | Fonction publique |
| of_getcolumndisplaynamestyle() : integer | Public | Fonction publique |
| of_setcolumndisplaynamestyle(integer ai_coldisplaynamestyle) : integer | Public | Fonction publique |
| of_populatedddw(string as_dddwname) : integer | Public | Fonction publique |
| of_populatedddw(integer ai_dddwnumber) : integer | Public | Fonction publique |
| of_getinfo(n_cst_infoattrib anv_infoattrib) : integer | Public | Fonction publique |
| of_getpropertyinfo(n_cst_propertyattrib anv_attrib) : integer | Public | Fonction publique |
| of_PopulateDDDW() : integer | Public | Fonction publique |
| of_getitemany(long al_row, string as_column, dwbuffer adw_buffer, boolean ab_orig_value) : any | Public | Fonction publique |
| of_getitem(long al_row, string as_column, dwbuffer adw_buffer, boolean ab_orig_value) : string | Public | Fonction publique |
| of_buildcomparison(long al_row, string as_column) : any | Public | Fonction publique |
| of_buildexpression(long al_row, string as_column, string as_operator, string as_optionalvalue) : any | Public | Fonction publique |
| of_getname() : string | Public | Fonction publique |
| of_buildcomparison(long al_row, string as_column, string as_optionalvalue) : any | Public | Fonction publique |
| of_dwarguments(string as_argnames[], string as_argdatatypes[]) : integer | Public | Fonction publique |
| of_dwarguments(datawindowchild adwc_obj, string as_argnames[], string as_argdatatypes[]) : integer | Public | Fonction publique |
| of_setitem(long al_row, string as_column, string as_value) : integer | Public | Fonction publique |
| of_getobjects(string as_objlist[], string as_objtype, string as_band, boolean ab_visibleonly) : integer | Public | Fonction publique |
| of_getcolumnnamesource() : integer | Public | Fonction publique |
| of_getheadername(string as_column) : string | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
