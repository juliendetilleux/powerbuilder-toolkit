# gf_location_buffer_mixed

- **Module**: `_stock` (Gestion des stocks)
- **Signature**: `integer gf_location_buffer_mixed(string as_location)`
- **Description**: Gere les emplacements buffer mixtes

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_location` | `string` | Chaine - location |

## Appele par

- `nvo_bcd_brf` (_stkbarcod)
- `nvo_mfg_file_import` (_manufg)
- `w_aftransact_ajtf_mass` (_stock)
- `w_ajtf_prep_byfiles` (_stock)
- `w_brf_sscc_stock_move` (_stkbarcod)
- `w_brf_transact_rcpo` (_stkbarcod)
- `w_brf_transact_rcpo3` (_stkbarcod)
- `w_brf_transact_rcsc` (_stkbarcod)
- `w_mfgorder_report` (_manufg)
- `w_purhead_receipt_sup` (_purch)
- `w_purline_quickreceipt` (_purch)
- `w_recovery` (_purch)
- `w_transact_aj` (_stock)
- `w_transact_ajtf` (_stock)
- `w_transact_ajtf_mass` (_stock)
- `w_transact_rcmo1` (_stock)
- `w_transact_rcpo` (_stock)
- `w_transact_rcpo_inout` (_stock)
- `w_transact_rcpo1` (_stock)
- `w_transact_rcpo2` (_stock)
- `w_transact_rcpo2_inout` (_stock)
- `w_transact_rcpo3` (_stock)
- `w_transact_rcsc` (_stock)

## Appelle

- `createnewlotnb`
- `dberrormsg`
- `getnexthistoseq`

