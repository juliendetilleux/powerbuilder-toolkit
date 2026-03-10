# nv_flxtb_struct

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| inv_bar | nv_flxtb_bar[] |
| iuo_parent | uo_flxtb_container |
| iw_mdi | window |
| is_disabled_suffix | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_get_item_at_pointer(integer ai_x, integer ai_y) : nv_flxtb_item | Public | Fonction publique |
| of_is_visible(string as_key) : boolean | Public | Fonction publique |
| of_add_bar(string as_key, string as_before) : nv_flxtb_bar | Public | Fonction publique |
| of_add_bar_from_menu(menu am_menu, string as_key[]) : nv_flxtb_bar | Public | Fonction publique |
| of_get_bar_at_pointer(integer ai_x, integer ai_y) : nv_flxtb_bar | Public | Fonction publique |
| of_add_bar_from_menus(menu am_menu[], string as_key[]) : void (subroutine) | Public | Fonction publique |
| of_remove_bar(string as_key) : void (subroutine) | Public | Fonction publique |
| of_resest_item(string as_property) : void (subroutine) | Public | Fonction publique |
| of_remove_bar(string as_key[]) : void (subroutine) | Public | Fonction publique |
| of_set_visible(string as_key, boolean ab_flag) : void (subroutine) | Public | Fonction publique |
| of_set_visible(string as_key[], boolean ab_flag) : void (subroutine) | Public | Fonction publique |
| of_hide_all() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
