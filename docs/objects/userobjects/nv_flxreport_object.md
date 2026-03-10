# nv_flxreport_object

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_flxreport_ancestor
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| il_initial_x | long |
| il_initial_y | long |
| il_initial_width | long |
| il_initial_height | long |
| il_min_initial_x | long |
| il_min_initial_y | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_get_color(long al_color) : long | Public | Fonction publique |
| of_property_extract_describe(string as_name, datastore ads_data, string as_describe) : string | Public | Fonction publique |
| of_draw_selectors(long al_hdc, os_flxapi_rect aos_rect) : void (subroutine) | Public | Fonction publique |
| of_draw_border(integer ai_border, long al_hdc, os_flxapi_rect aos_rect) : void (subroutine) | Public | Fonction publique |
| of_band_to_next() : void (subroutine) | Public | Fonction publique |
| of_band_to_previous() : void (subroutine) | Public | Fonction publique |
| of_property_set_value(string as_name, string as_value) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_arrange | Evenement personnalise |
