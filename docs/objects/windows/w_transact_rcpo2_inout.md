# w_transact_rcpo2_inout

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Transactions rcpo2 inout (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_histoseq1 | long |
| il_histoseq2 | long |
| is_trcode1 | string |
| is_trcode2 | string |
| id_qty1 | decimal |
| id_qty2 | decimal |
| id_It_sel_stdcost | decimal |
| is_it_sel_name | string |
| iSel_purord | long |

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
