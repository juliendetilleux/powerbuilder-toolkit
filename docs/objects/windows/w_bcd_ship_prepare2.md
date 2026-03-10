# w_bcd_ship_prepare2

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Expedition prepare2 (Codes-barres/Stock)

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
| is_item_bcd_auto | string |
| id_item_qty | decimal |
| id_stdval | decimal |
| id_QtyReq | decimal |
| id_qtymax | decimal |
| ii_shipto | integer |
| is_CustRef | string |
| is_CustId | string |
| is_AdName | string |
| is_ItemDesc | string |
| id_itstock | decimal |
| id_italloc | decimal |
| id_Qty2prep | decimal |
| uniqueid | long |
| Msg_Error | String |
| Msg_no_use | String |
| Msg_no_order | String |
| Msg_nul_order | String |
| Msg_no_Item | String |
| Msg_no_lot | String |
| Msg_no_loc | String |
| Msg_no_qty | String |
| Msg_2much | String |
| Msg_miss_qty | String |
| Msg_Lot_QC | String |
| Msg_Lot_Exp | String |
| Msg_Lot_ResExp | String |
| Msg_Lot_read | String |
| Conf_Cancel | String |
| Conf_Qty | String |
| is_GroupRule | String |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_showlevelinfo() | public | Affichage |
| wf_check_lot(string as_data) | public | Validation |
| wf_check_custorder(string as_data) | public | Validation |
| wf_make_ship_alloc() | public | Verifie wf_make_ship_alloc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
