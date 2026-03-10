# nv_flxri_struct

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
| is_initial_syntax | string |
| is_initial_block | string[] |
| inv_datawindow | NV_FLXRI_DATAWINDOW |
| inv_background | NV_FLXRI_BAND |
| inv_foreground | NV_FLXRI_BAND |
| inv_band | NV_FLXRI_BAND[] |
| inv_object | NV_FLXRI_OBJECT[] |
| API | NV_FLXAPI_EXTERNAL |
| ib_loading | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_generate_final_syntax() : string | Public | Fonction publique |
| of_from_pixels(string as_property, long al_pixels) : decimal | Public | Fonction publique |
| of_to_pixels(string as_property, decimal adec_units) : long | Public | Fonction publique |
| of_like(string as_source, string as_motif) : boolean | Public | Fonction publique |
| of_find_bloc(string as_type, string as_name) : string | Public | Fonction publique |
| of_find_bloc(string as_motif) : string | Public | Fonction publique |
| of_load_report_quickly(string as_syntax) : void (subroutine) | Public | Fonction publique |
| of_load_report(string as_syntax) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
