# w_brf_return_item

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Retours articles (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| istr_return | s_sqlsearch_return |
| istr_empty | s_sqlsearch_return |
| is_action | string |
| ib_canceled | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| close | Fermeture de la fenetre |
| doubleclicked | Double-clic sur la fenetre |
