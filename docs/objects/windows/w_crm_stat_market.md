# w_crm_stat_market

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_crm
- **Description**: Stat market (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| stat_adid | string |
| is_noaction_ad | string |
| is_evolad | string |
| actionid | long |
| actionName | string |
| is_salesman | string |
| is_salesname | string |
| statact_sql_part | string |
| statact_end_part | string |
| statactdet_sql_part | string |
| statactdet_end_part | string |
| act_adcode | string |
| noact_adcode | string |
| new_adcode | string |
| Company_sql | string |
| idwc | datawindowchild |
| filtersql | string |
| il_selrow_actdetail | long |
| is_ustyp | string |
| is_usentry | string |
| is_salemans | string |
| is_addsql | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_get_users() | public | Retourne users |
| wf_check_salesman_access() | public | Validation |
| wf_print(datetime adt_from, datetime adt_to, string as_smname, readonly string as_itstat1) | public | Impression |
| wf_buildselect(datetime adt_from, datetime adt_to, string as_smcode, string as_itstat1) | public | Selection |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
