# w_system_database

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 3028
- **Description**: Gestion de la base de donnees systeme. Permet les mises a jour de structure BD, verification des modifications, gestion des acces BD et deconnexion utilisateurs.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `originalpath : string`
- `DBSQLText : String`
- `ModNum : long`
- `is_upgradefilename : string`
- `ib_sqlcancel : boolean`
- `ib_dbaccess : boolean`

## Fonctions

- `isvalidaut(string) : boolean -- Validation fichier autorite`
- `wf_checkdbmod(string) : boolean -- Verification modification BD`
- `wf_dbaccess(boolean, string) : void -- Gestion acces base de donnees`
- `wf_disconnectuser() : void -- Deconnexion utilisateur`

## Dependances

Voir les references croisees dans le module _system.
