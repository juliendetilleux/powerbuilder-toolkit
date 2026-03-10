# uo_flxtb_container

- **Type**: User Object (Visuel)
- **Ancetre**: userobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| API | NV_FLXAPI_EXTERNAL |
| iw_parent | window |
| ib_line_up | boolean |
| inv_draw | nv_flxtb_draw |
| inv_tooltip | nv_flxapi_tooltip |
| is_last_tooltip | string |
| inv_last_item | nv_flxtb_item |
| il_mem_height | long |
| il_mem_absolute | long |
| ll_previous_pos | long |
| ib_mouse_over | boolean |
| il_xpos | long |
| il_ypos | long |
| ib_down | boolean |
| il_hCursor_hand | long |
| il_hCursor_arrow | long |
| CURSOR_MODE_ARROW | integer (Constant) |
| CURSOR_MODE_SIZENS | integer (Constant) |
| CURSOR_MODE_HAND | integer (Constant) |
| ii_mode | integer |
| ALLOW_CHANGE | integer (Constant) |
| PREVENT_CHANGE | integer (Constant) |
| inv_struct | nv_flxtb_struct |
| inv_param | nv_flxtb_param |
| ib_dont_redraw | boolean |
| ib_locked | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| move(integer ax, integer ay) : integer | Public | Fonction publique |
| resize(integer w, integer h) : integer | Public | Fonction publique |
| of_set_owner(window aw_owner) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_mouseleave | Evenement personnalise |
| ue_draw | Evenement personnalise |
| ue_lbuttondown | Evenement personnalise |
| ue_lbuttonup | Evenement personnalise |
| ue_mousemove | Evenement personnalise |
| ue_paint | Evenement personnalise |
| ue_ncpaint | Evenement personnalise |
