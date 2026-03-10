# createreplanorder

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `decimal createreplanorder(string item, double missingqty, string itpol, decimal itpsize, decimal itpinsize, integer itleadtime, string ittyp, integer nbtour)`
- **Description**: Cree un ordre de replanification

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `item` | `string` | string |
| `missingqty` | `double` | double |
| `itpol` | `string` | string |
| `itpsize` | `decimal` | decimal |
| `itpinsize` | `decimal` | decimal |
| `itleadtime` | `integer` | integer |
| `ittyp` | `string` | string |
| `nbtour` | `integer` | integer |

## Appele par

- `mini_plan_pur` (_planning)
- `mrp_consommables` (_planning)

## Appelle

- `relativedatetime`

