# w_transact_rcmo

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcmo (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_Ret | Integer |
| is_Action | String |
| iSel_item_id | string |
| is_It_Sel_Ser | string |
| is_it_sel_deflot | string |
| iSel_mfg_id | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| save_tr() | public | Sauvegarde les donnees |
| check_tr() | public | Validation |
| authorizesernum(string item, long startnum, long endnum) | public | Verifie authorizesernum |
| check_tr_neg() | public | Validation |
| save_tr_neg() | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| getfocus | Evenement getfocus |
