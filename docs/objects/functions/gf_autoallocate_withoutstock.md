# gf_autoallocate_withoutstock

- **Module**: `_stock` (Gestion des stocks)
- **Signature**: `boolean gf_autoallocate_withoutstock(string ordrtyp, long ordrno, long ordrlin, string item, integer lastalloc, decimal qtyrequired, string lot, string lorgcode, string loc, datetime adt_dlc)`
- **Description**: Allocation automatique sans stock disponible

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ordrtyp` | `string` | string |
| `ordrno` | `long` | long |
| `ordrlin` | `long` | long |
| `item` | `string` | string |
| `lastalloc` | `integer` | integer |
| `qtyrequired` | `decimal` | decimal |
| `lot` | `string` | string |
| `lorgcode` | `string` | string |
| `loc` | `string` | string |
| `adt_dlc` | `datetime` | DateTime - dlc |

## Appele par

- `nv_sales` (_sales)
- `w_bcd_sales_directship` (_stkbarcod)
- `w_salline_prep` (_sales)
- `w_salline_prepare` (_sales)

## Appelle

- `dberrormsg`
- `messagebox`
- `relativedatetime`

