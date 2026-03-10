# w_crm_choiceline_replace

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Choiceline replace (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_name | string |
| is_copy | string |
| is_replace_code | string |
| is_parm | string |
| itab_id | long |
| is_code | string |
| is_table | string |
| ii_replace | integer |
| lb_refresh | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_check_filters(string tocheck_1, string tocheck_2) | public | Applique un filtre |
| wf_execute_mod() | public | Verifie wf_execute_mod |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| losefocus | Evenement losefocus |
| clicked | Clic sur la fenetre |
