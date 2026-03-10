# ws_password2

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 1386
- **Description**: Ecran de connexion alternatif. Version secondaire de l'ecran de connexion avec verification session, acces et version.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `Licence_Expiry : date`
- `Accessword : String`
- `is_2open : string`
- `ib_userlanguage : boolean`

## Fonctions

- `check_session() : boolean -- Verification session`
- `check_entry() : void -- Verification saisie`
- `checkuseraccess() : boolean -- Controle acces utilisateur`
- `wf_load_globalvariable() : void -- Chargement variables globales`
- `wf_check_upgrade() : void -- Verification mise a jour`
- `wf_pdfprinter() : void -- Configuration imprimante PDF`
- `wf_check_dbversion() : integer -- Verification version BD`
- `wf_check_custversion() : integer -- Verification version client`

## Dependances

Voir les references croisees dans le module _system.
