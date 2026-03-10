# w_purchase_fup

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Achats fup

## Variables d'instance

| Variable | Type |
|----------|------|
| isel_purord | long |
| ls_testtri | string |
| isel_purlin | long |
| isel_row | long |
| screenfilter | string |
| is_filter | string |
| is_choixfilter | string |
| ib_cherche | boolean |
| filterstring | string |
| idt_Date | DateTime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_purclose() | public | Fermeture |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
