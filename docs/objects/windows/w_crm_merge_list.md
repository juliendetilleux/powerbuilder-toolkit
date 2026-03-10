# w_crm_merge_list

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Merge - Liste (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_count_fields | long |
| is_origin_select_merge | string |
| itab_fields | string |
| tab2 | string |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
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
| is_fkey | string |
| is_sqlselect | s_sqlselect |
| is_basicSqlSelect | string |
| is_Action | String |
| ib_canfilter | boolean |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_BDBADRS | string |
| SqlSelect | String |
| SqlSelect_shipto | String |
| is_code | string |
| iSel_adresse_id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_merge_field() | public | Traitement wf_merge_field |
| wf_retrieve_sqlfilters() | public | Applique un filtre |
| filteradresse() | public | Applique un filtre |
| arrange(string as_diffretrieve) | public | Reorganisation |
| wf_visibiltyf(boolean ab_visible) | public | Traitement wf_visibiltyf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
