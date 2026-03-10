# w_purline_quickreceipt

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purline quickreceipt (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| ib_cdefaultloc_err | boolean |
| ib_cinternlot_err | boolean |
| ib_citemdlc_err | boolean |
| ib_cnbetiq_err | boolean |
| ib_creceiptqty_err | boolean |
| iboo_lotfss2int | boolean |
| ii_nbusrfields | integer |
| ii_userfields | integer |
| qc_ko | integer |
| qc_ok | integer |
| qc_wait | integer |
| il_phfileref | long |
| il_selrow | long |
| il_phcode | long |
| is_adcode | string |
| is_checkparamlotfss | string |
| is_FssLot | string |
| is_FssLot_Cmnt | string |
| is_mode | string |
| is_QCParaLaunch | string |
| is_rcio | string |
| is_Sel_purtyp | string |
| is_typ | string |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| il_row | long |
| il_ordno | long |
| il_ordlin | long |
| id_qtyn | decimal |
| is_lot | string |
| is_loc | string |
| nvo_lar | nvo_launch_atreceipt |
| is_consignement | string |
| is_RCPOLOT | string |
| isel_item_id | string |
| iSel_mfg_id | long |
| is_MFGRCPO | string |
| is_LBCPUR | string |
| is_PURVALUE | string |
| is_REALDATCLOT | string |
| ibol_ok | boolean |
| is_error | string |
| idt_recdate | datetime |
| is_PURVALREC | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |
| wf_verif_lot(long row) | public | Verifie wf_verif_lot |
| wf_save_rcpo2(long al_row) | public | Sauvegarde les donnees |
| wf_save_rcpo1(long al_row) | public | Sauvegarde les donnees |
| wf_getlinepurtype(long row) | public | Retourne linepurtype |
| wf_save_rcpo_inout(long al_row) | public | Sauvegarde les donnees |
| wf_save_rcpo(long al_row) | public | Sauvegarde les donnees |
| wf_make_qc() | public | Verifie wf_make_qc |
| wf_verif_nv(string as_data, string as_lottype) | public | Verifie wf_verif_nv |
| wf_save_rcpo2_inout(long al_row) | public | Sauvegarde les donnees |
| wf_check_line() | public | Validation |
| wf_check_realdatclot(datetime realdate) | public | Validation |
| wf_consignement(long al_row) | public | Traitement wf_consignement |
| wf_getpurtype() | public | Retourne purtype |
| wf_verif_unicite_lot(string as_lot, long al_row) | public | Calcule/retourne wf_verif_unicite_lot |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
