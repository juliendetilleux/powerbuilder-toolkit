# w_gpurchase_histo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Gpurchase histo (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| isel_purord | long |
| isel_purlin | long |
| ls_testtri2 | string |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| is_linestatus | string |
| is_headstatus | string |
| iw_response_purch | w_response_purch |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| wf_line_reopen() | public | Ouverture |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
