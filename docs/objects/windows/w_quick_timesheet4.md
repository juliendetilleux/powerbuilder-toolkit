# w_quick_timesheet4

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Quick timesheet4 (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| myStruct | struct_crm_action_update_parm |
| is_firstname | string |
| is_surname | string |
| idwc_subproject | datawindowchild |
| idwc_project | datawindowchild |
| idwc_contact | datawindowchild |
| idwc_action | datawindowchild |
| idwc_aainvstatus | datawindowchild |
| ii_group | int |
| ib_mustapplygroup | boolean |
| ib_workflow | boolean |
| Selectedrow | long |
| is_ErrMess | string |
| lb_deactivate | boolean |
| date_now | datetime |
| is_costtype | string |
| id_uscost | decimal |
| ib_canadd | boolean |
| is_TIMSHTFCT | string |
| m_f | m_timesheet4 |
| ii_focus | int |
| is_poavailable | string |
| lb_event | boolean |
| is_tictrltyp | string |
| is_tictrlexp | string |
| is_TIMSECHNG | string |
| is_usmodifustmsh | string |
| is_curr_user | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_seteditable() | public | Definit editable |
| wf_checkline(long row) | public | Validation |
| wf_inputok() | public | Verifie wf_inputok |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_setcontact() | public | Definit contact |
| wf_load_costparam() | public | Charge les donnees |
| wf_rightclick(string colname) | public | Traitement wf_rightclick |
| wf_copychange() | public | Copie |
| wf_notemodified(long al_row) | public | Traitement wf_notemodified |
| wf_sales_directship() | public | Traitement wf_sales_directship |
| wf_itemchanged_aaaction() | public | Modification |
| wf_more() | public | Traitement wf_more |
| wf_openexp() | public | Ouverture |
| wf_aferitemchanged(long row) | public | Modification |
| wf_report() | public | Traitement wf_report |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| deactivate | Desactivation de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| ue_keypressed | Evenement personnalise ue_keypressed |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| other | Gestion d'evenements divers |
