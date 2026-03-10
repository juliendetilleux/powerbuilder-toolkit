# w_crm_agenda_week

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Agenda week (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| date_start | datetime |
| date_end | datetime |
| currdate | datetime |
| il_idclicked | long |
| is_adrsId | string |
| it_hourClicked | time |
| ii_interval | int |
| uo_mail | nvo_mail |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_createmodifyaction(string windowname, string state) | public | Creation |
| wf_deleteaction(long action2delete) | public | Suppression |
| wf_rightbutton(uo_datawindow dw_source, long row, integer nbday) | public | Traitement wf_rightbutton |
| wf_showdetail(uo_datawindow curr_dw, long curr_row) | public | Affichage |
| wf_agenda_day() | public | Traitement wf_agenda_day |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
