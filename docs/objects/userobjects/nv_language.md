# nv_language

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _langue
- **Description**: Objet de gestion multilingue

## Variables d'instance

| Variable | Type |
|----------|------|
| is_title | String |
| go | DragObject[] |
| ids_lang | nv_datastore |
| il_max_object | Long |
| iw_parent | w_window |
| is_lang | String |
| ib_init | Boolean |
| iu_language_view | u_language_view |
| iu_language_auto | u_language_auto |
| iu_language_window | u_language_window |
| iu_language_lang | u_language_lang[] |
| ib_first_design | Boolean |
| uo | UserObject[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| SetParent(long hWndChild, long hWndNewParent) : long | Public | Fonction publique |
| of_set_language() : integer | Public | Fonction publique |
| of_translate(string as_text, string as_lang) : string | Public | Fonction publique |
| of_auto_translate() : integer | Public | Fonction publique |
| of_set_current_lang(string as_lang) : integer | Public | Fonction publique |
| of_set_design(dragobject ado_object, string as_class, graphicobject ago_parent) : integer | Public | Fonction publique |
| of_set_design(window aw_window) : integer | Public | Fonction publique |
| of_show_translate(boolean ab_show) : integer | Public | Fonction publique |
| of_translate_message(string as_text, string as_lang) : string | Public | Fonction publique |
| of_set_translate(str_design_language astr_design_language) : integer | Public | Fonction publique |
| of_set_language(windowobject awo_object, string as_class) : integer | Public | Fonction publique |
| of_get_data_language(string as_lang, window aw_parent) : integer | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
