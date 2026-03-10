# n_dwspy_util

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _XDWSpy
- **Description**: Utilitaires pour le module DWSpy (manipulation de chaines, tableaux, colonnes DataWindow)

## Variables d'instance

Aucune variable d'instance definie.

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_string_to_array(string as_input_string, string as_delimiter, string rs_arr[]) : long | Public | Decoupe une chaine en tableau avec delimiteur |
| uf_replace_all(string rs_processed_string, string as_old_frag, string as_new_frag) : void | Public | Remplace toutes les occurrences dans une chaine |
| uf_populated(any aa_val) : boolean | Public | Verifie si une valeur est renseignee |
| uf_empty(any aa_val) : boolean | Public | Verifie si une valeur est vide |
| uf_get_pb_version() : string | Public | Retourne la version de PowerBuilder |
| uf_sort_array(long rl_arr[]) : long | Public | Trie un tableau de longs |
| uf_sort_array(string rs_arr[]) : long | Public | Trie un tableau de chaines |
| uf_ds_from_array(string as_arr[]) : datastore | Public | Cree un DataStore a partir d'un tableau de chaines |
| uf_ds_from_array(long al_arr[]) : datastore | Public | Cree un DataStore a partir d'un tableau de longs |
| uf_get_window(powerobject apo_obj) : window | Public | Retrouve la fenetre parente d'un objet |
| uf_get_field_label(datawindow adw, string as_field_name) : string | Public | Retourne le libelle d'un champ DataWindow |
| uf_row_count(datawindow adw, dwbuffer a_buf) : long | Public | Compte les lignes d'un buffer DataWindow |
| uf_col_exists(datawindow adw, string as_col) : boolean | Public | Verifie si une colonne existe dans le DataWindow |
| uf_col_is_visible(datawindow adw, string as_col_name) : boolean | Public | Verifie si une colonne est visible |
| uf_col_modified(datawindow adw, string as_col, long al_row, dwbuffer a_buf) : boolean | Public | Verifie si une colonne a ete modifiee |
| uf_row_modified(datawindow adw, long al_row, dwbuffer a_buf) : boolean | Public | Verifie si une ligne a ete modifiee |
| uf_get_item_as_string(datawindow adw, long al_row, string as_field_name, ...) : string | Public | Retourne la valeur d'un champ sous forme de chaine |
| uf_get_pbl_of_class(string as_class_name) : string | Public | Retourne le PBL contenant une classe |
| uf_get_proc_of_dataobject(string as_dataobject) : string | Public | Retourne le type de traitement d'un DataWindow |

## Evenements

Aucun evenement personnalise.
