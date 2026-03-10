# w_purinvoices_paym

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvoices paym (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_invhead | long |
| isel_invtyp | string |
| ls_testtri | string |
| id_horizon | datetime |
| id_datpaym | datetime |
| iSel_paystatus | string |
| isel_picodemc | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| invhead_refresh() | public | Rafraichit l'affichage |
| purinvpay() | public | Traitement purinvpay |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
