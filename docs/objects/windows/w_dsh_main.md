# w_dsh_main

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _dashboard
- **Description**: Dsh main

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_SelTask | Int |
| ii_SelSRVC | Int |
| ii_SelectTab | Int |
| is_itcode | string |
| is_itoldcode | string |
| inuo_TaskPrint | nuo_SRVC_Task_Print |
| ii_index | int |
| is_filter_typ1 | string |
| is_filter_entity1 | string |
| is_filter_typ2 | string |
| is_filter_entity2 | string |
| is_filter_typ3 | string |
| is_filter_entity3 | string |
| ib_monitoring | Boolean |
| is_filter_fam1 | String |
| is_itcode1 | String |
| is_pointer | String |
| is_scfamily1 | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_checkautority() | public | Validation |
| wf_init_date() | public | Initialisation |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_filter() | public | Applique un filtre |
| wf_show_runningtask(long al_seltask) | public | Affichage |
| wf_picture(string as_itcode) | public | Traitement wf_picture |
| wf_purchase(string as_itcode) | public | Traitement wf_purchase |
| wf_prod(string as_itcode) | public | Traitement wf_prod |
| wf_purchase_st(string as_itcode) | public | Traitement wf_purchase_st |
| wf_sal(string as_itcode) | public | Traitement wf_sal |
| wf_reset_dw() | public | Reinitialisation |
| wf_reset_dw_sle() | public | Reinitialisation |
| wf_loc(string as_itcode) | public | Traitement wf_loc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| ue_keydown | Evenement personnalise ue_keydown |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
