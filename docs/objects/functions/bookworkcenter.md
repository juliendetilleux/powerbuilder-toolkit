# bookworkcenter

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `datetime bookworkcenter(long orderno, string item, decimal qty, datetime duedate, integer nbtour, string routtype, datetime origin_reldat)`
- **Description**: Reserve un centre de charge

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `orderno` | `long` | long |
| `item` | `string` | string |
| `qty` | `decimal` | decimal |
| `duedate` | `datetime` | datetime |
| `nbtour` | `integer` | integer |
| `routtype` | `string` | string |
| `origin_reldat` | `datetime` | datetime |

## Appele par

- `createnewplanedorder` (_planning)
- `mini_plan_mfg` (_planning)
- `mpscalculate_import` (_planning)
- `mpscalculate_manualop` (_planning)
- `mpscalculate_real` (_planning)
- `nvo_plan` (_planning)
- `replanningfileprepare` (_planning)

## Appelle

- `daystimeafter`
- `loadroutitemdata`
- `relativedatetime`
- `savemaclabhours`

