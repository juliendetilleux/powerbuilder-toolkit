# w_brf_transact_rcpo3

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Transactions rcpo3 (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| s_Rcpo | Transact |
| is_AdCode | String |
| il_OrdNum | Long |
| ib_HeadCreate | Boolean |
| ii_PurLine | Int |
| ii_Ret | Integer |
| idt_Now | DateTime |
| is_FssLot_Cmnt | String |
| is_FssLot | String |
| id_PurStdVal | Decimal |
| is_ItUM | String |
| is_ItQC | String |
| ii_ItVal | Int |
| idwc_ShipTo | DataWindowChild |
| is_CheckParamLotFss | string |
| is_prgcmnt | string |
| is_ProgParam | string |
| idwc_Transport | DataWindowChild |
| idwc_choices | datawindowchild |
| ib_Modified | boolean |
| li_QCversion | int |
| QC_wait | integer |
| withqc | boolean |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| st_info_recept | struct_info_recept |
| QCParaLaunch | string |
| is_MSLOTSUPP | string |
| idec_LkUmConv | decimal |
| is_LkUm | string |
| ii_RemVal | int |
| is_it_sel_um | string |
| isel_supp_id | string |
| iw_parent | w_window |
| is_MFGRCPO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_createpur() | public | Creation |
| wf_checklots() | public | Validation |
| wf_verif_nv(String as_Data) | public | Fonction wf_verif_nv |
| wf_reset_fornew_input() | public | Creation |
| check_tr() | public | Validation |
| wf_verify_lot() | public | Verifie wf_verify_lot |
| wf_verif_unicite_lot_bup(string as_lot) | public | Verifie wf_verif_unicite_lot_bup |
| wf_verif_unicite_lot(string as_lot) | public | Calcule/retourne wf_verif_unicite_lot |
| save_tr() | public | Sauvegarde les donnees |
| wf_umrcptinit() | public | Initialisation |
| wf_qty_calc(string as_colname) | public | Calcul |
| initqc() | public | Initialisation |
| save_qc() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
