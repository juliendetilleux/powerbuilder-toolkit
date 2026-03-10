# w_stockalloc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Stockalloc

## Variables d'instance

| Variable | Type |
|----------|------|
| is_It_Sel_id | string |
| iw_parent | w_window |
| iSel_mfg_id | long |
| isel_itemseq | int |
| il_Last_allocseq | int |
| iNeededQty | decimal |
| iSel_custord | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checkloc() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
