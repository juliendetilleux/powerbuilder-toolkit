# w_sales_histo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes histo

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_selhdat | datetime |
| isel_salord | long |
| isel_sallin | long |
| is_linetype | string |
| is_sel_ad | string |
| is_item | string |
| modified | boolean |
| Is_ordtri | any |
| screenfilter | string |
| iSel_sallstlin | int |
| il_hstcmd_shiporder | long |
| il_hstcmd_cilcode | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| reopen_line() | public | Ouverture |
| loadmultitri() | public | Charge les donnees |
| filteritem() | public | Applique un filtre |
| reopen_salesforce(character newhstatus, character newlstatus) | public | Ouverture |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
