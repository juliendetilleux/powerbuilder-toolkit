# nv_flxsp_bar

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| is_key | string |
| is_title | string |
| is_icon | string |
| is_tooltip | string |
| is_tag | string |
| drawing_param | NV_FLXSP_BAR_DP |
| ib_special | boolean |
| ib_visible | boolean |
| ib_expanded | boolean |
| ib_enabled | boolean |
| ib_hovered | boolean |
| ib_down | boolean |
| ios_rect_bar | OS_FLXAPI_RECT |
| ios_rect_title_zone | OS_FLXAPI_RECT |
| ios_rect_title_text | OS_FLXAPI_RECT |
| ios_rect_title_icon | OS_FLXAPI_RECT |
| ios_rect_chevron | OS_FLXAPI_RECT |
| ids_hIcon | datastore |
| iuo_container | UO_FLXSP_CONTAINER |
| inv_item | NV_FLXSP_ITEM[] |
| API | NV_FLXAPI_EXTERNAL |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_add_item_color(string as_key, string as_tag, string as_text, ...) : nv_flxsp_item_color | Public | Fonction publique |
| of_add_item_hyperlink(string as_key, string as_tag, string as_text, ...) : nv_flxsp_item_hyperlink | Public | Fonction publique |
| of_add_item_line(string as_key, string as_tag, string as_before) : nv_flxsp_item_line | Public | Fonction publique |
| of_add_item_object(string as_key, string as_tag, string as_text, ...) : nv_flxsp_item_object | Public | Fonction publique |
| of_add_item_text(string as_key, string as_tag, string as_text, string as_before) : nv_flxsp_item_text | Public | Fonction publique |
| of_add_item_choice(string as_key, string as_tag, string as_text, ...) : nv_flxsp_item_choice | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_draw | Evenement personnalise |
| ue_shift | Evenement personnalise |
| ue_arrange | Evenement personnalise |
