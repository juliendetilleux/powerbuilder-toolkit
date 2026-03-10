# vo_qry_generic

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _query
- **Description**: Objet du module Requetes

## Variables d'instance

| Variable | Type |
|----------|------|
| outputsel | int |
| ii_index | int |
| is_table | string |
| is_item_qty_name | string |
| is_item_curr_val_name | string |
| is_sql | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_getwhere(datetime adat_start, datetime adat_stop, string diff) : string | Public | Fonction privee de fenetre |
| wf_create_dw(string as_sql) : boolean | Public | Fonction privee de fenetre |
| wf_syntax(string as_sql) : string | Public | Fonction privee de fenetre |
| wf_create_sql() : string | Public | Fonction privee de fenetre |
| wf_getcolumn() : string | Public | Fonction privee de fenetre |
| wf_getlines(string as_descline) : string | Public | Fonction privee de fenetre |
| wf_sous_select() : string | Public | Fonction privee de fenetre |

## Evenements

Aucun evenement personnalise.
