# w_transact_proj

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions projets (Stock)

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
| idwc_subfile | datawindowchild |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| check_tr() | public | Validation |
| reset_transact() | public | Reinitialisation |
| save_tr() | public | Sauvegarde les donnees |
| refresh_quantity() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
