# w_sales_contract_histo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes contrats histo

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
| ScreenFilter | string |
| iSel_shipdays | integer |
| iSel_adresse_id | string |
| iSel_ordr_Status | string |
| iSel_SallStLin | int |
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
| wf_reopen() | public | Ouverture |
| wf_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
