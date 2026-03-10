# w_qry_tictrl

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Tictrl (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| basefilename | string |
| WeekStart | datetime |
| Monthstart | datetime |
| is_print_type | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| newselect() | public | Creation |
| wf_get_monday_date(datetime sel_date) | public | Retourne monday_date |
| wf_weekgroup_print() | public | Impression |
| wf_weekxtrnl_print() | public | Impression |
| wf_monthgroup_print() | public | Impression |
| wf_monthgroup2_print() | public | Impression |
| wf_substring(string as_String, string as_search_1, string as_replace) | public | Retourne wf_substring |
| wf_monthgroup3_print() | public | Impression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
