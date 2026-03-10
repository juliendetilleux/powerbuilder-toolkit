# w_stock_selection2

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Stock selection2

## Variables d'instance

| Variable | Type |
|----------|------|
| Sel_Doc_Mod | String |
| remval | long |
| limitexp | datetime |
| is_StLot | String |
| isel_itemseq | int |
| iw_parent | w_window |
| iNeededQty | decimal |
| iSel_custord | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_modify_doc() | public | Traitement wf_modify_doc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
