# gf_get_discrate

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `decimal gf_get_discrate(string as_cust, string as_item, datetime adt_datreq)`
- **Description**: Retourne le taux de remise

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_cust` | `string` | Chaine - cust |
| `as_item` | `string` | Chaine - item |
| `adt_datreq` | `datetime` | DateTime - datreq |

## Appele par

- `gf_get_sale_choosen_rate` (_sales)
- `gf_get_salerate` (_sales)

## Appelle

- `dberrormsg`

