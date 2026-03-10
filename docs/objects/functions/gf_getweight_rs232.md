# gf_getweight_rs232

- **Module**: `_system` (Systeme)
- **Signature**: `decimal gf_getweight_rs232(integer as_id, s_getweight_rs232_param as_param)`
- **Description**: Recupere le poids depuis une balance RS232

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_id` | `integer` | Chaine - id |
| `as_param` | `s_getweight_rs232_param` | Chaine - param |

## Appele par

- `w_bcd_input_qty` (_stkbarcod)
- `w_bcd_lot_qty` (_stkbarcod)
- `w_brf_lot_qty` (_stkbarcod)
- `w_quick_directsales` (_sales_cash)
- `w_system_application` (_system)

## Appelle

- `gf_replace_character`
- `gf_replaceall`
- `messagebox`

