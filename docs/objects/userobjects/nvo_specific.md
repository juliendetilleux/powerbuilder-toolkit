# nvo_specific

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| is_new_intrastat | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_maj_prix_items(string as_currentsupplier, string as_itcode, decimal adec_anomalies_prix_tvac, decimal adec_anomalies_prix_achat) : integer | Public | Fonction utilisateur publique |
| uof_check_and_select_sscc(string as_lot, string as_loc, string as_loc2, ...) : string | Public | Fonction utilisateur publique |
| uof_create_linkitad(string as_tab_anomalies_ean[], string as_tab_anomalies_code[], string as_tab_anomalies_descr[], ...) : integer | Public | Fonction utilisateur publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_bcd_sales_directship | Evenement personnalise |
| ue_shipment_createfile | Evenement personnalise |
| ue_visibilty_userfield | Evenement personnalise |
| ue_bomline_create | Evenement personnalise |
| ue_ship_by_transport | Evenement personnalise |
| ue_getinfo_for_invoiceline | Evenement personnalise |
| ue_bidouille | Evenement personnalise |
| ue_shipcost | Evenement personnalise |
| ue_invmodify | Evenement personnalise |
| ue_devis_item_cvrt | Evenement personnalise |
| ue_trf_items | Evenement personnalise |
| ue_trf_pursal | Evenement personnalise |
| ue_dvi_recalc | Evenement personnalise |
| ue_dvi_methimp | Evenement personnalise |
| ue_dvi_delproj | Evenement personnalise |
| ue_trf_shipopbl | Evenement personnalise |
| ue_shipreturn | Evenement personnalise |
| ue_dvi_projdet_headmod | Evenement personnalise |
| ue_dvi_specline_copy | Evenement personnalise |
| ue_dvi_offerlaunch | Evenement personnalise |
| ue_dvi_salordlaunch_ln | Evenement personnalise |
| ue_dvi_merge | Evenement personnalise |
| ue_dvi_merge_lineinfo_load | Evenement personnalise |
| ue_bcd_time_mfg_build | Evenement personnalise |
| ue_trf_shiptopur | Evenement personnalise |
| ue_clot_mfg | Evenement personnalise |
| ue_clot_pur | Evenement personnalise |
| ue_input_cust | Evenement personnalise |
| ue_cust | Evenement personnalise |
| ue_ship_prepare_make_ship_alloc | Evenement personnalise |
| ue_transact_rcmo | Evenement personnalise |
| ue_ship_prepare | Evenement personnalise |
| ue_imp_edi | Evenement personnalise |
| ue_imp_edi_after_lineinsert | Evenement personnalise |
| ue_print_zlogo | Evenement personnalise |
| ue_clotxtracost | Evenement personnalise |
| ue_devis_item_copy | Evenement personnalise |
| ue_trf_salpur | Evenement personnalise |
| ue_trf_invoice | Evenement personnalise |
| ue_shipment_plus | Evenement personnalise |
| ue_monthclot_stocks | Evenement personnalise |
| ue_monthclot_sales | Evenement personnalise |
| ue_loorgcode_redesign_crate | Evenement personnalise |
| ue_import_mod_salline | Evenement personnalise |
| ue_assign_action | Evenement personnalise |
| ue_mfg_batch | Evenement personnalise |
| ue_mfg_update | Evenement personnalise |
| ue_mfg_close | Evenement personnalise |
| ue_inv_service | Evenement personnalise |
| ue_mfg_beforeupdate | Evenement personnalise |
| ue_item_createmodify | Evenement personnalise |
| ue_transaction | Evenement personnalise |
| ue_sallineprep_beforeupdate | Evenement personnalise |
| ue_ean128 | Evenement personnalise |
| ue_pursale | Evenement personnalise |
| ue_transact_dlmo | Evenement personnalise |
| ue_methodcost_normal | Evenement personnalise |
| ue_methodcost_rollup | Evenement personnalise |
| ue_salhead_beforeupdate | Evenement personnalise |
| ue_aftertickehead | Evenement personnalise |
| ue_salhead_itemchanged_dirsal | Evenement personnalise |
| ue_check_rcpo | Evenement personnalise |
| ue_item_open | Evenement personnalise |
| ue_scan_dirsal | Evenement personnalise |
| ue_sallineprep_afterupdate | Evenement personnalise |
| ue_bcd_unknow | Evenement personnalise |
| ue_itemchanged_mfghorder | Evenement personnalise |
| ue_tms3_itemchanged | Evenement personnalise |
| ue_close_bcd_qty | Evenement personnalise |
| ue_doubleclicked_method | Evenement personnalise |
| ue_nullof | Evenement personnalise |
| ue_print_rcpo | Evenement personnalise |
| ue_pallet_label | Evenement personnalise |
| ue_purrec | Evenement personnalise |
| ue_purline_changeitem | Evenement personnalise |
| ue_open_mfgorder_report | Evenement personnalise |
| ue_open_w_print | Evenement personnalise |
| ue_shiptoturn | Evenement personnalise |
| ue_quicksale_modship | Evenement personnalise |
| ue_quicksale_modhead | Evenement personnalise |
| ue_shipment_sort | Evenement personnalise |
| ue_cmd_edi | Evenement personnalise |
| ue_purinvrfc | Evenement personnalise |
| ue_afterprint_mfgorder | Evenement personnalise |
| ue_transact_bcd_brf | Evenement personnalise |
| ue_interco_upd_it | Evenement personnalise |
| ue_addinvline_fromdestructcost | Evenement personnalise |
| ue_addshipcost_fromdestructcost | Evenement personnalise |
| ue_rebilling_of | Evenement personnalise |
| ue_rebilling_mp | Evenement personnalise |
| ue_rebilling_after_newsalinvoice | Evenement personnalise |
| ue_rebilling_after_newpurinvoice | Evenement personnalise |
| ue_copymethod | Evenement personnalise |
| ue_createtax | Evenement personnalise |
| ue_checkoldcode | Evenement personnalise |
| ue_beforeprint_mfgorder | Evenement personnalise |
| ue_directexp_custselected | Evenement personnalise |
| ue_directexp_lotselected | Evenement personnalise |
| ue_directexp_save | Evenement personnalise |
| ue_mfglotagr | Evenement personnalise |
| ue_checkstep | Evenement personnalise |
| ue_create_import_xtrn | Evenement personnalise |
| ue_createfile_status | Evenement personnalise |
| ue_sendmail_from_w_print | Evenement personnalise |
| ue_print | Evenement personnalise |
| ue_bcd_ean128 | Evenement personnalise |
| ue_open_window | Evenement personnalise |
| ue_auto_prestocked | Evenement personnalise |
| ue_before_insert_mfglallocs | Evenement personnalise |
| ue_reqdat | Evenement personnalise |
| ue_custspec_dw | Evenement personnalise |
| ue_custspec_itemchanged | Evenement personnalise |
| ue_custspec_update | Evenement personnalise |
| ue_before_cmds_edi | Evenement personnalise |
| ue_w_sales_ddlb_filter_selectionchanged | Evenement personnalise |
| ue_w_sales_open | Evenement personnalise |
| ue_bcd_ship_prepare3_open | Evenement personnalise |
| ue_bcd_ship_prepare3_save | Evenement personnalise |
| ue_open_linkadpur | Evenement personnalise |
| ue_afer_salline_update | Evenement personnalise |
| ue_clot_salline | Evenement personnalise |
| ue_cancel_salline | Evenement personnalise |
| ue_cancel_salhead | Evenement personnalise |
| ue_before_interco | Evenement personnalise |
| ue_linesearch | Evenement personnalise |
| ue_salline_avalaible_filtersearch | Evenement personnalise |
| ue_after_createsale | Evenement personnalise |
| ue_afteropen_w_email | Evenement personnalise |
| ue_stockid_print_specforced | Evenement personnalise |
| ue_custspec_reserved | Evenement personnalise |
| ue_usecustref | Evenement personnalise |
| ue_rateline_afterupdate | Evenement personnalise |
| ue_currency_afterupdate | Evenement personnalise |
| ue_before_invoicehead | Evenement personnalise |
| ue_dvi_salord_create_open | Evenement personnalise |
| ue_after_dvi_salord_launch | Evenement personnalise |
| ue_after_creamod_dvioffer | Evenement personnalise |
| ue_offer_after_modifprice | Evenement personnalise |
| ue_before_dbsendmail | Evenement personnalise |
| ue_quicksales_after_line_itemchanged | Evenement personnalise |
| ue_after_creaship | Evenement personnalise |
| ue_invoice_print | Evenement personnalise |
| ue_invsalcalc_beforerecalc | Evenement personnalise |
| ue_CustSpec_reserved | Evenement personnalise |
