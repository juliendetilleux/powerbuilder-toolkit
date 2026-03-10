# w_cash_itemgroup_search

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_cash
- **Description**: Cash itemgroup - Recherche

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_canceled | boolean |
| is_itemgroup1 | string |
| is_itemgroup2 | string |
| is_itemgroup3 | string |
| is_items | String |
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| ii_level | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh(integer ai_level) | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
