# gf_get_itemfromean13

- **Module**: `_stkbarcod` (Codes-barres et scanning)
- **Signature**: `struct_ean13 gf_get_itemfromean13(string as_ean13, string as_cust, boolean ab_checkplu)`
- **Description**: Retrouve un article a partir d'un code EAN13

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_ean13` | `string` | Chaine - ean13 |
| `as_cust` | `string` | Chaine - cust |
| `ab_checkplu` | `boolean` | Booleen - checkplu |

## Appele par

- `nvo_bcd_brf` (_stkbarcod)
- `nvo_cycn` (_stkbarcod)
- `nvo_edi_transfert` (_edilink)
- `nvo_purrcpt` (_stkbarcod)
- `w_bcd_sales_directship` (_stkbarcod)
- `w_bcd_ship_prepare3` (_stkbarcod)
- `w_brf_test` (_stkbarcod)
- `w_check_edipc` (_edilink)
- `w_quick_directsales` (_sales_cash)

## Appelle

- `dberrormsg`
- `gf_get_paramprog`

