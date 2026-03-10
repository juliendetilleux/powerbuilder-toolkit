# nv_flxts_draw

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| il_hTabStripDC | long |
| il_hTabStripMemDC | long |
| il_hVTTabStripMemDC | long |
| il_hwnd | long |
| inv_struct | nv_flxts_struct |
| inv_param | nv_flxts_param |
| ib_initialized | boolean |
| API | NV_FLXAPI_EXTERNAL |
| il_bottom_most | long |
| ib_drawing | boolean |
| ios_rect_overflow_area | OS_FLXAPI_RECT |
| ios_rect_overflow_area_arabic | OS_FLXAPI_RECT |
| ios_rect_chevron | OS_FLXAPI_RECT |
| ios_rect_chevron_arabic | OS_FLXAPI_RECT |
| ios_rect_close_box | OS_FLXAPI_RECT |
| ios_rect_close_box_arabic | OS_FLXAPI_RECT |
| ios_rect_left_scroll_btn | OS_FLXAPI_RECT |
| ios_rect_left_scroll_btn_arabic | OS_FLXAPI_RECT |
| ios_rect_right_scroll_btn | OS_FLXAPI_RECT |
| ios_rect_right_scroll_btn_arabic | OS_FLXAPI_RECT |
| ib_close_box_hovered | boolean |
| ib_close_box_down | boolean |
| ib_chevron_hovered | boolean |
| ib_chevron_down | boolean |
| ib_left_scroll_btn_hovered | boolean |
| ib_left_scroll_btn_down | boolean |
| ib_left_scroll_btn_enabled | boolean |
| ib_right_scroll_btn_hovered | boolean |
| ib_right_scroll_btn_down | boolean |
| ib_right_scroll_btn_enabled | boolean |
| il_hCloseBox | long |
| il_hCloseBox_Hovered | long |
| il_hCloseBox_Down | long |
| il_hCloseBox_Disabled | long |
| il_scrolling | integer |
| il_forced_scrolling | integer |
| ib_forced_scrolling | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_draw_overflow_key_pixels(long ll_overflow_size, long ll_begin_first_outer_color, long ll_begin_first_inner_color, ...) : void (subroutine) | Public | Fonction publique |
| of_draw_overflow_memorize_pos(long ll_overflow_size, long ll_shift) : void (subroutine) | Public | Fonction publique |
| of_compute_rect() : void (subroutine) | Public | Fonction publique |
| of_draw_control(uo_flxts_container auo_container) : void (subroutine) | Public | Fonction publique |
| of_draw_overflow() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
