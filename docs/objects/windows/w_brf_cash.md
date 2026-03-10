# w_brf_cash

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stkbarcod
- **Description**: Cash (Codes-barres/Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | Integer |
| il_OrdNo | Long |
| ii_OrdLine | Int |
| ids_head | nv_datastore |
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
| is_qtyctrl | string |
| nvo_bc | nvo_bcd_brf |
| is_BCDSHIPVIEW | string |
| is_BCDEXPI | string |
| is_BCDSHIPP | string |
| is_brf_printer | string |
| is_itcode | string |
| is_adcode | string |
| ld_currconv | decimal |
| ls_dirsal | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_error(string as_msg) | public | Traitement wf_error |
| wf_create_ticket() | public | Creation |
| wf_create_shipnotice() | public | Creation |
| wf_create_invoice() | public | Creation |
| wf_fill_dw() | public | Traitement wf_fill_dw |
| wf_set_instruction() | public | Definit instruction |
| wf_datamanage(string as_data) | public | Traitement wf_datamanage |
| wf_get_custdata() | public | Retourne custdata |
| wf_get_itemdata() | public | Retourne itemdata |
| wf_get_pricedata() | public | Retourne pricedata |
| wf_fill_dw_after_last_insert() | public | Ajout |
| wf_fill_dw_after_update() | public | Mise a jour |
| wf_refresh_imputfield() | public | Rafraichit l'affichage |
| wf_get_printer() | public | Retourne printer |
| wf_delete_last_line() | public | Suppression |
| wf_mod_qty(decimal ad_qty) | public | Traitement wf_mod_qty |
| wf_annul_sale() | public | Traitement wf_annul_sale |
| wf_init_var() | public | Initialisation |
| wf_get_sale_totprice() | public | Retourne sale_totprice |
| wf_allocate_items() | public | Verifie wf_allocate_items |
| wf_create_sale() | public | Creation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
