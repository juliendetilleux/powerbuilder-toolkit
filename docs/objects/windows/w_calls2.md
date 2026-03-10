# w_calls2

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _projects
- **Description**: Calls2 (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_choix_role | integer |
| ii_choix_date | integer |
| ii_hyperstatus | integer |
| il_SelCall | long |
| is_SQL_dw_calls | string |
| il_code_ligne_action | long |
| is_callctg | string |
| ib_fromclicked | boolean |
| ii_prioritySel | integer |
| idwo_object | dwobject |
| ii_clotdays | integer |
| ii_actionsatterm | integer |
| is_adid | string |
| ii_default_activity | integer |
| is_callhig | string |
| ii_status | int |
| is_MULTICO | string |
| is_CALLITEML | string |
| is_fromemail | string |
| Action | string |
| il_action | long |
| il_chid | long |
| invo_mail | nvo_mail |
| is_MAILCLOTT | string |
| ib_modified | boolean |
| is_tabattachment | string |
| ls_path | string |
| ii_Ret | int |
| screenfilter | string |
| is_McCoCode | String |
| il_shcode | long |
| il_slline | long |
| is_chadid | string |
| ls_filtre | string |
| il_dwcallrow | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_action_user(string as_userid, long al_callid, long al_actionid) | public | Verifie wf_action_user |
| wf_refresh_all() | public | Rafraichit l'affichage |
| wf_refreshreselect(integer ai_hyperstatus, long al_callid) | public | Rafraichit l'affichage |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_menu(integer ai_menu_action) | public | Traitement wf_menu |
| wf_action_delete() | public | Suppression |
| wf_progress_retrieve() | public | Recupere les donnees |
| wf_terminated() | public | Traitement wf_terminated |
| inputok() | public | Verifie inputok |
| wf_audit() | public | Verifie wf_audit |
| wf_handle_file(string as_adresseid) | public | Traitement wf_handle_file |
| wf_callauto() | public | Traitement wf_callauto |
| filteritem() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| mousemove | Deplacement de la souris |
| losefocus | Evenement losefocus |
| ue_itemchanged | Evenement personnalise ue_itemchanged |
| ue_retrieve_end | Evenement personnalise ue_retrieve_end |
