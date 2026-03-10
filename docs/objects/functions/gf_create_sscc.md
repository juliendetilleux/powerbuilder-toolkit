# gf_create_sscc

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `string gf_create_sscc(string typeqty, string custid, long shiphead, long shipline, integer seqnr)`
- **Description**: Cree un code SSCC (Serial Shipping Container Code)

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `typeqty` | `string` | string |
| `custid` | `string` | string |
| `shiphead` | `long` | long |
| `shipline` | `long` | long |
| `seqnr` | `integer` | integer |

## Appele par

- `nvo_ship_pallet` (_sales)
- `w_sales_palet_label` (_sales)

