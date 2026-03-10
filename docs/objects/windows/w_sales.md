# w_sales

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_selhdat | datetime |
| isel_salord | long |
| ls_testtri | string |
| isel_sallin | long |
| isel_sallinold | long |
| ls_testtri2 | string |
| is_linetype | string |
| is_sel_ad | string |
| is_item | string |
| is_ItemName | string |
| is_linestatus | string |
| d_qty | double |
| t_ship | datetime |
| is_Sel_Ordr_Curr | String |
| is_saltype | string |
| is_custitem | string |
| is_salesample | string |
| is_ordinfo | string |
| Is_ordtri | Any |
| is_DiscDate | String |
| is_CustCrdt | String |
| is_ittyp | String |
| is_turntruck | string |
| is_CrdtCtrl | string |
| il_slghost | long |
| is_slprintghost | string |
| is_rist | string |
| is_sltype | string |
| is_planningtype | string |
| lb_clicked | boolean |
| ib_drag_canbegin | boolean |
| is_AUDITSALE | String |
| screenfilter | string |
| is_filter | string |
| filterstring | string |
| is_QUICKSALE | string |
| ib_newghost_child | boolean |
| iSel_shipdays | integer |
| iSel_ordr_Status | string |
| iSel_sallstlin | int |
| iSel_custref | string |
| iSel_datreq | datetime |
| is_ITUMTRF | string |
| ib_inretrieve | boolean |
| is_type_WMS | string |
| is_SALECOLISAGE | string |
| il_hstcmd_shiporder | long |
| il_hstcmd_shipline | long |
| il_hstcmd_cilcode | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| refresh() | public | Rafraichit l'affichage |
| refreshlin() | public | Rafraichit l'affichage |
| close_delivered() | public | Fermeture |
| wf_null_completesale() | public | Traitement wf_null_completesale |
| loadmultitri() | public | Charge les donnees |
| wf_linemod_withcheck() | public | Validation |
| show_mfg() | public | Affichage |
| wf_creditbal(string as_adcode) | public | Verifie wf_creditbal |
| wf_null() | public | Traitement wf_null |
| null_line() | public | Verifie null_line |
| null_line_type_m() | public | Verifie null_line_type_m |
| null_line_type_n() | public | Verifie null_line_type_n |
| wf_salhead_cond() | public | Traitement wf_salhead_cond |
| wf_dragdrop(uo_datawindow adw_source, long al_row_dest) | public | Traitement wf_dragdrop |
| wf_show_salline_audit() | public | Affichage |
| wf_salline_filter() | public | Applique un filtre |
| clot_line_old() | public | Traitement clot_line_old |
| wf_clot_headandline() | public | Traitement wf_clot_headandline |
| clot_line(boolean ab_confirm) | public | Verifie clot_line |
| wf_notship_line() | public | Traitement wf_notship_line |
| filteritem() | public | Applique un filtre |
| wf_print_invship(long al_shiphead) | public | Impression |
| wf_print_hscmd_inv(long al_inv) | public | Impression |
| wf_salhead_filter() | public | Applique un filtre |
| wf_export_wms() | public | Exportation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| activate | Activation de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| losefocus | Evenement losefocus |
