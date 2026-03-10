# w_transact_rcpo1

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcpo1 (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| isel_item_id | string |
| is_it_sel_deflot | string |
| iSel_purord | long |
| iSel_purlin | int |
| iw_parent | w_window |
| iSel_mfg_id | long |
| is_MFGRCPO | string |
| il_plrefline | long |
| ib_updatemfghead | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| initwindow() | public | Initialisation |
| check_tr() | public | Validation |
| save_tr() | public | Sauvegarde les donnees |
| wf_check_realdatclot(datetime adt_realdate) | public | Validation |
| wf_check_setdefaultloc() | public | Validation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
