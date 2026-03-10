# w_advschedule

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Advschedule (Planification)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_ADVSCHD2 | string |
| is_ADVSCHD1 | string |
| idt_start_retrieve | datetime |
| idt_stop_retrieve | datetime |
| il_mfgwcreqs_advsc_selected | long |
| il_ADVSCHDT | long |
| invo_advsched_graph | nvo_advsched_graph |
| ii_index_na | long |
| ii_index_gr | long |
| is_ScreenFilter_na | string |
| is_ScreenFilter_gr | string |
| inv_dsc_size | nv_datastore |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh_graph() | public | Rafraichit l'affichage |
| wf_refresh_progparam() | public | Rafraichit l'affichage |
| wf_fix_mfgwcreqs_advsc() | public | Traitement wf_fix_mfgwcreqs_advsc |
| wf_modify_mfgwcreqs_advsc() | public | Traitement wf_modify_mfgwcreqs_advsc |
| wf_unassign_mfgwcreqs_advsc() | public | Traitement wf_unassign_mfgwcreqs_advsc |
| wf_delete_mfgwcreqs_advsc() | public | Suppression |
| wf_refresh_machineday_graph(datetime adt_mastart, long al_mamachine) | public | Rafraichit l'affichage |
| wf_schedule_assigne() | public | Traitement wf_schedule_assigne |
| wf_schedule_delete_rec() | public | Suppression |
| wf_schedule_delete_all() | public | Suppression |
| wf_filteritem_gr() | public | Applique un filtre |
| wf_filteritem_na() | public | Applique un filtre |
| wf_show_of() | public | Affichage |
| wf_fix_all_visible() | public | Traitement wf_fix_all_visible |
| wf_schedule_rec_one() | public | Traitement wf_schedule_rec_one |
| wf_schedule_shift() | public | Traitement wf_schedule_shift |
| wf_schedule_shift_one() | public | Traitement wf_schedule_shift_one |
| wf_show_time() | public | Affichage |
| wf_schedule_rec(integer ai_typ) | public | Traitement wf_schedule_rec |
| wf_schedule_complete(integer ai_typ) | public | Traitement wf_schedule_complete |
| wf_schedule_rec_dwnoassigned() | public | Traitement wf_schedule_rec_dwnoassigned |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| resize | Redimensionnement de la fenetre |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| dragdrop | Depot de glisser-deposer |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
