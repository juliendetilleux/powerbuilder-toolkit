# gf_get_salerate

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `any gf_get_salerate(string as_cust, string as_item, string as_curr, decimal adec_currconv, datetime adt_datereq, string as_directsal)`
- **Description**: Retourne le taux de vente

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_cust` | `string` | Chaine - cust |
| `as_item` | `string` | Chaine - item |
| `as_curr` | `string` | Chaine - curr |
| `adec_currconv` | `decimal` | decimal |
| `adt_datereq` | `datetime` | DateTime - datereq |
| `as_directsal` | `string` | Chaine - directsal |

## Appele par

- `gf_getsaleprice` (_sales)
- `w_rates` (_masters)
- `w_system_application` (_system)

## Appelle

- `dberrormsg`
- `gf_format_rate`
- `gf_get_discrate`
- `gf_get_paramprog`

