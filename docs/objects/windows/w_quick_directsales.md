# w_quick_directsales

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales_cash
- **Description**: Quick directsales

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
| il_LastRow | Long |
| idec_ValToPay | Decimal |
| is_DirectSal | String |
| iboo_Not_Search | Boolean |
| ii_DirSalRateId | Integer |
| is_DsRatChoice | String |
| luo_display_cash | uo_display_cash |
| is_dirsalpos | String |
| iw_parent | w_window |
| is_ITUMTRF | string |
| ii_ETIPRI | long |
| is_ETIPRI | string |
| s_balance | s_getweight_rs232_param |
| ib_initempack | boolean |
| lnvo_ShipItemPack | nvo_ShipItemPack |
| is_OldAdId | String |
| is_filebackup | String |
| is_tabfile | String |
| is_BLKSALMAN | string |
| ib_moxcursor | boolean |
| is_snitch | string |
| is_CASHMODCOST | string |
| il_ratecash_choiceline | long |
| is_custcash_choiceline | string |
| is_cash | string |
| is_currecy2 | string |
| ii_sale_pos | long |
| idt_salline | nv_datastore |
| idt_salhead | nv_datastore |
| idt_pack | nv_datastore |
| is_MULTICO | string |
| is_CASHSALV | string |
| ib_tosale | boolean |
| is_CASHPRINT | string |
| is_WEBSERTVA2 | string |
| il_Val_soap | Long |
| isoapconnection | soapconnection |
| icheckvatport | checkvatport |
| is_ad | string |
| im_MenuTag | m_Xtra_Action |
| Key | string |
| Old_Focus_text | uo_statictext |
| timeflash | boolean |
| is_MFGPREMES | string |
| is_adtvatyp | string |
| is_CASHTUCHS | string |

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
| createsalline(long sale_order, ref long sale_line, long rownum) | public | Creation |
| wf_newlinkaux() | public | Creation |
| wf_inputok() | public | Verifie wf_inputok |
| wf_retrievesalline(long al_salhead) | public | Recupere les donnees |
| wf_changetaborder(string as_shshiptocmnt) | public | Modification |
| wf_ghost(string as_itsalghost, integer ai_salline, integer rownum, long al_salhead, string as_creamodif) | public | Calcule/retourne wf_ghost |
| wf_changelinedate(long al_order, string as_cust, datetime adt_date) | public | Modification |
| wf_updateline4copy() | public | Mise a jour |
| wf_search_first() | public | Recherche |
| wf_yellowsearch() | public | Recherche |
| wf_linetottext_adapt(string as_dirsalrate) | public | Traitement wf_linetottext_adapt |
| wf_totcalc() | public | Calcul |
| wf_add1qty() | public | Ajout |
| wf_addnqty() | public | Ajout |
| wf_notalloctreat() | public | Traitement wf_notalloctreat |
| wf_display(long al_row) | public | Affichage |
| wf_autopack(long al_row) | public | Verifie wf_autopack |
| wf_check_itempack() | public | Validation |
| wf_replaceline_itempack(long al_row) | public | Remplacement de chaine |
| wf_save_itempack(boolean ab_ticket, long al_shiphead_tickethead) | public | Sauvegarde les donnees |
| wf_retqtystd(string as_item, ref decimal as_qtytarif) | public | Fonction wf_retqtystd |
| wf_addqty(decimal ad_qty, decimal ad_qtytarif) | public | Ajout |
| wf_insrowdw(string as_itcode, string as_itname, string as_itum, string as_itstat1, string as_itstat2, string as_lkum, decimal adec_lkumconv, long al_lkcode, long al_rowpos, string as_origin, decimal adec_itweight, decimal adec_itvol, string as_lkadref, decimal adec_qtyperpal, string as_lkcmnt, decimal adec_finalprice, string as_itplu, string as_itean, decimal ad_qty, string as_lot, decimal ad_custqty) | public | Traitement wf_insrowdw |
| wf_insrowdw_dirsal(string as_item, decimal ad_qty, string as_lot, decimal ad_custqty) | public | Traitement wf_insrowdw_dirsal |
| wf_modify_sal(long al_salord, long cx, ref boolean aboo_ok) | public | Verifie wf_modify_sal |
| wf_showinfo2() | public | Affichage |
| wf_initconsfromsale(long al_sale) | public | Initialisation |
| wf_insertpack(string as_itempack, decimal ad_qtycons, long al_row, string al_mod) | public | Ajout |
| wf_prev_print() | public | Impression |
| wf_snitch(string as_info) | public | Traitement wf_snitch |
| wf_currconv2() | public | Fonction wf_currconv2 |
| wf_save_cmd_datastore(long al_pos) | public | Sauvegarde les donnees |
| wf_search_firstempty() | public | Recherche |
| wf_add_dts_infile() | public | Ajout |
| wf_new() | public | Creation |
| wf_next() | public | Traitement wf_next |
| wf_show_dts(long al_pos) | public | Affichage |
| wf_previous() | public | Traitement wf_previous |
| wf_delete() | public | Suppression |
| wf_count_cmd_dts() | public | Calcule/retourne wf_count_cmd_dts |
| wf_initialise_soap() | public | Initialisation |
| wf_check_menu_access(uo_statictext a_object, integer m_type) | public | Validation |
| wf_check_vat(boolean ab_message) | public | Validation |
| wf_save() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| ue_rowchanged | Evenement personnalise ue_rowchanged |
