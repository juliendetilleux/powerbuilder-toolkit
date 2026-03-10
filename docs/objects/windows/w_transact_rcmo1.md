# w_transact_rcmo1

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcmo1 (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Ret | Integer |
| is_Action | String |
| ii_Ret2 | Integer |
| il_line | long |
| is_It_Sel_Ser | string |
| is_it_sel_deflot | string |
| iSel_mfg_id | long |
| iw_parent | w_window |
| ib_LotModified | boolean |
| is_lotorig | string |
| is_ITUMTRF | string |
| is_itisumtarif | string |
| is_itumtarif | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| authorizesernum(string item, long startnum, long endnum) | public | Verifie authorizesernum |
| check_tr_neg() | public | Validation |
| wf_check_setdefaultloc() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
