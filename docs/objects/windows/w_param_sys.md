# w_param_sys

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 4475
- **Description**: Parametres systeme. Fenetre centrale de configuration avec onglets pour les parametres programme, paramini, couleurs, cles PC, configuration impression et taches planifiees.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `ParamId : String`
- `iboo_InputModify : Boolean`
- `ib_ProgParam : Boolean`
- `ib_paramini : Boolean`
- `CallFrom : String`
- `is_mailaccount : string`
- `is_user : string`
- `ib_colors : boolean`

## Fonctions

- `wf_get_dwlib(string, string) : void -- Extraction DW depuis bibliotheque`
- `wf_get_reports() : void -- Recuperation rapports`
- `wf_check_modules() : boolean -- Verification modules actifs`
- `wf_update_table() : integer -- Mise a jour table parametres`
- `wf_condtemplate_refresh() : void -- Rafraichissement modeles conditions`
- `wf_paramini_refresh() : void -- Rafraichissement parametres INI`
- `wf_color(string) : void -- Gestion des couleurs`
- `wf_paramini_filter() : void -- Filtre parametres INI`
- `wf_setpckey() : void -- Definition cle PC`
- `wf_deletepckey() : void -- Suppression cle PC`
- `wf_printsetup_filter() : void -- Filtre configuration impression`
- `wf_planedtasks_refresh() : void -- Rafraichissement taches planifiees`
- `wf_color2(string) : void -- Gestion couleurs secondaires`

## Dependances

Voir les references croisees dans le module _system.
