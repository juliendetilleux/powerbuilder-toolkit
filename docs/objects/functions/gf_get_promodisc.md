# gf_get_promodisc

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `integer gf_get_promodisc(string as_cust, string as_item, datetime adt_datreq, ref s_saleprice astr_saleprice, decimal adec_qty)`
- **Description**: Retourne la remise promotionnelle

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_cust` | `string` | Chaine - cust |
| `as_item` | `string` | Chaine - item |
| `adt_datreq` | `datetime` | DateTime - datreq |
| `astr_saleprice` | `ref s_saleprice` | Structure - saleprice |
| `adec_qty` | `decimal` | decimal |

## Appele par

- `gf_get_saledisc` (_sales)

## Appelle

- `dberrormsg`

