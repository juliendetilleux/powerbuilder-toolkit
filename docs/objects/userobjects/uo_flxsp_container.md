# uo_flxsp_container

- **Type**: User Object (Visuel)
- **Ancetre**: treeview
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| inv_tooltip | NV_FLXAPI_TOOLTIP |
| is_last_tooltip | string |
| API | NV_FLXAPI_EXTERNAL |
| inv_draw | NV_FLXSP_DRAW |
| inv_struct | NV_FLXSP_STRUCT |
| inv_param | NV_FLXSP_PARAM |
| drawing_param | UO_FLXSP_CONTAINER_DP |
| iuo_vscrollbar | uo_flxapi_vscrollbar |
| iw_parent_window | window |
| ib_mouse_over | boolean |
| il_xpos | long |
| il_ypos | long |
| ib_down | boolean |
| ib_resizing | boolean |
| ib_visible | boolean |
| ib_redrawing | boolean |
| il_hCursor_hand | long |
| il_hCursor_arrow | long |
| CURSOR_MODE_ARROW | integer (Constant) |
| CURSOR_MODE_HAND | integer (Constant) |
| ii_mode | integer |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| resize(integer w, integer h) : integer | Public | Fonction publique |
| of_reinit_resizing() : void (subroutine) | Public | Fonction publique |
| of_dummy_scroll() : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_paint | Evenement personnalise |
| ue_draw | Evenement personnalise |
| ue_mousemove | Evenement personnalise |
| ue_mouseleave | Evenement personnalise |
| ue_lbuttondown | Evenement personnalise |
| ue_lbuttonup | Evenement personnalise |
| ue_update_scroll | Evenement personnalise |
| ue_vscroll | Evenement personnalise |
| ue_ncpaint | Evenement personnalise |
| ue_lbuttondblclk | Evenement personnalise |
| ue_hide | Evenement personnalise |
