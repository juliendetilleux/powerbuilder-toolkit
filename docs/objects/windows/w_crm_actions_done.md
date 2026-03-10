# w_crm_actions_done

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Actions done (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| User2show | String |
| il_Sel_action | long |
| is_adid | string |
| isTab_OpenOrdTri | Any |
| curr_row | long |
| is_filter_action | string |
| is_bleufilter | string |
| fullfilter | String |
| screenfilter | string |
| is_AllowedUsers | string |
| action_sql_part | string |
| action_end_part | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_act_refresh() | public | Rafraichit l'affichage |
| wf_print(string type_print) | public | Impression |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
