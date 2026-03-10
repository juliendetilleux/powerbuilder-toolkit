# w_purchaselimite_histo

- **Type**: Window
- **Ancetre**: w_popup
- **Module**: _purch
- **Description**: Purchaselimite histo (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| ls_testtri | string |
| isel_purord | long |
| isel_purlin | long |
| ls_testtri2 | string |
| is_headstatus | string |
| il_CntId | Long |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| iw_response_purch | w_response_purch |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_linereopen() | public | Ouverture |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
