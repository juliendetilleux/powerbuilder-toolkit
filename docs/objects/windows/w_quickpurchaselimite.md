# w_quickpurchaselimite

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Quickpurchaselimite (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| idt_Date | DateTime |
| is_purRef | String |
| is_SuppId | String |
| is_Curr | String |
| idwc_Shipto | DataWindowChild |
| shiptoName | string |
| ShipToNb | integer |
| ShipToDays | integer |
| defshipto | integer |
| iboo_Modify | Boolean |
| il_purCode | Long |
| is_AdName | String |
| il_SelRow | Long |
| is_ItSort | String |
| p_KeepDate | String |
| p_NbDays | integer |
| idec_CurrConv | Decimal |
| ib_flash | Boolean |
| ii_flash | integer |
| ib_InfoText | Boolean |
| iboo_crdtflash | Boolean |
| iboo_CrdtPass | Boolean |
| is_CrdtCtrl | String |
| is_ShipCost | String |
| ib_light | boolean |
| ii_nbtimer | integer |
| is_purordat1 | string |
| ii_index | int |
| is_ITUMTRF | string |
| is_PURQTYEX | string |
| iw_parent | w_window |
| Action | String |
| is_USFQPURH | string |
| ii_Ret | int |
| ii_Ret2 | int |
| ii_existplusr01 | int |
| is_table_name | string |
| is_MULTICO | string |
| is_type_WMS | string |
| il_plcontract | long |
| nv_contract | nvo_purchase_contract |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_modify() | public | Verifie wf_modify |
| wf_copyrow() | public | Copie |
| wf_createpurhead() | public | Creation |
| createpurline(long pur_order, long pur_line, long rownum) | public | Creation |
| changeorder(double orderqty, double uomconv, double stdval, integer row) | public | Modification |
| load_ddlb_shipto() | public | Charge les donnees |
| wf_arrow_rowchange(keycode key) | public | Modification |
| wf_retrievepurline(long al_purhead) | public | Recupere les donnees |
| wf_updpurline(long pur_order, long rownum, ref long lastline) | public | Calcule/retourne wf_updpurline |
| wf_check() | public | Validation |
| wf_prepa_usrf_purline() | public | Verifie wf_prepa_usrf_purline |
| wf_retrieve_dw_usrfld_purline() | public | Recupere les donnees |
| wf_save_usrf(long al_phcode) | public | Sauvegarde les donnees |
| wf_switch_tb() | public | Traitement wf_switch_tb |
| wf_menufunction() | public | Traitement wf_menufunction |
| wf_insrowdw(string as_itcode, string as_itname, string as_itum, string as_lkum, decimal adec_lkumconv, long al_lkcode, long al_rowpos, string as_origin, decimal adec_itweight, decimal adb_itvol, datetime dat_date, decimal as_qtyperpal, integer ai_leadtime, integer ai_availtime, decimal ad_prix, string as_lkadref, string as_plstatus) | public | Traitement wf_insrowdw |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| constructor | Constructeur |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
| ue_keypressed | Evenement personnalise ue_keypressed |
