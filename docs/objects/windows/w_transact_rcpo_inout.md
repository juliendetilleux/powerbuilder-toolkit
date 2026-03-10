# w_transact_rcpo_inout

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcpo inout (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_histoseq | long |
| is_print_rcpo | String |
| is_suppum | String |
| il_convcoef | dec |
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
| is_RcpoCmnt | String |
| iboo_LotFss2Int | Boolean |
| il_phfileref | long |
| il_phfileline | long |
| il_histoseq2 | long |
| is_trcode2 | string |
| id_qty2 | decimal |
| id_qty1 | decimal |
| is_it_sel_um | string |
| is_it_sel_deflot | string |
| iSel_item_id | string |
| iSel_supp_id | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_verif_lot() | public | Verifie wf_verif_lot |
| wf_verif_nv(string as_data) | public | Verifie wf_verif_nv |
| wf_verif_unicite_lot(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot |
| wf_verif_unicite_lot_bup(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot_bup |
| initqc() | public | Initialisation |
| save_qc() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
