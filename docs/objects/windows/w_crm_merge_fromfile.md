# w_crm_merge_fromfile

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Merge fromfile (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_count_fields | long |
| is_origin_select_merge | string |
| itab_fields | string |
| tab2 | string |
| appdir | string |
| iole_word | OLEObject |
| is_fichierDot | String |
| il_taille_tab_doublon | long |
| is_SelItem | string |
| is_selection | string |
| idwc1 | dataWindowChild |
| templatedir | string |
| rtn | int |
| icbx_null | uo_checkbox |
| lb_nochange | boolean |
| ii_index | integer |
| is_origin_select_contact | string |
| is_filepath | string |
| ia_tabdatas | any |
| ia_tabempty | any |
| is_tabline | string |
| is_emptyline | string |
| il_colindex | long |
| ib_idinfile | boolean |
| ids_list | nv_datastore |
| is_origin_select | string |
| is_dbfield | string |
| ib_pmixref | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_extract_linedata(string as_line, ref string as_tabline[]) | public | Calcule/retourne wf_extract_linedata |
| wf_merge_field() | public | Traitement wf_merge_field |
| wf_gettabline(string as_line) | public | Retourne tabline |
| wf_getcolumnname(string as_dbfield) | public | Retourne columnname |
| wf_loadfile() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
