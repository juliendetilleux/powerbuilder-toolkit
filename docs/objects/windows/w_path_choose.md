# w_path_choose

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 414
- **Description**: Selection de chemin/repertoire. Arborescence de selection de repertoire local ou distant.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `ib_selection_changed_process : boolean`
- `gl_local_root : long`

## Fonctions

- `wf_changedir(string, long, string) : integer -- Changement repertoire`
- `wf_addlocalroot() : void -- Ajout racine locale`
- `wf_refresh_local_tree_item(long) : void -- Rafraichissement arborescence`

## Dependances

Voir les references croisees dans le module _system.
