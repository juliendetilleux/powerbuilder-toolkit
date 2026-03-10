# w_cycn_ajst

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Cycn ajst (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| idc_num_cycn | decimal |
| is_CYCLECOUNT | string |
| il_numclot | long |
| is_cpdesc | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_msg_error() | public | Traitement wf_msg_error |
| wf_print_before() | public | Impression |
| wf_update_tables(long al_row) | public | Mise a jour |
| wf_statut() | public | Calcule/retourne wf_statut |
| wf_update_tables_clot(long al_row) | public | Mise a jour |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
