# w_crm_actions_list

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Actions - Liste (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| User2show | String |
| il_Sel_action | long |
| is_adid | string |
| isTab_OpenOrdTri | Any |
| curr_row | long |
| idwc | datawindowchild |
| filtersql | string |
| action_sql_part | string |
| action_end_part | string |
| is_AllowedUsers | string |
| il_row | long |
| ib_windows_active | boolean |
| is_filter_action | string |
| is_filter_priority | string |
| is_bleufilter | string |
| fullfilter | String |
| screenfilter | string |
| uo_mail | nvo_mail |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_act_refresh() | public | Rafraichit l'affichage |
| wf_delete_action() | public | Suppression |
| wf_print(string type_print) | public | Impression |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| deactivate | Desactivation de la fenetre |
| activate | Activation de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
