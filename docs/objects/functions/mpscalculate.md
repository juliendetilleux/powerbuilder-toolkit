# mpscalculate

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `boolean mpscalculate(boolean ab_withworkcenter, integer ai_minlevel)`
- **Description**: Calcul MPS (Master Production Schedule)

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ab_withworkcenter` | `boolean` | Booleen - withworkcenter |
| `ai_minlevel` | `integer` | Entier - minlevel |

## Appele par

- `nvo_planifiedtask` (_system)
- `w_planning` (_planning)
- `w_planning_extrnl` (_planning)
- `w_planning_quick` (_planning)
- `w_replanning_quick` (_planning)

## Appelle

- `gf_get_paramprog`
- `mpscalculate_real`

