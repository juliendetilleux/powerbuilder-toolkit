# w_crm_stat_sales

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Stat ventes (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| stat_adid | string |
| is_noaction_ad | string |
| is_evolad | string |
| actionid | long |
| actionName | string |
| sql_evol1 | string |
| sql_evol2 | string |
| sql_evol3 | string |
| Company_sql | string |
| idwc | datawindowchild |
| filtersql | string |
| filtername | string |
| is_caevol | string |
| caevol_start | datetime |
| is_ustyp | string |
| is_usentry | string |
| is_salemans | string |
| is_sql_evol1_item | string |
| is_sql_evol2_item | string |
| is_sql_evol3_item | string |
| is_sql_evol4_item | string |
| is_sql_evol5_item | string |
| is_itcode | string |
| is_ittyp | string |
| is_itcat | string |
| is_salemanlist | string |
| is_adcode | string |
| is_sql_avgkg | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_check_salesman_access() | public | Validation |
| wf_retreive_cust_list() | public | Traitement wf_retreive_cust_list |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| ue_graph_create | Evenement personnalise ue_graph_create |
| rbuttondown | Evenement rbuttondown |
