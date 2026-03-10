# w_quicksales

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Quicksales (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_Date | DateTime |
| is_CustRef | String |
| is_AdId | String |
| is_Curr | String |
| idwc_Shipto | DataWindowChild |
| shiptoName | string |
| shiptocmnt | string |
| ShipCmnt | string |
| ShipToNb | integer |
| ShipToDays | integer |
| Shipdefturn | integer |
| is_turnbyday | string |
| defshipto | integer |
| iboo_Modify | Boolean |
| il_SalCode | Long |
| is_AdName | String |
| il_SelRow | Long |
| is_ItSort | String |
| p_KeepDate | String |
| p_NbDays | integer |
| idec_CurrConv | Decimal |
| is_custitem | String |
| ib_flash | Boolean |
| ii_flash | integer |
| ib_InfoText | Boolean |
| iboo_crdtflash | Boolean |
| iboo_CrdtPass | Boolean |
| ib_FromOpen | Boolean |
| is_CrdtCtrl | String |
| is_ShipCost | String |
| is_Salrat | string |
| idwc_AltMeas | DataWindowChild |
| is_WithAm | String |
| is_SalUpOrg | String |
| is_plkcmnt | String |
| il_fileref | long |
| il_fileline | long |
| idt_dateship | DateTime |
| is_turntruck | string |
| ib_continue | boolean |
| ib_create | boolean |
| il_condhead | long |
| is_ittyp | string |
| saved | boolean |
| invo_conditionmanager | nvo_conditionmanager |
| is_autoprint | string |
| is_finalprice | string |
| is_rist | string |
| ii_ret | integer |
| action | String |
| il_salhead | long |
| is_CustCrdt | String |
| is_DiscDate | String |
| is_salesample | String |
| is_AUDITSALE | String |
| idt_auditsldateship | datetime |
| ib_checkship | boolean |
| ib_newdate | boolean |
| il_condchoose | long |
| is_SEECRBAL | string |
| is_SEESTOCK | string |
| ib_retrieved | boolean |
| ib_rempace_projcond | boolean |
| is_QKSLINKAD | string |
| is_DirectSal | String |
| ii_shturnid | int |
| is_StdCostVsb | String |
| is_TURNSAL | string |
| iw_parent | w_window |
| is_ITUMTRF | string |
| is_adbloclink | string |
| is_OldAdId | String |
| is_addirsalprev | string |
| is_QUICKTRUC | string |
| is_BLKSALMAN | string |
| is_MULTICO | string |
| ia_ordtri | Any |
| is_QUICKSTORP | string |
| is_usmcdo2 | string |
| is_ustyp | string |
| ib_loopitem | boolean |
| invo_Specific | nvo_Xtra_Specific |
| ids_quicksales_one | nv_datastore |
| ii_flash2 | integer |
| istr_sqlsret | s_sqlsearch_return |
| is_multiship | string |
| is_TURNPREV | string |
| invo_turn_prev | nvo_turn_prev |
| is_type_WMS | string |
| is_autoprint_reserv | string |
| is_QckSal3AddLn | String |
| iboo_Head_ModiFy | Boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| load_ddlb_shipto(string sel_ad) | public | Charge les donnees |
| wf_createsalhead() | public | Creation |
| wf_modify() | public | Verifie wf_modify |
| wf_copyrow() | public | Copie |
| wf_creditbal_adjust() | public | Traitement wf_creditbal_adjust |
| wf_altmeas_dd_init(long al_row) | public | Initialisation |
| wf_newlink() | public | Creation |
| allocate(long al_sel_order, long al_truck) | public | Calcule/retourne allocate |
| get_idt_dateship() | public | Fonction get_idt_dateship |
| wf_choosetrucs(datetime ad_allocdate) | public | Calcule/retourne wf_choosetrucs |
| wf_truckitems(long al_salcode, datetime ad_allocdate, long al_truck) | public | Calcule/retourne wf_truckitems |
| wf_newlinkaux() | public | Creation |
| wf_inputok() | public | Verifie wf_inputok |
| wf_insrowdw(string as_itcode, string as_itname, string as_itum, string as_itstat1, string as_itstat2, string as_lkum, decimal adec_lkumconv, long al_lkcode, long al_rowpos, string as_origin, decimal adec_itweight, decimal adec_itvol, string as_lkadref, decimal adec_qtyperpal, string as_lkcmnt, decimal adec_finalprice) | public | Traitement wf_insrowdw |
| wf_retrievesalline(long al_salhead) | public | Recupere les donnees |
| wf_modify_sal(long al_salord, long cx) | public | Verifie wf_modify_sal |
| wf_changetaborder(string as_shshiptocmnt) | public | Modification |
| wf_ghost(string as_itsalghost, integer ai_salline, integer rownum, long al_salhead, string as_creamodif) | public | Calcule/retourne wf_ghost |
| wf_changelinedate(long al_order, string as_cust, datetime adt_date) | public | Modification |
| wf_updateline4copy() | public | Mise a jour |
| wf_linetottext_adapt(string as_dirsalrate) | public | Traitement wf_linetottext_adapt |
| wf_delete() | public | Suppression |
| wf_consignation() | public | Traitement wf_consignation |
| wf_allocate(long al_sale) | public | Traitement wf_allocate |
| wf_modify_condline(long al_salhead) | public | Verifie wf_modify_condline |
| wf_modify_condline_question() | public | Calcule/retourne wf_modify_condline_question |
| wf_arrow_rowchange(keycode key) | public | Modification |
| loadmultitri() | public | Charge les donnees |
| wf_fill_sqlsret(string as_adcode) | public | Traitement wf_fill_sqlsret |
| wf_menufunction() | public | Traitement wf_menufunction |
| createsalline(long sale_order, ref long sale_line, long rownum, decimal ad_newqty_promo) | public | Creation |
| wf_searchean() | public | Recherche |
| export_wms_quicksales() | public | Exportation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| timer | Evenement timer |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| ue_rowchanged | Evenement personnalise ue_rowchanged |
| ue_keypressed | Evenement personnalise ue_keypressed |
| losefocus | Evenement losefocus |
| getfocus | Evenement getfocus |
| ue_itemchanged | Evenement personnalise ue_itemchanged |
