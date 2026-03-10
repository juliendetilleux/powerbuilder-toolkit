# uo_flxts_container

- **Type**: User Object (Visuel)
- **Ancetre**: userobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| inv_tooltip | NV_FLXAPI_TOOLTIP |
| is_last_tooltip | string |
| API | NV_FLXAPI_EXTERNAL |
| inv_draw | NV_FLXTS_DRAW |
| inv_struct | NV_FLXTS_STRUCT |
| inv_param | NV_FLXTS_PARAM |
| ib_mouse_over | boolean |
| il_xpos | long |
| il_ypos | long |
| ib_down | boolean |
| il_hCursor_hand | long |
| il_hCursor_arrow | long |
| CURSOR_MODE_ARROW | integer (Constant) |
| CURSOR_MODE_HAND | integer (Constant) |
| ii_mode | integer |
| itab_linked | tab |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| resize(integer w, integer h) : integer | Public | Fonction publique |
| of_apply_background(windowobject awo_object[], long al_color) : void (subroutine) | Public | Fonction publique |
| of_refresh_bind() : void (subroutine) | Public | Fonction publique |
| of_bind(tab tabcontrol) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_mouseleave | Evenement personnalise |
| ue_draw | Evenement personnalise |
| ue_paint | Evenement personnalise |
| ue_mousemove | Evenement personnalise |
| ue_lbuttondown | Evenement personnalise |
| ue_lbuttonup | Evenement personnalise |
| ue_chevron_clicked | Evenement personnalise |
| ue_key | Evenement personnalise |
