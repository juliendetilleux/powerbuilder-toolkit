# mpscalculate_real

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `boolean mpscalculate_real(boolean ab_withworkcenter, integer ai_minlevel)`
- **Description**: Calcul MPS reel (Master Production Schedule)

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ab_withworkcenter` | `boolean` | Booleen - withworkcenter |
| `ai_minlevel` | `integer` | Entier - minlevel |

## Appele par

- `mpscalculate` (_planning)
- `nvo_planifiedtask` (_system)
- `w_planning_expimp` (_planning)

## Appelle

- `bookworkcenter`
- `createnewplanedorder`
- `lookmfgpost`
- `relativedatetime`

