# w_forecasts

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _planning
- **Description**: Forecasts (Planification)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_cust | string |
| id_fordat | datetime |
| ib_filtered | boolean |
| ll_Curr_Row | Long |
| ib_IsEditable | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| deleteforcast() | public | Suppression |
| quickfeed() | public | Traitement quickfeed |
| wf_edit_qty(boolean ab_edit) | public | Traitement wf_edit_qty |
| wf_selectrow(string as_items, string as_cust, datetime adt_datetime) | public | Selection |
| filter_dw() | public | Applique un filtre |
| wf_clean_file_itad(string as_pathname) | public | Traitement wf_clean_file_itad |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
