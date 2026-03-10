# w_system_upgrade

- **Type**: Window
- **Ancetre**: w_child
- **Module**: _system
- **Lignes**: 4390
- **Description**: Mise a jour du systeme. Gere les mises a jour de version, les autorites et les modeles d'impression.

## Heritage

w_child -> w_a_child_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `is_artype : string`

## Fonctions

- `wf_autorite(string, string, string) : void -- Gestion autorites utilisateur`
- `wf_update_printmodels(string, string) : boolean -- Mise a jour modeles impression`

## Dependances

Voir les references croisees dans le module _system.
