# w_srvccycle

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _services
- **Description**: Srvccycle (Services)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Sel_SRVC | Int |
| is_filter_typ | string |
| is_filter_entity | string |
| Sel_doc_mod | String |
| ib_monitoring | Boolean |
| is_filter_fam | String |
| is_itcode | String |
| is_pointer | String |
| is_scfamily | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh_srvc(integer ai_srvc) | public | Rafraichit l'affichage |
| wf_init_date() | public | Initialisation |
| wf_modify_doc() | public | Traitement wf_modify_doc |
| wf_filter() | public | Applique un filtre |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
