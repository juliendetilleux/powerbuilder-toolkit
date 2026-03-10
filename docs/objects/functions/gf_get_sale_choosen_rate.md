# gf_get_sale_choosen_rate

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `any gf_get_sale_choosen_rate(string as_choosen_rate, string as_item, string as_curr, decimal adec_currconv, string as_cust, datetime adt_datereq)`
- **Description**: Retourne le taux de vente choisi

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_choosen_rate` | `string` | Chaine - choosen rate |
| `as_item` | `string` | Chaine - item |
| `as_curr` | `string` | Chaine - curr |
| `adec_currconv` | `decimal` | decimal |
| `as_cust` | `string` | Chaine - cust |
| `adt_datereq` | `datetime` | DateTime - datereq |

## Appele par

- `gf_getsalepricefromrate` (_sales)
- `w_devis` (_devis)
- `w_devis_garage_update` (_devis)
- `w_devis_update` (_devis)
- `w_devisoffer_update` (_devis)
- `w_dvi_itemln_update` (_devis)
- `w_dvi_itemsav_update` (_devis)
- `w_inv_directsal` (_sales)

## Appelle

- `gf_format_rate`
- `gf_get_discrate`
- `gf_get_paramprog`

