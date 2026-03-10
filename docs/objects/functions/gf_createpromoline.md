# gf_createpromoline

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `integer gf_createpromoline(long al_salecode, long al_saleline, decimal adec_qty)`
- **Description**: Cree une ligne de promotion

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_salecode` | `long` | Valeur long - salecode |
| `al_saleline` | `long` | Valeur long - saleline |
| `adec_qty` | `decimal` | decimal |

## Appele par

- `w_quick_directsales` (_sales_cash)
- `w_quicksales` (_sales)
- `w_salline_update` (_sales)

## Appelle

- `dberrormsg`

