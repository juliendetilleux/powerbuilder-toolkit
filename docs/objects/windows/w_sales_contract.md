# w_sales_contract

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes contrats

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_selhdat | datetime |
| isel_salord | long |
| ls_testtri | string |
| isel_sallin | long |
| ls_testtri2 | string |
| is_linetype | string |
| is_sel_ad | string |
| is_item | string |
| is_ItemName | string |
| s_linestatus | string |
| d_qty | double |
| t_ship | datetime |
| is_Sel_Ordr_Curr | String |
| is_saltype | string |
| is_ordinfo | string |
| Is_ordtri | Any |
| iSel_shipdays | integer |
| iSel_ordr_Status | string |
| iSel_sallstlin | int |
| iSel_custref | string |
| iSel_datreq | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| null_line() | public | Traitement null_line |
| clot_line() | public | Traitement clot_line |
| close_delivered() | public | Fermeture |
| wf_null_complete_sale() | public | Traitement wf_null_complete_sale |
| line_delete() | public | Suppression |
| loadmultitri() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
