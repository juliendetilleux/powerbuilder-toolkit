# w_srvctask

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _services
- **Description**: Srvctask (Services)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Sel_Task | Int |
| inuo_TaskPrint | nuo_srvc_task_print |
| iw_srvchisto | w_srvctask |
| is_ArgDW | String |
| is_filter_typ | string |
| is_filter_entity | string |
| ib_monitoring | Boolean |
| is_filter_fam | String |
| is_itcode | String |
| is_srfamily | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh_task(integer ai_numtask) | public | Rafraichit l'affichage |
| wf_generation_periodique() | public | Traitement wf_generation_periodique |
| wf_close_task() | public | Fermeture |
| wf_cancel_task() | public | Traitement wf_cancel_task |
| wf_print_task() | public | Impression |
| wf_maj_print(integer ai_taskid, character ac_update) | public | Impression |
| wf_taskreport() | public | Traitement wf_taskreport |
| wf_filter() | public | Applique un filtre |
| wf_modify_doc() | public | Traitement wf_modify_doc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| rbuttondown | Evenement rbuttondown |
