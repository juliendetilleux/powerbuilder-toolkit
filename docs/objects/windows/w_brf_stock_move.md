# w_brf_stock_move

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Stock move (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | Integer |
| il_OrdNo | Long |
| ii_OrdLine | Int |
| is_Item | string |
| is_ItemName | string |
| id_reqqty | decimal |
| is_ItUm | string |
| id_stdval | decimal |
| is_hjjob | string |
| is_hjcomnt | string |
| uniqueid | long |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_loc_activate | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_no_qty | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_loc_same | String |
| Conf_Cancel | String |
| Conf_Qty | String |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| il_row | long |
| nvo_bc | nvo_bcd_brf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| deactivate | Desactivation de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
