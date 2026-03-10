# n_enable

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _langue
- **Description**: Objet de gestion multilingue

## Variables d'instance

| Variable | Type |
|----------|------|
| ci_mode_runtime | Integer |
| ids_translate | nv_datastore |
| il_max_translate | Long |
| is_lang | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| translate_untranslated(powerobject apo_object) : integer | Public | Fonction publique |
| translate(powerobject apo_object, string as_class) : integer | Public | Fonction publique |
| translate(powerobject apo_object) : integer | Public | Fonction publique |
| setlanguage(string as_code) : integer | Public | Fonction publique |
| translate(string as_text, string as_context) : string | Public | Fonction publique |
| init(string as_database, integer ai_mode, string as_temptextfile) : integer | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
