# ws_password_newdesign

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 1780
- **Description**: Ecran de connexion nouveau design. Version modernisee de l'ecran de connexion pour l'API PmiEngine.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `Licence_Expiry : date`
- `Accessword : String`
- `is_usentry : string`
- `ib_userlanguage : boolean`

## Fonctions

- `check_entry() : void -- Verification saisie`
- `checkuseraccess() : boolean -- Controle acces utilisateur`
- `wf_load_globalvariable() : void -- Chargement variables globales`
- `wf_check_session() : boolean -- Verification session`
- `wf_check_pc_access(string) : boolean -- Verification acces PC`
- `wf_check_ts_access() : boolean -- Verification acces Terminal Server`
- `wf_pdfprinter() : void -- Configuration imprimante PDF`
- `wf_check_dbavailable() : void -- Verification disponibilite BD`
- `wf_check_dbversion() : integer -- Verification version BD`
- `wf_check_custversion() : integer -- Verification version client`
- `wf_check_upgrade() : integer -- Verification mise a jour`

## Dependances

Voir les references croisees dans le module _system.
