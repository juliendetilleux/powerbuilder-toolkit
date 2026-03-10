# w_transact_rcpo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcpo (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_histoseq | long |
| is_print_rcpo | String |
| is_suppum | String |
| idec_convcoef | dec |
| ib_DiffUm | Boolean |
| is_prgcmnt | String |
| is_FssLot | string |
| is_FssLot_cmnt | string |
| ii_Index | Integer |
| ii_RemVal | Integer |
| is_RemValFor | String |
| lboo_RemVal | Boolean |
| ii_Ret | Integer |
| is_AdId | String |
| QCParaLaunch | String |
| is_CheckParamLotFss | String |
| idec_QtyTemp | Decimal |
| idwc_Choices | datawindowchild |
| ib_Modified | boolean |
| WithQC | boolean |
| li_QCversion | integer |
| QC_wait | integer |
| iboo_LotFss2Int | Boolean |
| is_RcpoCmnt | String |
| id_qty | decimal |
| nvo_lar | nvo_launch_atreceipt |
| ib_recdatpara | boolean |
| is_MSLOTSUPP | string |
| is_RCPOLOT | string |
| isel_item_id | string |
| is_it_sel_um | string |
| is_it_sel_deflot | string |
| iw_parent | w_window |
| is_MFGRCPO | string |
| is_LBCPUR | string |
| is_ITUMTRF | string |
| ib_more | boolean |
| id_qty_remain | decimal |
| il_plline | long |
| ib_rerecept | boolean |
| idecTab_Conv | Decimal |
| isTab_SuppUm | String |
| il_trid | long |
| is_PURVALREC | string |
| st_info_recept | struct_info_recept |
| id_qty_todispatch | decimal |
| invo_purrcpt | nvo_purrcpt |
| ib_indispatch | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_verif_lot() | public | Verifie wf_verif_lot |
| wf_verif_unicite_lot(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot |
| wf_verif_unicite_lot_bup(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot_bup |
| initqc() | public | Initialisation |
| save_qc() | public | Sauvegarde les donnees |
| wf_verif_nv(string as_data, string as_lottype) | public | Verifie wf_verif_nv |
| wf_check_tarif(boolean ab_modifyqty) | public | Validation |
| wf_check_qty() | public | Validation |
| wf_receptmore() | public | Verifie wf_receptmore |
| wf_check_loorgcode(struct_info_recept st_info_recept) | public | Validation |
| wf_check_realdatclot(datetime adt_realdate) | public | Validation |
| wf_prefill_data() | public | Traitement wf_prefill_data |
| wf_check_setdefaultloc() | public | Validation |
| wf_dispatch_onpurline() | public | Calcule/retourne wf_dispatch_onpurline |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
