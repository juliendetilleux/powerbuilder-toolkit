# nvo_trustbox

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _methods
- **Description**: Objet du module Methodes/Nomenclatures

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |
| li_line_start | int |
| il_match_column_dbexcel | long[] |
| is_match_column_tdexcel | string[] |
| il_match_column_tdexcel | long[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_find_excel(oleobject aoo_excel, string as_column) : integer | Public | Fonction utilisateur publique |
| uof_putvalue_excel(string as_column_excel, long al_line, oleobject aoo_excel, string as_value) : boolean | Public | Fonction utilisateur publique |
| uof_fill_template(string as_items[], string as_path_template) : integer | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
