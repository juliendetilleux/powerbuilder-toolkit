# w_param_dyna

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Parametres dyna (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| action | string |
| calend | Datetime |
| iSel_country | string |
| iSel_activities_id | Int |
| is_itlang | string |
| il_step | integer |
| is_dygr1 | string |
| is_choice | string |
| is_choicehead | string |
| ii_TurnH_Id | Integer |
| is_TurnL_AdId | String |
| ii_TurnL_StId | Integer |
| is_ItSTat1 | String |
| is_itstatname | String |
| is_DWName | String |
| is_Sel_Entity | String |
| is_cal_id | String |
| is_CodeSales | String |
| ii_PayMode_Id | Integer |
| il_dept_row | long |
| iSel_carnut | Long |
| is_WithAm | String |
| is_AltMeasId | String |
| modif_reg | boolean |
| is_techdata | string |
| il_clline | long |
| il_clline_faty | long |
| is_taxt | string |
| is_lang | String |
| il_webrow | Long |
| il_itstat1web | Long |
| is_itstatname1web | String |
| is_itstatweblang | String |
| il_itstat2web | Long |
| ib_web_subgrps | Boolean |
| il_illinesel | Long |
| iSel_currency_id | string |
| iSel_location_id | string |
| iSel_intrastat_id | integer |
| iSel_imputcpt_id | integer |
| iSel_imputanal_id | integer |
| iSel_measure_id | string |
| isel_trtype | long |
| iSel_adresse_id | string |
| iSel_shipto_id | integer |
| is_Itstat2 | string |
| iSel_smt | string |
| iSel_worker_id | string |
| iSel_worktime_id | string |
| iSel_workcenter_id | string |
| iSel_wcid | string |
| iSel_wcidn | string |
| iSel_wcidA | string |
| iSel_wcidU | string |
| iSel_operidw | string |
| iSel_operidn | string |
| iSel_operida | string |
| iSel_operidU | string |
| iSel_typn | string |
| iSel_typa | string |
| iSel_typU | string |
| iSel_tr_id | string |
| iSel_tr_name | string |
| iSel_trr_id | string |
| iSel_packing_id | string |
| is_MONITORNG | string |
| il_smtcat_id | long |
| is_SkinChoosen | string |
| il_Skin_Win_Back | long |
| il_Skin_Win_Text | long |
| isel_packgrhead_id | string |
| is_Itstat3 | string |
| is_ADVANCSCHED | string |
| is_adgrp | string |
| is_adgrp2 | string |
| is_adgrp3 | string |
| is_adgrp4 | string |
| istr_adrsgrp | str_adrsgrp |
| iSel_import_fourn | string |
| is_carnut | string |
| ii_OfferGroupHead | Integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| location_refresh() | public | Rafraichit l'affichage |
| measure_refresh() | public | Rafraichit l'affichage |
| workcenter_refresh() | public | Rafraichit l'affichage |
| currency_refresh() | public | Rafraichit l'affichage |
| company_load() | public | Charge les donnees |
| adresseinputok() | public | Verifie adresseinputok |
| shipto_refresh() | public | Rafraichit l'affichage |
| calendar_refresh() | public | Rafraichit l'affichage |
| transreason_refresh() | public | Rafraichit l'affichage |
| packing_refresh() | public | Rafraichit l'affichage |
| worktime_refresh() | public | Rafraichit l'affichage |
| workers_refresh() | public | Rafraichit l'affichage |
| workoper_refresh(string typ) | public | Rafraichit l'affichage |
| intrastat_refresh() | public | Rafraichit l'affichage |
| imputcpt_refresh() | public | Rafraichit l'affichage |
| itstat1_refresh() | public | Rafraichit l'affichage |
| itstat2_refresh() | public | Rafraichit l'affichage |
| smt_refresh() | public | Rafraichit l'affichage |
| truck_refresh() | public | Rafraichit l'affichage |
| country_refresh() | public | Rafraichit l'affichage |
| activities_refresh() | public | Rafraichit l'affichage |
| wf_turnline_delete() | public | Suppression |
| wf_turnline_sort() | public | Applique un tri |
| wf_refresh_entity(String as_EntityCode) | public | Rafraichit l'affichage |
| wf_refresh_salesman(string as_codesales) | public | Rafraichit l'affichage |
| dept_refresh() | public | Rafraichit l'affichage |
| imputventilstock_refresh() | public | Rafraichit l'affichage |
| techdata_refresh() | public | Rafraichit l'affichage |
| wf_create_techdata() | public | Creation |
| wf_modify_techdata() | public | Traitement wf_modify_techdata |
| wf_retrieve_machine() | public | Recupere les donnees |
| wf_create_machine() | public | Creation |
| wf_modify_machine() | public | Traitement wf_modify_machine |
| wf_tabvisible(string as_tabpage) | public | Traitement wf_tabvisible |
| wf_itemsuse_techdata() | public | Traitement wf_itemsuse_techdata |
| wf_add_promo(string as_lang) | public | Ajout |
| wf_add_banner(integer ai_number, string as_lang) | public | Ajout |
| wf_open_itstatweb(string as_action, integer ai_gr_subgr) | public | Ouverture |
| wf_reorg_linesort(long al_oldsort, long al_newsort, uo_datawindow adw_data, string as_column) | public | Applique un tri |
| wf_itstat1_delete() | public | Suppression |
| wf_itstat2_delete() | public | Suppression |
| wf_insert_techgroupe() | public | Ajout |
| smt_cat_refresh() | public | Rafraichit l'affichage |
| wf_packgrhead_refresh() | public | Rafraichit l'affichage |
| wf_itstat3_delete() | public | Suppression |
| itstat3_refresh() | public | Rafraichit l'affichage |
| wf_advsched_refresh() | public | Rafraichit l'affichage |
| wf_machinehourly_refresh() | public | Rafraichit l'affichage |
| wf_modify_hourly() | public | Traitement wf_modify_hourly |
| wf_modify_machine2() | public | Traitement wf_modify_machine2 |
| country_digicode_refresh(string as_countrycode) | public | Rafraichit l'affichage |
| wf_code_digi_delete() | public | Suppression |
| wf_modify_etiq_trsp() | public | Traitement wf_modify_etiq_trsp |
| wf_refresh_etiq_trsp() | public | Rafraichit l'affichage |
| adresgroup_refresh(long al_level) | public | Rafraichit l'affichage |
| wf_adgroupdelete(string as_type) | public | Suppression |
| carnut_refresh() | public | Rafraichit l'affichage |
| wf_offergrouphead_refresh() | public | Rafraichit l'affichage |
| wf_offergrouphead_delete() | public | Suppression |
| wf_offergroupline_refresh() | public | Rafraichit l'affichage |
| wf_offergroupline_delete() | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| losefocus | Evenement losefocus |
