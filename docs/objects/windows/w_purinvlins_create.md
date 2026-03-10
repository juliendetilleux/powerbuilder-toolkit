# w_purinvlins_create

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvlins - Creation (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_adresse_id | string |
| iSel_purlin | int |
| iSel_invtyp | string |
| is_phcurr | string |
| is_LBCPUR | string |
| is_ITUMTRF | string |
| is_mcdo | string |
| is_ADINVSUPP | string |
| invo_imputcpt | nvo_imputcpt |
| is_ErrMess | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| loadorder() | public | Charge les donnees |
| checkline(long linenum) | public | Validation |
| saveline(long linenum) | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
