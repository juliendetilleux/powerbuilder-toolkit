# uo_flxreport_property_grid

- **Type**: User Object (Visuel)
- **Ancetre**: datawindow
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| iuo_container | UO_FLXREPORT_CONTAINER |
| ib_show_categories | boolean |
| ib_easy_display | boolean |
| ib_initialized | boolean |
| iuo_toolbar | UO_FLXTB_CONTAINER |
| is_collapsed_group | string[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_change_name_required(string as_old_name, string as_new_name) : boolean | Public | Fonction publique |
| scrolltorow(long r) : integer | Public | Fonction publique |
| of_autosize_dddw(datawindowchild adwc_dddw, string as_column) : void (subroutine) | Public | Fonction publique |
| of_populate_dddw(string as_column, string as_name[], string as_value[], boolean ab_ignore_last) : void (subroutine) | Public | Fonction publique |
| of_dont_save(string as_property) : void (subroutine) | Public | Fonction publique |
| of_menu_click(string as_event) : void (subroutine) | Public | Fonction publique |
| of_init() : void (subroutine) | Public | Fonction publique |
| of_populate_column(string as_dataobject) : void (subroutine) | Public | Fonction publique |
| of_populate_dddw_font_face() : void (subroutine) | Public | Fonction publique |
| of_retrieval_arguments(long al_row) : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_key | Evenement personnalise |
| ue_enter | Evenement personnalise |
