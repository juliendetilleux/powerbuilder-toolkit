# gf_delimit_ean128

- **Module**: `_stkbarcod` (Codes-barres et scanning)
- **Signature**: `boolean gf_delimit_ean128(ref struct_ean128 st_ean128)`
- **Description**: Delimite les champs d'un code EAN128

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `st_ean128` | `ref struct_ean128` | struct ean128 |

## Appele par

- `nvo_bcd_brf` (_stkbarcod)
- `nvo_cycn` (_stkbarcod)
- `nvo_purrcpt` (_stkbarcod)
- `w_bcd_sales_directship` (_stkbarcod)
- `w_bcd_ship_prepare3` (_stkbarcod)
- `w_brf_test` (_stkbarcod)
- `w_quick_directsales` (_sales_cash)
- `w_sales_return2_sel` (_sales)

## Appelle

- `dberrormsg`
- `gf_get_ean128_date`

