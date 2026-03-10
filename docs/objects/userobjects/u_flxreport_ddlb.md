# u_flxreport_ddlb

- **Type**: User Object (Visuel)
- **Ancetre**: dropdownlistbox
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| ia_data | any[] |
| ii_last_index | integer |
| ib_autosize_posted | boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_find_data(any aa_data) : integer | Public | Fonction publique |
| dirlist(string s, unsignedinteger f) : boolean | Public | Fonction publique |
| of_get_data() : any | Public | Fonction publique |
| of_get_data(integer ai_index) : any | Public | Fonction publique |
| of_reset() : integer | Public | Fonction publique |
| of_add_item(string as_text, any aa_data) : integer | Public | Fonction publique |
| of_memorize_index(integer ai_index) : void (subroutine) | Public | Fonction publique |
| of_flash() : void (subroutine) | Public | Fonction publique |
| of_select_item_data(any aa_data) : void (subroutine) | Public | Fonction publique |
| of_sort(boolean ab_ascending) : void (subroutine) | Public | Fonction publique |
| of_set_dropped_width(integer ai_width) : void (subroutine) | Public | Fonction publique |
| of_auto_adjust_dropped_with() : void (subroutine) | Public | Fonction publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_changed | Evenement personnalise |
