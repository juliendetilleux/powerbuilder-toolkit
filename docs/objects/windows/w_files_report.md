# w_files_report

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Files - Rapport (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| sel_period | string |
| ref_period | string |
| regroup | integer |
| sel_period1 | string |
| ref_period1 | string |
| filteruser | string |
| sale_evol | boolean |
| sale_evol_start | string |
| is_stat_evol | string |
| idwc | datawindowchild |
| WeekStart | datetime |
| WeekEnd | datetime |
| al_userddlb | long |
| is_tabname | string |
| is_tabname_value | string |
| idt_Start_date | datetime |
| idt_Stop_date | datetime |
| idt_Start_date_value | datetime |
| idt_Stop_date_value | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_showhelp(uo_checkbox sel_checkbox, string info) | public | Affichage |
| wf_filter_activities() | public | Applique un filtre |
| wf_filter_users() | public | Applique un filtre |
| wf_sql4plan() | public | Retourne wf_sql4plan |
| wf_sql4plan_global() | public | Retourne wf_sql4plan_global |
| wf_sql4plan_choosen() | public | Retourne wf_sql4plan_choosen |
| wf_sql4implentplan() | public | Retourne wf_sql4implentplan |
| wf_get_monday_date(datetime sel_date) | public | Retourne monday_date |
| wf_check_retrieve_temp_table() | public | Recupere les donnees |
| wf_retrieve_temp_table(string as_tabname) | public | Recupere les donnees |
| wf_retrieve_temp_table_value(string as_tabname) | public | Recupere les donnees |
| wf_check_retrieve_temp_table_value() | public | Recupere les donnees |
| wf_create_temp_table(string as_diff) | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| other | Gestion d'evenements divers |
| clicked | Clic sur la fenetre |
| ue_addselect | Evenement personnalise ue_addselect |
