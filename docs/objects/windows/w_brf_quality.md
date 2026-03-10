# w_brf_quality

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Qualite (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | Integer |
| il_OrdNo | Long |
| ii_OrdLine | Int |
| is_Item | string |
| is_ItemName | string |
| is_lot | string |
| id_reqqty | decimal |
| id_mfgqty | decimal |
| is_ItUm | string |
| is_item_bcd_auto | string |
| id_item_qty | decimal |
| id_stdval | decimal |
| is_itdefaultloc | string |
| is_flag | string |
| uniqueid | long |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_order | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_no_qty | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_Lot_read | String |
| Conf_Cancel | String |
| Conf_Qty | String |
| nvo_bc | nvo_bcd_brf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| losefocus | Evenement losefocus |
