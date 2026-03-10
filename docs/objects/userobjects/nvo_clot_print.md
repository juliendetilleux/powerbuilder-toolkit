# nvo_clot_print

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _monthclot
- **Description**: Objet utilisateur - gestion d'impression

## Variables d'instance

| Variable | Type |
|----------|------|
| sale_ad_evol | boolean |
| sale_evol_start | string |
| is_stat_ad_evol | string |
| sale_it_evol | boolean |
| sale_evol_it_start | string |
| is_stat_it_evol | string |
| sale_itad_evol | boolean |
| sale_evol_itad_start | string |
| is_stat_itad_evol | string |
| ib_sale_glob_evol | boolean |
| is_sale_evol_glob_start | string |
| is_item | string |
| is_itstat1 | string |
| is_itstat2 | string |
| is_stat_glob_evol | string |
| ib_sale_glob_evol_sg | boolean |
| is_sale_evol_glob_start_sg | string |
| is_item_sg | string |
| is_itstat1_sg | string |
| is_itstat2_sg | string |
| is_stat_glob_evol_sg | string |
| ib_sale_glob_evol_tc | boolean |
| is_sale_evol_glob_start_tc | string |
| is_item_tc | string |
| is_itstat1_tc | string |
| is_itstat2_tc | string |
| is_stat_glob_evol_tc | string |
| ib_sale_glob_evol_csg | boolean |
| is_sale_evol_glob_start_csg | string |
| is_item_csg | string |
| is_itstat1_csg | string |
| is_itstat2_csg | string |
| is_stat_glob_evol_csg | string |
| ib_sale_glob_evol_ctc | boolean |
| is_sale_evol_glob_start_ctc | string |
| is_item_ctc | string |
| is_itstat1_ctc | string |
| is_itstat2_ctc | string |
| is_stat_glob_evol_ctc | string |
| is_AdCode | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_sale_stat_itad_bymonth(string as_startperiod, string as_multico) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_ad_bymonth(string as_startperiod, string as_multico) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_it_bymonth(string as_startperiod, string as_multico) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_itadgr_bymonth(string as_startperiod, string as_multico, string as_adrgrp) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_typcust_bymonth(string as_startperiod, string as_multico) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_shopgroup_bymonth(string as_startperiod, string as_multico) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_glob_shopgroup_bymonth(string as_startperiod, string as_item, string as_itstat1, string as_itstat2) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_glob_typcust_bymonth(string as_startperiod, string as_item, string as_itstat1, string as_itstat2) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_glob_custshopgroup_bymonth(string as_startperiod, string as_item, string as_itstat1, ...) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_glob_custtypcust_bymonth(string as_startperiod, string as_item, string as_itstat1, ...) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_glob_bymonth(string as_startperiod, string as_item, string as_itstat1, ...) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_ad_bymonth(string as_startperiod) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_it_bymonth(string as_startperiod) : string | Public | Fonction utilisateur publique |
| uof_sale_stat_itad_bymonth(string as_startperiod) : string | Public | Fonction utilisateur publique |
| uof_salstat3_prep(string selp, string refp, integer nbmonth, string adsel) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_salstat1_prep(string selp, string refp) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_salstat2_prep(string selp, string refp, integer nbmonth) : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
