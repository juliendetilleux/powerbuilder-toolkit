# w_fcst_mngmt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Fcst mngmt (Planification)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_scemax | long |
| il_scenario | long |
| il_showscenario | long |
| ids_histo | nv_datastore |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_scenario_delete() | public | Suppression |
| wf_feedshipped() | public | Traitement wf_feedshipped |
| wf_feeddirectsales() | public | Traitement wf_feeddirectsales |
| wf_generate_auto() | public | Traitement wf_generate_auto |
| wf_generate_manu() | public | Traitement wf_generate_manu |
| wf_generate_extrapol() | public | Traitement wf_generate_extrapol |
| wf_check_premisses() | public | Validation |
| wf_regenerate_histo() | public | Traitement wf_regenerate_histo |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
