# w_clot_reports

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _monthclot
- **Description**: Clot reports

## Variables d'instance

| Variable | Type |
|----------|------|
| sel_period | string |
| ref_period | string |
| regroup | integer |
| sel_period1 | string |
| ref_period1 | string |
| Start_date | datetime |
| Stop_date | datetime |
| sale_it_evol | boolean |
| is_stat_it_evol | string |
| sale_evol_start | string |
| is_WipParam | string |
| is_LBCPUR | string |
| is_LBCMFG | string |
| lnvo_clot_print | nvo_clot_print |
| is_mcfilter | string |
| is_Sel_AdCode | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| salstat1_prep(string selp, string refp) | public | Traitement salstat1_prep |
| salstat3_prep(string selp, string refp, integer nbmonth, string adsel) | public | Traitement salstat3_prep |
| convdat(string dat1) | public | Retourne convdat |
| salstat2_prep(string selp, string refp, integer nbmonth) | public | Traitement salstat2_prep |
| wf_showhelp(uo_checkbox sel_checkbox, string info) | public | Affichage |
| wf_chek_period(character requirement) | public | Verifie wf_chek_period |
| wf_relative_period(string period, integer offset) | public | Retourne wf_relative_period |
| wf_start_stop_date(string selperiod) | public | Traitement wf_start_stop_date |
| wf_sale_stat_glob_bymonth(string as_startperiod) | public | Retourne wf_sale_stat_glob_bymonth |
| wf_sale_stat_glob_fam_bymonth(string as_startperiod, string as_stat1, string as_stat2) | public | Retourne wf_sale_stat_glob_fam_bymonth |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| getfocus | Evenement getfocus |
| constructor | Constructeur |
| other | Gestion d'evenements divers |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
