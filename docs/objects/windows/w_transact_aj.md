# w_transact_aj

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions aj (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| sql_lot | string |
| WithQuality | boolean |
| transdata | transact |
| allocdata | stockalloc |
| il_histoseq | long |
| is_toloc | string |
| is_fromloc | string |
| is_lcautoalloc | string |
| iw_parent | w_window |
| is_transcode | string |
| is_rnamonpist | string |
| is_mcfilter | String |
| is_filter2 | String |
| is_ITUMTRF | string |
| lnvo_stock_aj | nvo_stock_aj |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| reset_transact() | public | Reinitialisation |
| save_tr() | public | Sauvegarde les donnees |
| refresh_quantity() | public | Rafraichit l'affichage |
| filteritem() | public | Applique un filtre |
| wf_check_setdefaultloc() | public | Validation |
| wf_save_ajtf_bak() | public | Sauvegarde les donnees |
| wf_save_rnam_bak(string as_lot, string as_loc1, string as_loc2, decimal ad_qty, decimal ad_qty_trf) | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
