# w_crm_agenda_day

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Agenda day (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_last_row | long |
| ib_mousedown | boolean |
| idat_toRetrieve | datetime |
| ii_interval | int |
| tab_colonne | any |
| lds | nv_datastore |
| it_endHour | time |
| it_beginHour | time |
| ii_lastColInsert | int |
| il_idClicked | long |
| it_hourClicked | time |
| il_idClicked_task | long |
| is_adrsid | string |
| is_usname | String |
| il_TotalTime | long |
| uo_mail | nvo_mail |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_getposition(time hour) | public | Retourne position |
| wf_fillhour(integer interval) | public | Traitement wf_fillhour |
| wf_fillarray(date date2retrieve, string user) | public | Traitement wf_fillarray |
| wf_getnbcase(time beginhour, integer timing) | public | Retourne nbcase |
| wf_filldw() | public | Traitement wf_filldw |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_displaydw() | public | Affichage |
| wf_createmodifyaction(string windowname, string state) | public | Creation |
| wf_showdetail(uo_datawindow curr_dw, long curr_row) | public | Affichage |
| wf_deleteaction(long action2delete) | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_mousemove | Evenement personnalise ue_mousemove |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
