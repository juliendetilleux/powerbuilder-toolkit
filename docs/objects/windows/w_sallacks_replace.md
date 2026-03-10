# w_sallacks_replace

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Sallacks replace (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| idw_sallack | uo_extendeddw |
| il_selrow_line | long |
| il_slline_sel | long |
| lb_modify | boolean |
| il_shcode_sel | long |
| is_turntruck | string |
| is_It_sel_name | string |
| is_it_sel_um | int |
| ii_it_sel_leadtime | int |
| ii_It_Sel_availtime | int |
| id_It_sel_stdcost | decimal |
| iSel_ordr_Curr | string |
| is_ITUMTRF | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_replace() | public | Remplacement de chaine |
| changeitem(string selected_item) | public | Modification |
| wf_salerate(string as_adcode, string as_itcode, datetime as_date, decimal adec_qty) | public | Traitement wf_salerate |
| allocate(long al_sel_order, long al_slline, long al_truck, string as_item, long al_qty, integer ai_shipto) | public | Calcule/retourne allocate |
| wf_sal2print_treat(long al_order) | public | Impression |
| wf_check_tarif(boolean ab_modifycoeff, string selected_item) | public | Validation |
| changeorder(decimal orderqty, decimal uomconv, decimal stdval, string ordercurr, string selected_item) | public | Modification |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
