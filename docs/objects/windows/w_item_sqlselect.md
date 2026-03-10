# w_item_sqlselect

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Articles sqlselect (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
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

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_linkitad_sqlselect() | public | Selection |
| arrange(string as_diffretrieve) | public | Reorganisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
