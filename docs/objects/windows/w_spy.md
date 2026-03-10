# w_spy

- **Type**: Window
- **Ancetre**: window
- **Module**: _XDWSpy
- **Description**: Spy (DataWindow Spy)

## Variables d'instance

| Variable | Type |
|----------|------|
| PARM_NAME__DW | string (constant) |
| PARM_NAME__ROW | string (constant) |
| PARM_NAME__COL | string (constant) |
| il_row | long |
| il_row_count | long |
| il_filtered_count | long |
| il_deleted_count | long |
| is_spy_win_title | string |
| is_field_name | string |
| is_field_label | string |
| is_sort_expr | string |
| is_prev_sort_expr_of_dw_display | string |
| is_filter_expr | string |
| is_updated_fields | string |
| is_data_source_stored_proc | string |
| is_data_source_sql_select | string |
| ib_clicked_on_row | boolean |
| ib_clicked_on_field | boolean |
| ib_field_has_dddw | boolean |
| ib_dw_has_retrieval_args | boolean |
| ib_dw_has_rows | boolean |
| ib_invisible_fields_exist | boolean |
| ib_window_menu_exists | boolean |
| im | Menu |
| iw | Window |
| idw | DataWindow |
| ist_prev_clicked | StaticText |
| inv_util | n_dwspy_util |
| COLOR__BLACK | long (constant) |
| COLOR__RED | long (constant) |
| COLOR__YELLOW | long (constant) |
| COLOR__GREY | long (constant) |
| COLOR__BLUE | long (constant) |
| COLOR__BROWN | long (constant) |
| COLOR__FOR_NEXT_INSTANCES | long (constant) |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_get_updatable_frag(string as_field_name) | public | Retourne updatable_frag |
| wf_format_sql(ref string rs_sql) | public | Formatage |
| wf_get_field_type(string as_field_name) | public | Retourne field_type |
| wf_get_field_path() | public | Retourne field_path |
| wf_get_code_table_frag() | public | Retourne code_table_frag |
| wf_string_to_any(string as_value, string as_type) | public | Fonction wf_string_to_any |
| wf_show_row_status() | public | Affichage |
| wf_init_instance_vars() | public | Initialisation |
| wf_show_dddw_data() | public | Affichage |
| wf_display_in_static_text(string as_msg) | public | Affichage |
| wf_display_dw() | public | Affichage |
| wf_ornament_as_subheader(string as_orig_string) | public | Retourne wf_ornament_as_subheader |
| wf_sort_dw_display_by_column(string as_col_name) | public | Applique un tri |
| wf_dw_is_external() | public | Verifie wf_dw_is_external |
| wf_show_window_info() | public | Affichage |
| wf_show_data_in_buffer(dwbuffer a_buffer) | public | Affichage |
| wf_invisible_fields_exist(datawindow adw) | public | Verifie wf_invisible_fields_exist |
| wf_get_computed_fields(datawindow adw, ref string rs_computed_field_names_arr[], ref integer ri_computed_fields_qty) | public | Retourne computed_fields |
| wf_init_next_instances() | public | Initialisation |
| wf_show_size_and_coordinates(datawindow adw) | public | Affichage |
| wf_disable_static_text(statictext ast_to_disable, string as_text) | public | Desactivation |
| wf_property_defined(string as_property_value) | public | Verifie wf_property_defined |
| wf_init_visual_appearance() | public | Initialisation |
| wf_get_inheritance_chain(graphicobject ago) | public | Retourne inheritance_chain |
| wf_show_classes_hierarchy() | public | Affichage |
| wf_show_menu() | public | Affichage |
| wf_static_text_clicked(statictext ast_clicked) | public | Traitement wf_static_text_clicked |
| wf_get_retrieval_args_frag(powerobject apo) | public | Retourne retrieval_args_frag |
| wf_show_data_src() | public | Affichage |
| wf_get_data_source_of_dddw_frag(datawindowchild adwc, string as_dddw_dataobject) | public | Retourne data_source_of_dddw_frag |
| wf_get_dddw_frag(string as_val) | public | Retourne dddw_frag |
| wf_show_field_info() | public | Affichage |
| wf_get_field_status_as_string(string as_field_name) | public | Retourne field_status_as_string |
| wf_show_invisible_fields() | public | Affichage |
| wf_get_val_frag(string as_field_name) | public | Retourne val_frag |
| wf_get_field_info(string as_field_name) | public | Retourne field_info |
| wf_get_invisible_computed_fields_frag() | public | Retourne invisible_computed_fields_frag |
| wf_get_updated_fields() | public | Retourne updated_fields |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
| doubleclicked | Double-clic sur la fenetre |
