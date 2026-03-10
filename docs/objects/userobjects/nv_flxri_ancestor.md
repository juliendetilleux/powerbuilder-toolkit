# nv_flxri_ancestor

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| ids_property | datastore |
| ios_rect_global | OS_FLXAPI_RECT |
| is_name | string |
| is_text | string |
| ib_selected | boolean |
| API | NV_FLXAPI_EXTERNAL |
| inv_struct | NV_FLXRI_STRUCT |
| is_initial_block | string |
| ii_processing | integer |
| is_final_syntax | string |
| inv_band | NV_FLXRI_BAND |
| il_property_row | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_parse_extract(string as_property[], string as_value[], string as_what, string as_default) : string | Public | Fonction publique |
| of_final_syntax(datastore ads_initial) : string | Public | Fonction publique |
| of_property_get_expression(string as_name) : string | Public | Fonction publique |
| of_property_get_value(string as_name) : string | Public | Fonction publique |
| of_properties_get_final() : string | Public | Fonction publique |
| of_property_get_final(string as_name) : string | Public | Fonction publique |
| of_property_extract_describe(string as_name, datastore ads_data, string as_describe) : string | Public | Fonction publique |
| of_parse(string as_source, string as_property[], string as_value[]) : void (subroutine) | Public | Fonction publique |
| of_speed_up(string as_name, string as_value) : void (subroutine) | Public | Fonction publique |
| of_property_add(string as_name, string as_kind, string as_output, ...) : void (subroutine) | Public | Fonction publique |
| of_property_add(string as_name, string as_kind, string as_output, ...) : void (subroutine) | Public | Fonction publique |
| of_property_add(string as_name, string as_kind, string as_output, ...) : void (subroutine) | Public | Fonction publique |
| of_property_add(string as_name, string as_kind, string as_output, ...) : void (subroutine) | Public | Fonction publique |
| of_property_set_value(string as_name, string as_value) : void (subroutine) | Public | Fonction publique |
| of_property_set_expression(string as_name, string as_expression) : void (subroutine) | Public | Fonction publique |
| of_property_extract(string as_name, datastore ads_data, string as_describe) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_load_property | Evenement personnalise |
| ue_declare_properties | Evenement personnalise |
