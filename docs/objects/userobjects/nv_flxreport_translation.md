# nv_flxreport_translation

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _FlxReport
- **Description**: Objet d'integration FlexReport

## Variables d'instance

| Variable | Type |
|----------|------|
| IHM_OK | string |
| IHM_CANCEL | string |
| IHM_YES | string |
| IHM_NO | string |
| IHM_RETRY | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| MsgBox(long hwnd, int icon, string dialogtitle, ...) : int | Public | Fonction publique |
| of_messagebox_error(string as_message, string as_value[]) : integer | Public | Fonction publique |
| of_messagebox_sql(integer ai_populateerror, string as_sqlerrtext) : integer | Public | Fonction publique |
| of_messagebox_question_yesno(string as_message, string as_value[], integer ai_default) : integer | Public | Fonction publique |
| of_messagebox_question_yesnocancel(string as_message, string as_value[], integer ai_default) : integer | Public | Fonction publique |
| of_format_message(string as_message, string as_value[]) : string | Public | Fonction publique |
| of_messagebox_unexpected(integer ai_populateerror) : integer | Public | Fonction publique |
| of_message_advanced(integer ai_icon, string as_title, string as_message, ...) : integer | Public | Fonction publique |
| of_messagebox_alert(string as_message) : integer | Public | Fonction publique |
| of_messagebox_error(string as_message) : integer | Public | Fonction publique |
| of_messagebox_info(string as_message) : integer | Public | Fonction publique |
| of_messagebox_question_yesno(string as_message, integer ai_default) : integer | Public | Fonction publique |
| of_messagebox_question_yesnocancel(string as_message, integer ai_default) : integer | Public | Fonction publique |
| of_messagebox_info(string as_message, string as_value[]) : integer | Public | Fonction publique |
| of_messagebox_alert(string as_message, string as_value[]) : integer | Public | Fonction publique |
| of_extract_infos(string as_data, string as_title, string as_message, ...) : void (subroutine) | Public | Fonction publique |
| of_translate_french() : void (subroutine) | Public | Fonction publique |
| of_translate_english() : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
