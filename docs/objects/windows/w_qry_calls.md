# w_qry_calls

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Calls (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_role_open | integer |
| is_filter_open | string |
| is_filter_histo | string |
| is_filter_stat | string |
| idt_startDate_open | dateTime |
| idt_startDate_histo | dateTime |
| idt_startDate_stat | dateTime |
| il_selcall_open | long |
| is_CALLITEML | string |
| is_index1 | string |
| lb_refresh_event | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setfilter_stat() | public | Definit filter_stat |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
