# gf_alloc_delete

- **Module**: `_stock` (Gestion des stocks)
- **Signature**: `boolean gf_alloc_delete(long il_salcode, long il_salline, long il_allocseq, decimal id_allocqty, string is_alloclot, string is_allocloc, boolean ib_inrecursive, boolean ab_confirm)`
- **Description**: Supprime une allocation de stock

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `il_salcode` | `long` | long |
| `il_salline` | `long` | long |
| `il_allocseq` | `long` | long |
| `id_allocqty` | `decimal` | decimal |
| `is_alloclot` | `string` | string |
| `is_allocloc` | `string` | string |
| `ib_inrecursive` | `boolean` | boolean |
| `ab_confirm` | `boolean` | Booleen - confirm |

## Appele par

- `w_sales_allocate` (_sales)
- `w_sales_dirsal` (_sales_cash)
- `w_salline_prepare` (_sales)

## Appelle

- `dberrormsg`
- `gf_prepare_ghost`

