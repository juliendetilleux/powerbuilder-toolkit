# createnewlotnb

- **Module**: `_stock` (Gestion des stocks)
- **Signature**: `string createnewlotnb(string prefix)`
- **Description**: Cree un nouveau numero de lot

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `prefix` | `string` | string |

## Appele par

- `gf_location_buffer_mixed` (_stock)
- `nvo_bcd_brf` (_stkbarcod)
- `nvo_if_transfert` (_edilink)
- `nvo_import_wms` (_system)
- `nvo_mfgreport` (_manufg)
- `nvo_of_launch` (_manufg)
- `nvo_recept` (_stock)
- `nvo_redesign_ssccline` (_quality)
- `nvo_ship` (_sales)
- `nvo_shipitempack` (_sales)
- `nvo_stock_aj` (_stock)
- `w_allocateorder` (_manufg)
- `w_assembly` (_manufg)
- `w_bcd_rcmo` (_stkbarcod)
- `w_brf_cash_ticket_pay_update` (_stkbarcod)
- `w_brf_sscc_stock_move` (_stkbarcod)
- `w_brf_transact_opbl` (_stkbarcod)
- `w_brf_transact_rcpo` (_stkbarcod)
- `w_brf_transact_rcpo3` (_stkbarcod)
- `w_brf_transact_rcsc` (_stkbarcod)
- `w_cashfood` (_sales_food)
- `w_cycn_ajst` (_stock)
- `w_deposit_update` (_purch)
- `w_dvi_item_create` (_devis)
- `w_dvi_itemkit_create` (_devis)
- `w_item_update` (_masters)
- `w_itemanx_update` (_masters)
- `w_itemfan_update` (_masters)
- `w_itemsrv_update` (_masters)
- `w_launchorder_group_line` (_manufg)
- `w_mfghorder_update` (_manufg)
- `w_purhead_receipt_sup` (_purch)
- `w_purline_quickreceipt` (_purch)
- `w_rcpo_kit_comp_lot` (_stock)
- `w_recovery` (_purch)
- `w_sales_dirsal` (_sales_cash)
- `w_sales_return_sav_update` (_sales)
- `w_sales_return_update` (_sales)
- `w_selectdevarticle` (_devis)
- `w_system_application` (_system)
- `w_ticket_pay_update` (_sales_cash)
- `w_ticketfood_pay_update` (_sales_food)
- `w_transact_aj` (_stock)
- `w_transact_containing` (_stock)
- `w_transact_freezable` (_stock)
- `w_transact_opbl` (_stock)
- `w_transact_rcmo` (_stock)
- `w_transact_rcmo_f` (_stock)
- `w_transact_rcpo` (_stock)
- `w_transact_rcpo_dlxo` (_stock)
- ... et 5 autres

## Appelle

- `dberrormsg`
- `gf_change_base26`
- `gf_get_param_i`

