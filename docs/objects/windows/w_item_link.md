# w_item_link

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _edilink
- **Description**: Articles link (EDI)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| ib_canceled | boolean |
| manual | Boolean |
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| is_item | string |
| ItemNameFilter | string |
| is_itemfantom | string |
| is_ItCat | string |
| is_Action | String |
| is_filter_altern | string |
| is_ittyp | string |
| is_fkey | string |
| iSel_item_id | string |
| ib_canfilter | boolean |
| ib_retrievestop | boolean |
| is_BDBITEM | string |
| is_basicSqlSelect | string |
| iw_parentwindow | w_window |
| ib_multiselect | Boolean |
| is_items | String |
| il_inc | long |
| istr_SQLSelect | s_SqlSelect |
| is_ITUMTRF | string |
| is_mcfilter | string |
| ii_index | int |
| is_return | string |
| trans_dblink | nv_transaction |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_linkitad_sqlselect() | public | Selection |
| arrange(string as_diffretrieve) | public | Reorganisation |
| wf_find_items() | public | Recherche |
| wf_find_and_replace(ref string as_vector[], string as_value) | public | Recherche |
| uof_end_pre_garnissage() | public | Calcule/retourne uof_end_pre_garnissage |
| wf_yellowfilter(string as_yellowfilter) | public | Applique un filtre |
| wf_bluefilter(string as_bluefilter) | public | Applique un filtre |
| wf_chekvalidate(string as_cmp1) | public | Validation |
| wf_special_filter(string as_itemnamefilter) | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| ue_keypressed | Evenement personnalise ue_keypressed |
| constructor | Constructeur |
