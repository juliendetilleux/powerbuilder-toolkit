# w_stocksel_itlost

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Stocksel itlost

## Variables d'instance

| Variable | Type |
|----------|------|
| is_filter | string |
| ScreenFilt | string |
| FilterString | string |
| stock_choice | s_stock_choice |
| sql_lot | string |
| lb_buttonpush | boolean |
| lb_candubbleclick | boolean |
| is_itcat | string |
| is_ITUMTRF | string |
| is_ColName2 | string |
| is_itlot | string |
| il_itval | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
