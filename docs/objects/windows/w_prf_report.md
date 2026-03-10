# w_prf_report

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Prf - Rapport (Requetes)

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
| idt_Start_date | datetime |
| idt_Stop_date | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_showhelp(uo_checkbox sel_checkbox, string info, string rportname) | public | Affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| other | Gestion d'evenements divers |
| clicked | Clic sur la fenetre |
