# w_qry_actions

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Actions (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_useracttype | String |
| is_ReadAct | String |
| il_sel_action_id | Long |
| idwc_contact | DataWindowChild |
| ib_select | Boolean |
| ii_indexact | Int |
| is_userfilter | String |
| is_Print_Info | String |
| fileselected | long |
| filelineselected | long |
| sel_action_retrieve | long |
| is_invstatus | string |
| Sel_action_withtime | int |
| adt_datestart | datetime |
| adt_datestop | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_filter() | public | Applique un filtre |
| wf_tri(string as_nomcol) | public | Traitement wf_tri |
| wf_border0(string as_nomcol) | public | Traitement wf_border0 |
| wf_doc_refresh() | public | Rafraichit l'affichage |
| wf_modify_doc() | public | Traitement wf_modify_doc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
