# gf_alloclot

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `boolean gf_alloclot(long al_ordno, long ai_ordline, string as_lot, string as_loc, string as_loorgcode, decimal adec_qty2alloc, decimal ad_qtyweight)`
- **Description**: Alloue un lot a une vente

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_ordno` | `long` | Valeur long - ordno |
| `ai_ordline` | `long` | Entier - ordline |
| `as_lot` | `string` | Chaine - lot |
| `as_loc` | `string` | Chaine - loc |
| `as_loorgcode` | `string` | Chaine - loorgcode |
| `adec_qty2alloc` | `decimal` | decimal |
| `ad_qtyweight` | `decimal` | Date/decimal - qtyweight |

## Appele par

- `w_bcd_ship_prepare3` (_stkbarcod)

## Appelle

- `dberrormsg`
- `gf_prepare_ghost`

