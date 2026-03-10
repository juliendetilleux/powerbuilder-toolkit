# nv_flxreport_undoredo

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| inv_command | NV_FLXREPORT_UNDOREDO_CMD[] |
| il_top | long |
| il_current | long |
| iuo_parent | UO_FLXREPORT_CONTAINER |
| inv_cmd_property | NV_FLXREPORT_UNDOREDO_CMD_PROPERTY |
| inv_cmd_delete | NV_FLXREPORT_UNDOREDO_CMD_DELETE |
| inv_cmd_new | NV_FLXREPORT_UNDOREDO_CMD_NEW |
| inv_cmd_frontback | NV_FLXREPORT_UNDOREDO_CMD_FRONTBACK |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_can_redone() : boolean | Public | Fonction publique |
| of_can_undone() : boolean | Public | Fonction publique |
| of_add_cmd() : void (subroutine) | Public | Fonction publique |
| of_restore_alerts(long al_row) : void (subroutine) | Public | Fonction publique |
| of_redo() : void (subroutine) | Public | Fonction publique |
| of_undo() : void (subroutine) | Public | Fonction publique |
| of_reset() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
