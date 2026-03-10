# nv_flxreport_struct

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| integer | constant |
| integer | constant |
| integer | constant |
| integer | constant |
| il_saveinfo_id_customization | long |
| iw_parent | window |
| is_initial_syntax | string |
| is_initial_block | string[] |
| inv_datawindow | NV_FLXREPORT_DATAWINDOW |
| inv_background | NV_FLXREPORT_BAND |
| inv_foreground | NV_FLXREPORT_BAND |
| inv_band | NV_FLXREPORT_BAND[] |
| inv_object | NV_FLXREPORT_OBJECT[] |
| inv_grid_column | NV_FLXREPORT_GRID_COLUMN[] |
| iuo_parent | UO_FLXREPORT_CONTAINER |
| inv_selected | NV_FLXREPORT_ANCESTOR[] |
| API | NV_FLXAPI_EXTERNAL |
| ib_reload_property_grid | boolean |
| ib_need_to_save | boolean |
| ib_loading | boolean |
| ib_need_to_validate | boolean |
| inv_undo_redo | NV_FLXREPORT_UNDOREDO |
| ib_undo_redo_locked | boolean |
| inv_last_bitmap | NV_FLXREPORT_OBJECT_BITMAP |
| inv_last_button | NV_FLXREPORT_OBJECT_BUTTON |
| inv_last_column | NV_FLXREPORT_OBJECT_COLUMN |
| inv_last_compute | NV_FLXREPORT_OBJECT_COMPUTE |
| inv_last_ellipse | NV_FLXREPORT_OBJECT_ELLIPSE |
| inv_last_groupbox | NV_FLXREPORT_OBJECT_GROUPBOX |
| inv_last_line | NV_FLXREPORT_OBJECT_LINE |
| inv_last_rectangle | NV_FLXREPORT_OBJECT_RECTANGLE |
| inv_last_report | NV_FLXREPORT_OBJECT_REPORT |
| inv_last_roundrectangle | NV_FLXREPORT_OBJECT_ROUNDRECTANGLE |
| inv_last_text | NV_FLXREPORT_OBJECT_TEXT |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_like(string as_source, string as_pattern) : boolean | Public | Fonction publique |
| of_find_bloc(string as_type, string as_name) : string | Public | Fonction publique |
| of_get_copied_count() : integer | Public | Fonction publique |
| of_find_bloc(string as_motif) : string | Public | Fonction publique |
| of_get_item_at_pointer(integer ai_x, integer ai_y) : nv_flxreport_ancestor | Public | Fonction publique |
| of_generate_model_syntax(string as_what, string as_property) : string | Public | Fonction publique |
| of_from_pixels(string as_property, long al_pixels) : decimal | Public | Fonction publique |
| of_to_pixels(string as_property, decimal adec_units) : long | Public | Fonction publique |
| of_get_next_valid_name(string as_mask) : string | Public | Fonction publique |
| of_warning_is_exp_correct(datastore ads_check, string as_control, string as_property, string as_expression) : boolean | Public | Fonction publique |
| of_generate_final_syntax() : string | Public | Fonction publique |
| of_get_band_at_pointer(integer ai_x, integer ai_y) : nv_flxreport_band | Public | Fonction publique |
| of_is_valid_name(string as_name) : boolean | Public | Fonction publique |
| of_compute_initial_infos() : void (subroutine) | Public | Fonction publique |
| of_selection_bringtotop() : void (subroutine) | Public | Fonction publique |
| of_selection_sendtoback() : void (subroutine) | Public | Fonction publique |
| of_select_datawindow() : void (subroutine) | Public | Fonction publique |
| of_select_band(nv_flxreport_band anv_band) : void (subroutine) | Public | Fonction publique |
| of_select_object(nv_flxreport_object anv_object[]) : void (subroutine) | Public | Fonction publique |
| of_warning_check() : void (subroutine) | Public | Fonction publique |
| of_save_property_grid() : void (subroutine) | Public | Fonction publique |
| of_warning_correct(long al_row) : void (subroutine) | Public | Fonction publique |
| of_modify_expression(string as_property, string as_expression, string as_kind, boolean ab_undo_redo_locked) : void (subroutine) | Public | Fonction publique |
| of_save_customization() : void (subroutine) | Public | Fonction publique |
| of_load_property_grid() : void (subroutine) | Public | Fonction publique |
| of_reset() : void (subroutine) | Public | Fonction publique |
| of_selection_align(string as_alignment) : void (subroutine) | Public | Fonction publique |
| of_selection_move(integer ai_x_shift, integer ai_y_shift) : void (subroutine) | Public | Fonction publique |
| of_new_bitmap(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_button(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_ellipse(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_groupbox(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_line(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_rectangle(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_report(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_roundrectangle(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_load_report(string as_syntax, boolean ab_independent) : void (subroutine) | Public | Fonction publique |
| of_grid_column_init() : void (subroutine) | Public | Fonction publique |
| of_grid_column_auto_adjust() : void (subroutine) | Public | Fonction publique |
| of_new_column(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_compute(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_new_text(nv_flxreport_band anv_band, long al_x, long al_y) : void (subroutine) | Public | Fonction publique |
| of_selection_copy() : void (subroutine) | Public | Fonction publique |
| of_selection_paste() : void (subroutine) | Public | Fonction publique |
| of_selection_space(string as_space) : void (subroutine) | Public | Fonction publique |
| of_selection_delete() : void (subroutine) | Public | Fonction publique |
| of_selection_resize(integer ai_width_shift, integer ai_height_shift) : void (subroutine) | Public | Fonction publique |
| of_selection_resize(string as_resize) : void (subroutine) | Public | Fonction publique |
| of_menu_click(string as_event) : void (subroutine) | Public | Fonction publique |
| of_grid_column_feed() : void (subroutine) | Public | Fonction publique |
| of_modify_sub_report(boolean ab_create) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
