# w_transact_rcsc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcsc (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| idwc_Item | DataWindowChild |
| s_Rcsc | Transact |
| is_FssLot_Cmnt | String |
| is_FssLot | String |
| is_adcust | string |
| codename | string |
| is_CheckParamLotFss | String |
| is_print_rcpo | string |
| histoseq | long |
| id_qty | decimal |
| is_trcode | string |
| st_info_recept | struct_info_recept |
| is_MSLOTSUPP | string |
| is_it_sel_um | string |
| is_MFGRCPO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_verif_lot() | public | Verifie wf_verif_lot |
| wf_verif_unicite_lot(string as_lot) | public | Verifie wf_verif_unicite_lot |
| reset_input() | public | Reinitialisation |
| wf_verif_nv(string as_data, string as_lottype) | public | Verifie wf_verif_nv |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| losefocus | Evenement losefocus |
| getfocus | Evenement getfocus |
| rbuttondown | Evenement rbuttondown |
| constructor | Constructeur |
