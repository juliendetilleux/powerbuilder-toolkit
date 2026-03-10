# nv_flxts_struct

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| inv_item | nv_flxts_item[] |
| iuo_parent | uo_flxts_container |
| API | nv_flxapi_external |
| ib_waiting | boolean |
| ido_waiting | dragobject |
| il_waiting_initial_handle | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_find_item(string as_find_type) : nv_flxts_item | Public | Fonction publique |
| of_add_item(string as_key, string as_tag, string as_text, ...) : nv_flxts_item | Public | Fonction publique |
| of_has_hovered() : boolean | Public | Fonction publique |
| of_get_item_at_pointer(integer ai_x, integer ai_y) : nv_flxts_item | Public | Fonction publique |
| of_find_item(string as_find_type, string as_key) : nv_flxts_item | Public | Fonction publique |
| of_select_item(string as_key) : integer | Public | Fonction publique |
| of_remove_item(string as_key) : void (subroutine) | Public | Fonction publique |
| of_hover_item(nv_flxts_item anv_item) : void (subroutine) | Public | Fonction publique |
| of_reset_down() : void (subroutine) | Public | Fonction publique |
| of_reset_hover() : void (subroutine) | Public | Fonction publique |
| of_select_item(nv_flxts_item anv_item) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
