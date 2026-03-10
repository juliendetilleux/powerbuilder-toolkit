# nv_flxts_item

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport - gestion des articles

## Variables d'instance

| Variable | Type |
|----------|------|
| is_key | string |
| is_tag | string |
| is_text | string |
| is_icon | string |
| ib_enabled | boolean |
| ib_visible | boolean |
| is_tooltip | string |
| ib_hovered | boolean |
| ib_down | boolean |
| ib_selected | boolean |
| ib_locked | boolean |
| ido_object | dragobject |
| il_initial_handle | long |
| ios_rect_item | OS_FLXAPI_RECT |
| ios_rect_item_arabic | OS_FLXAPI_RECT |
| ios_rect_icon | OS_FLXAPI_RECT |
| ios_rect_icon_arabic | OS_FLXAPI_RECT |
| ios_rect_text | OS_FLXAPI_RECT |
| ios_rect_text_arabic | OS_FLXAPI_RECT |
| il_hIcon | long[] |
| il_last_background_color | long |
| il_bck_gradient_one | long |
| il_bck_gradient_two | long |
| API | NV_FLXAPI_EXTERNAL |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_draw_background_excel(nv_flxts_param anv_param) : void (subroutine) | Public | Fonction publique |
| of_draw_background_round_excel(nv_flxts_param anv_param) : void (subroutine) | Public | Fonction publique |
| of_draw_background_tool(nv_flxts_param anv_param) : void (subroutine) | Public | Fonction publique |
| of_draw_background_document(nv_flxts_param anv_param) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_arrange | Evenement personnalise |
| ue_draw | Evenement personnalise |
| ue_shift | Evenement personnalise |
