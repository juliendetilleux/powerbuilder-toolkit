# createnewplanedorder

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `decimal createnewplanedorder(string item, decimal missingqty, decimal currstock, decimal curritsecur, datetime reqdate, decimal ityield, string itpol, decimal itpsize, decimal itpinsize, integer itpinnb, integer itpnbdays, integer itleadtime, integer itavailtime, string ittyp, integer nbtour)`
- **Description**: Cree un nouvel ordre planifie

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `item` | `string` | string |
| `missingqty` | `decimal` | decimal |
| `currstock` | `decimal` | decimal |
| `curritsecur` | `decimal` | decimal |
| `reqdate` | `datetime` | datetime |
| `ityield` | `decimal` | decimal |
| `itpol` | `string` | string |
| `itpsize` | `decimal` | decimal |
| `itpinsize` | `decimal` | decimal |
| `itpinnb` | `integer` | integer |
| `itpnbdays` | `integer` | integer |
| `itleadtime` | `integer` | integer |
| `itavailtime` | `integer` | integer |
| `ittyp` | `string` | string |
| `nbtour` | `integer` | integer |

## Appele par

- `mini_plan_mfg` (_planning)
- `mini_plan_pur` (_planning)
- `mpscalculate_import` (_planning)
- `mpscalculate_manualop` (_planning)
- `mpscalculate_real` (_planning)
- `mrpcalculate_import` (_planning)
- `mrpcalculate_real` (_planning)
- `nvo_plan` (_planning)

## Appelle

- `bookworkcenter`
- `daystimeafter`
- `relativedatetime`

