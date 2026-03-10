# w_label_merge_label

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Etiquettes merge etiquettes (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| idwc1 | dataWindowChild |
| icbx_null | uo_checkbox |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| zoom | integer |
| ii_esqlbl | integer |
| ii_pos | integer |
| is_origin_select_contact | string |
| lb_nochange | boolean |
| ii_index | integer |
| is_Action | String |
| is_fkey | string |
| iSel_adresse_id | string |
| ib_canfilter | boolean |
| is_BDBADRS | string |
| is_basicSqlSelect | string |
| fullfilter | String |
| SqlSelect | String |
| SqlSelect_shipto | String |
| is_MULTICO | string |
| is_sqlselect | s_sqlselect |
| is_code | string |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_labelconfig_ok() | public | Verifie wf_labelconfig_ok |
| wf_adapt_print() | public | Impression |
| zooming(string sign) | public | Traitement zooming |
| arrange(string as_diffretrieve) | public | Reorganisation |
| filteradresse() | public | Applique un filtre |
| wf_visibiltyf(boolean ab_visible) | public | Traitement wf_visibiltyf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| getfocus | Evenement getfocus |
| ue_spin | Evenement personnalise ue_spin |
| clicked | Clic sur la fenetre |
