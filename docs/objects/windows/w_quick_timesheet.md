# w_quick_timesheet

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Quick timesheet (Projets)

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

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| deactivate | Desactivation de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_keypressed | Evenement personnalise ue_keypressed |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
