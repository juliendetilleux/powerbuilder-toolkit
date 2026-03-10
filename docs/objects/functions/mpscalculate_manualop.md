# mpscalculate_manualop

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `boolean mpscalculate_manualop(boolean ab_withworkcenter, integer ai_minlevel)`
- **Description**: Calcul MPS avec operations manuelles

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ab_withworkcenter` | `boolean` | Booleen - withworkcenter |
| `ai_minlevel` | `integer` | Entier - minlevel |

## Appele par

- `w_replanning_quick` (_planning)

## Appelle

- `bookworkcenter`
- `createnewplanedorder`
- `lookmfgpost`
- `relativedatetime`

