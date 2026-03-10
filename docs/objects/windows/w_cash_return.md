# w_cash_return

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_cash
- **Description**: Cash retours

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_return | str_cash_return |
| istr_null | str_cash_return |
| idt_start | datetime |
| idt_stop | datetime |
| ib_errorqty | boolean |
| is_grcash | string |
| idwc_cash | DataWindowChild |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| waf_refresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| losefocus | Evenement losefocus |
