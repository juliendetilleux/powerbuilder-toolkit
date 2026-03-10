# w_recovery

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Recovery (Achats)

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
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| il_row | long |
| iw_parent | w_window |
| is_transcode | string |
| is_rnamonpist | string |
| is_mcfilter | String |
| is_filter2 | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| reset_transact() | public | Reinitialisation |
| save_tr() | public | Sauvegarde les donnees |
| refresh_quantity() | public | Rafraichit l'affichage |
| wf_save_ajtf() | public | Sauvegarde les donnees |
| wf_save_rnam(string as_lot, string as_loc1, string as_loc2, decimal ad_qty) | public | Sauvegarde les donnees |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
