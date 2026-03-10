# w_transact_rcpo2

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcpo2 (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| is_It_sel_name | string |
| iSel_purord | long |
| iSel_purlin | int |
| iw_parent | w_window |
| is_MFGRCPO | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime realdate) | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
