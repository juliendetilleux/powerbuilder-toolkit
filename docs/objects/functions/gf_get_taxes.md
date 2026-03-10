# gf_get_taxes

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `decimal gf_get_taxes(string as_cust, string as_item, ref s_taxes astr_taxes[])`
- **Description**: Recupere les taxes applicables

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_cust` | `string` | Chaine - cust |
| `as_item` | `string` | Chaine - item |
| `astr_taxes` | `ref s_taxes` | Structure - taxes |

## Appele par

- `uo_qry_salprice` (_query)

## Appelle

- `dberrormsg`

