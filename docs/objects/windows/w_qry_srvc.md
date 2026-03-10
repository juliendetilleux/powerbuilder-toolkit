# w_qry_srvc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Srvc (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_SelTask | Int |
| ii_SelSRVC | Int |
| ii_SelectTab | Int |
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

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
