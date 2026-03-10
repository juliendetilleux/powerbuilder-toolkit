# gf_qcctrl_launch

- **Module**: `_quality` (Qualite)
- **Signature**: `long gf_qcctrl_launch(string as_item, string as_clifour, string as_type, string as_numlot, long as_ordno, long as_ordlin, double ad_qtylot)`
- **Description**: Lance un controle qualite

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_item` | `string` | Chaine - item |
| `as_clifour` | `string` | Chaine - clifour |
| `as_type` | `string` | Chaine - type |
| `as_numlot` | `string` | Chaine - numlot |
| `as_ordno` | `long` | Chaine - ordno |
| `as_ordlin` | `long` | Chaine - ordlin |
| `ad_qtylot` | `double` | Date/decimal - qtylot |

## Appele par

- `nvo_bcd_brf` (_stkbarcod)
- `nvo_mfgreport` (_manufg)
- `nvo_of_launch` (_manufg)
- `nvo_recept` (_stock)
- `nvo_ship` (_sales)
- `w_bcd_rcmo` (_stkbarcod)
- `w_brf_transact_rcpo` (_stkbarcod)
- `w_brf_transact_rcpo3` (_stkbarcod)
- `w_brf_transact_rcsc` (_stkbarcod)
- `w_launchorder_group_line` (_manufg)
- `w_purhead_receipt_sup` (_purch)
- `w_purline_quickreceipt` (_purch)
- `w_qcctrl` (_quality)
- `w_qcctrl_update` (_quality)
- `w_transact_rcmo` (_stock)
- `w_transact_rcpo` (_stock)
- `w_transact_rcpo_inout` (_stock)
- `w_transact_rcpo3` (_stock)
- `w_transact_rcsc` (_stock)

## Appelle

- `dberrormsg`
- `messagebox`

