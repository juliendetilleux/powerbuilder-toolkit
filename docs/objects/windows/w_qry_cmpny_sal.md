# w_qry_cmpny_sal

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _query
- **Description**: Cmpny sal (Requetes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_qry_ad | string |
| ls_testtri | string |
| ship_start | datetime |
| inv_start | datetime |
| hist_start | datetime |
| ca_start | datetime |
| caevol_start | datetime |
| mp_start | datetime |
| idt_turn_prev_start | datetime |
| ls_null | string |
| tr_start | datetime |
| com_start | datetime |
| com_stop | datetime |
| dvi_start | datetime |
| iboo_SaleRet | Boolean |
| iboo_ShipRet | Boolean |
| iboo_InvRet | Boolean |
| iboo_HistoRet | Boolean |
| iboo_CaRet | Boolean |
| iboo_MeanPrice | Boolean |
| iboo_trans | Boolean |
| iboo_com | Boolean |
| ii_SelectTab | Int |
| is_InfoOpen | String |
| is_InfoShip | String |
| is_InfoInv | String |
| is_InfoHisto | String |
| is_InfoMeanP | String |
| is_InfoCA | String |
| is_InfoTrans | String |
| is_InfoCom | String |
| isTabOpen_Ordtri | Any |
| istabShip_ordtri | Any |
| isTabInv_ordtri | Any |
| isTabHis_ordtri | Any |
| isTabCA_ordtri | Any |
| isTabTrans_ordtri | Any |
| is_caevol | string |
| adress_visibility | Boolean |
| item_visibility | boolean |
| il_salhead | long |
| il_salline | long |
| il_Sel_rate | long |
| dwc | DataWindowChild |
| ib_adrate_retrieved | boolean |
| ii_InvReportType | Integer |
| ii_itemsoc | int |
| is_InfoDvi | string |
| il_projid | long |
| il_versid | long |
| il_phdocid | long |
| iSel_salord | long |
| isel_sallin | long |
| is_sel_ad | string |
| is_ordtri | any |
| is_Sel_Ordr_Curr | string |
| idt_selhdat | datetime |
| is_saltype | string |
| is_ordinfo | string |
| s_linestatus | string |
| is_item | string |
| is_itemname | string |
| ScreenFilter | string |
| il_ihcode | long |
| il_illine | long |
| il_inv_shiporder | long |
| il_inv_shipline | long |
| il_inv_salorder | long |
| il_inv_salline | long |
| il_hstcmd_shiporder | long |
| il_hstcmd_shipline | long |
| il_hstcmd_cilcode | long |
| ii_index | int |
| is_INVOICEPDF_dir | string |
| il_DVISalOrder | long |
| il_DVIInv | long |
| iSel_shipdays | integer |
| iSel_ordr_Status | string |
| iSel_sallstlin | int |
| iSel_custref | string |
| iSel_datreq | datetime |
| is_LBCPUR | string |
| is_LBCMFG | string |
| sel_period | string |
| ref_period | string |
| is_Filter_marge | string |
| idwc_period_turnover_cust | DataWindowChild |
| is_mcfilter | string |
| sql_evol1 | string |
| sql_evol2 | string |
| sql_evol3 | string |
| is_evolad | string |
| filtersql | string |
| filtername | string |
| is_Infocash | string |
| is_thcash | string |
| il_thcode | long |
| shipto | integer |
| shptoName | string |
| ShipToNb | integer |
| ShipToName | string |
| is_Infocons | string |
| is_ustyp | string |
| is_usentry | string |
| is_saleman | string |
| sel_period1_clot | string |
| ref_period1_clot | string |
| sel_period_clot | string |
| ref_period_clot | string |
| Sel_ad_clot | string |
| regroup | integer |
| lnvo_clot_print | nvo_clot_print |
| lb_ismulticodo_visible | boolean |
| is_INVCASH | string |
| is_TURNPREV | string |
| li_SDRDaysBefore | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_historet() | public | Traitement wf_historet |
| wf_checkauthority() | public | Validation |
| loadmultitri() | public | Charge les donnees |
| wf_show_mfg() | public | Affichage |
| wf_showinfo(uo_checkbox acbx_checkbox, string as_info) | public | Affichage |
| wf_contfilter() | public | Applique un filtre |
| wf_show_acts() | public | Affichage |
| wf_print_invship(long al_shiphead) | public | Impression |
| wf_print_invsal(long al_salhead) | public | Impression |
| wf_print_hscmd_inv(long al_inv) | public | Impression |
| wf_refresh_index() | public | Rafraichit l'affichage |
| wf_total_salval_1year(datetime adt_datestart, string as_salinputtype) | public | Retourne wf_total_salval_1year |
| wf_print_prepdet() | public | Impression |
| wf_check_period(character requirement) | public | Validation |
| wf_check_directcash() | public | Validation |
| load_ddlb_shipto() | public | Charge les donnees |
| wf_check_salesman_access() | public | Validation |
| wf_showhelp(uo_checkbox sel_checkbox, string info) | public | Affichage |
| wf_chek_period(character requirement) | public | Verifie wf_chek_period |
| wf_relative_period(string period, integer offset) | public | Retourne wf_relative_period |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_graph_create | Evenement personnalise ue_graph_create |
| ue_itemchanged | Evenement personnalise ue_itemchanged |
| other | Gestion d'evenements divers |
| getfocus | Evenement getfocus |
| doubleclicked | Double-clic sur la fenetre |
| losefocus | Evenement losefocus |
