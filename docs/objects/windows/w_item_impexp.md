# w_item_impexp

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 324
- **Description**: Import/export articles. Gestion de l'import et export de donnees articles.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `idt_impexp : nv_datastore`

## Fonctions

- `wf_create_datastore() : nv_datastore -- Creation datastore`
- `wf_retrieve() : long -- Recuperation des donnees`
- `wf_update(string[]) : boolean -- Mise a jour depuis tableau`

## Dependances

Voir les references croisees dans le module _system.
