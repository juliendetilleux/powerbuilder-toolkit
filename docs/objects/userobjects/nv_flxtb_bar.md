# nv_flxtb_bar

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| is_key | string |
| is_tag | string |
| ib_visible | boolean |
| ios_rect_bar | OS_FLXAPI_RECT |
| ios_rect_active | OS_FLXAPI_RECT |
| ios_rect_chevron | OS_FLXAPI_RECT |
| iuo_parent | UO_FLXTB_CONTAINER |
| inv_item | NV_FLXTB_ITEM[] |
| API | NV_FLXAPI_EXTERNAL |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_add_item_sep(string as_key, string as_before) : nv_flxtb_item | Public | Fonction publique |
| of_add_item_btn(string as_key, menu am_menu, string as_text, ...) : nv_flxtb_item | Public | Fonction publique |
| of_shift(long al_xshift, long al_yshift) : void (subroutine) | Public | Fonction publique |
| of_arrange(nv_flxtb_param anv_param) : void (subroutine) | Public | Fonction publique |
| of_draw(nv_flxtb_param anv_param) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
