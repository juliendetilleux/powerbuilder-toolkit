# checkqtyarrival

- **Module**: `_manufg` (Fabrication)
- **Signature**: `string checkqtyarrival(string item, string itname, string itemtype, decimal reqqty, decimal availqty, integer nbdays, decimal ad_qty_q)`
- **Description**: Verifie la quantite a l'arrivee

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `item` | `string` | string |
| `itname` | `string` | string |
| `itemtype` | `string` | string |
| `reqqty` | `decimal` | decimal |
| `availqty` | `decimal` | decimal |
| `nbdays` | `integer` | integer |
| `ad_qty_q` | `decimal` | Date/decimal - qty q |

## Appele par

- `nvo_of_launch` (_manufg)
- `w_launchorder_group_line` (_manufg)

## Appelle

- `relativedatetime`

