# w_stocksel_lost

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Stocksel lost

## Variables d'instance

| Variable | Type |
|----------|------|
| Sel_Doc_Mod | String |
| remval | long |
| limitexp | datetime |
| is_StLot | String |
| iNeededQty | decimal |
| iw_parent | w_window |

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
