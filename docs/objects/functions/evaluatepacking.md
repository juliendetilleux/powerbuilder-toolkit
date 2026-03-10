# evaluatepacking

- **Module**: `_sales` (Ventes et facturation)
- **Signature**: `any evaluatepacking(string item, string customer, double quantity)`
- **Description**: Evalue le colisage

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `item` | `string` | string |
| `customer` | `string` | string |
| `quantity` | `double` | double |

## Appele par

- `nvo_edi_transfert` (_edilink)
- `nvo_if_transfert` (_edilink)
- `nvo_open_return_update` (_sales)
- `nvo_ship` (_sales)
- `w_dvi_salord_create` (_devis)
- `w_dviln_salord_launch` (_devis)
- `w_quick_directsales` (_sales_cash)
- `w_quicksales` (_sales)
- `w_sales_allocate` (_sales)
- `w_sales_ext_manage` (_sales)
- `w_salhead_prepare` (_sales)
- `w_salhead_update` (_sales)
- `w_sallacks_replace` (_sales)
- `w_sallacks_update` (_sales)
- `w_transship` (_sales)

