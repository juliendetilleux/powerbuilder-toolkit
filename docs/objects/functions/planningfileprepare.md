# planningfileprepare

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `boolean planningfileprepare(boolean with_wcplan_clear, boolean with_forecasts)`
- **Description**: Prepare le fichier de planification

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `with_wcplan_clear` | `boolean` | boolean |
| `with_forecasts` | `boolean` | boolean |

## Appele par

- `mini_plan_pur` (_planning)
- `mini_planning` (_planning)
- `nvo_planifiedtask` (_system)
- `w_planning` (_planning)
- `w_planning_expimp` (_planning)
- `w_planning_extrnl` (_planning)
- `w_planning_quick` (_planning)
- `w_replanning_quick` (_planning)

## Appelle

- `checkglobalcalendars`
- `checkwccalendar`
- `frozecurrentmfg`
- `relativedatetime`
- `updateforcasts`

