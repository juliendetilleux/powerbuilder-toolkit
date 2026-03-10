# mpscalculate_import

- **Module**: `_planning` (Planification et ordonnancement)
- **Signature**: `boolean mpscalculate_import(boolean ab_withworkcenter, integer ai_minlevel)`
- **Description**: Calcul MPS a partir d'un import

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ab_withworkcenter` | `boolean` | Booleen - withworkcenter |
| `ai_minlevel` | `integer` | Entier - minlevel |

## Appele par

- `nvo_planifiedtask` (_system)
- `w_planning_expimp` (_planning)

## Appelle

- `bookworkcenter`
- `createnewplanedorder`
- `lookmfgpost`
- `relativedatetime`

