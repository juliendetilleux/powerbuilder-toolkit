# w_launchorder_adapt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Launchorder adapt (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_MfgQty | decimal |
| iSel_PlnQty | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| adapt_total() | public | Traitement adapt_total |
| adaptreq(long curr_row, decimal qty) | public | Verifie adaptreq |
| adapt_choice() | public | Traitement adapt_choice |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
