# w_salline_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Salline - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| shiptoName | string |
| ShipToNb | long |
| ShipToDays | long |
| defshipto | long |
| id_Disc12 | Double |
| ib_ghost | boolean |
| is_ItemUm | String |
| is_LinkUm | String |
| is_adid | String |
| is_ItUm | String |
| idb_ItUmConv | Decimal |
| is_curr | String |
| ii_Index | Integer |
| ii_Ret | Integer |
| ib_flash | Boolean |
| ii_flash | integer |
| ib_InfoText | Boolean |
| iboo_crdtflash | Boolean |
| iboo_CrdtPass | Boolean |
| idec_LineOldVal | Decimal |
| is_CrdtCtrl | String |
| invo_conditionmanager | nvo_conditionmanager |
| idec_qtydisc | decimal |
| idwc_AltMeas | DataWindowChild |
| is_WithAm | String |
| idwc_fileline | datawindowchild |
| il_condhead | long |
| is_ittyp | string |
| saved | boolean |
| ib_modcond | boolean |
| il_chparent | long |
| is_DiscDate | string |
| is_CustCrdt | string |
| is_salesample | string |
| is_ordinfo | string |
| idec_audit_slstdval | decimal |
| idec_audit_slqtyreq | decimal |
| idt_audit_sldatship | datetime |
| is_AUDITSALE | string |
| il_condchoose | long |
| iSel_shipdays | integer |
| iw_parent | w_window |
| il_salhead | long |
| iSel_ordr_Curr | string |
| iSel_custref | string |
| iSel_datreq | datetime |
| is_ITUMTRF | string |
| is_MULTICO | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| salelineinputok() | public | Verifie salelineinputok |
| checkitem(string selected_item) | public | Validation |
| load_ddlb_shipto(string sel_ad) | public | Charge les donnees |
| changeshipto() | public | Modification |
| changedate(datetime newdat, integer traveldelay) | public | Modification |
| reset_fornewinput() | public | Creation |
| linefortarifok(string typ) | public | Verifie linefortarifok |
| applyrate(string typ) | public | Traitement applyrate |
| handlelink() | public | Traitement handlelink |
| wf_reset_dw_usrfld() | public | Reinitialisation |
| canchangeqty(decimal orderqty, decimal uomconv) | public | Modification |
| changeorder(decimal orderqty, decimal uomconv, decimal stdval, string ordercurr) | public | Modification |
| wf_salerate(string as_adcode, string as_itcode, datetime as_date, decimal adec_qty) | public | Traitement wf_salerate |
| wf_crdtctrl() | public | Traitement wf_crdtctrl |
| wf_creditbal_adjust() | public | Traitement wf_creditbal_adjust |
| wf_retrievefileline(long al_fileref) | public | Recupere les donnees |
| wf_ghost(long al_slline) | public | Calcule/retourne wf_ghost |
| wf_setvisible_price(string as_item) | public | Definit visible_price |
| wf_check_tarif(boolean ab_modifycoeff) | public | Validation |
| changeitem(string selected_item, boolean ab_modif) | public | Modification |
| wf_consignation() | public | Traitement wf_consignation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| timer | Evenement timer |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| losefocus | Evenement losefocus |
| constructor | Constructeur |
