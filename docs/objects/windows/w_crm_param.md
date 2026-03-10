# w_crm_param

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Parametres (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_choice | string |
| is_choice_ct | string |
| iSel_country | string |
| is_itlang | string |
| id_dwcaldat | date |
| is_cal | string |
| block_prev | Boolean |
| ii_Day | Integer |
| WorkDate | date |
| WorkDay | String |
| detstartdate | datetime |
| id_calend | datetime |
| is_CodeSales | string |
| iSel_activities_id | long |
| ii_tab | int |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_realloc() | public | Calcule/retourne wf_realloc |
| wf_checkacces_menu(uo_commandbutton acb_bouton) | public | Validation |
| wf_load_calendar(date startdate, string way) | public | Charge les donnees |
| wf_relativemonth(date currmonth, integer offset) | public | Fonction wf_relativemonth |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| losefocus | Evenement losefocus |
