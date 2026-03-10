# nv_flxsp_struct

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| inv_bar | nv_flxsp_bar[] |
| iuo_container | uo_flxsp_container |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_get_bar(string as_key) : nv_flxsp_bar | Public | Fonction publique |
| of_get_item(string as_bar_key, string as_item_key) : nv_flxsp_item | Public | Fonction publique |
| of_add_bar(string as_key, string as_title, string as_icon, ...) : nv_flxsp_bar | Public | Fonction publique |
| of_get_things_at_pointer(integer ai_x, integer ai_y, nv_flxsp_bar anv_bar, nv_flxsp_item anv_item) : void (subroutine) | Public | Fonction publique |
| of_reset_down() : void (subroutine) | Public | Fonction publique |
| of_reset_hover() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
