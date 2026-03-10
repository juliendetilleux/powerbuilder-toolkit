# w_sales_dirsal

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_cash
- **Description**: Ventes dirsal

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_selhdat | datetime |
| isel_salord | long |
| ls_testtri | string |
| isel_sallin | long |
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
| is_QUICKSALE | string |
| il_TckHead | Long |
| il_InvHead | Long |
| iSel_shipdays | integer |
| iSel_datreq | datetime |
| iw_parent | w_window |
| iSel_ordr_Status | string |
| iSel_sallstlin | int |
| iSel_custref | string |
| is_ITUMTRF | string |
| is_TICKECUST | string |
| is_EMPCASH | string |
| ib_last | boolean |
| il_shiphead | long |
| idecTab_LineCost | Decimal |
| is_DirSalAdId | string |
| is_cash | string |
| is_custcash_choiceline | string |
| il_ratecash_choiceline | long |
| is_CASHSALV | string |
| is_CASHSTOCK | string |

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
| wf_createtickets() | public | Creation |
| wf_autoallocateline_withoutstock(string ordrtyp, long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, string lot, string lorgcode, string loc, datetime adt_dlc, string as_itwithlot, decimal ad_qtyord) | public | Verifie wf_autoallocateline_withoutstock |
| wf_desallocate_order(long al_selorder) | public | Traitement wf_desallocate_order |
| wf_selsalship() | public | Calcule/retourne wf_selsalship |
| wf_autoallocateline(ref string as_error) | public | Verifie wf_autoallocateline |
| wf_autoallocateline_withstock(long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, decimal ad_qtyord, string as_loorgcode, ref string as_error) | public | Verifie wf_autoallocateline_withstock |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| activate | Activation de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| losefocus | Evenement losefocus |
