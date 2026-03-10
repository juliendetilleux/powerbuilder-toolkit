# w_lot_selection

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Lots selection (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| ScreenFilter | string |
| iSel_lot_id | string |
| iSel_item_id | string |
| st_message | struct_message_loc |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
