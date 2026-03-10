# w_system_auto_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 1196
- **Description**: Mise a jour automatique du systeme. Gere l'application des fichiers de mise a jour SQL et autorites.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `ii_rtnFirst : integer`
- `is_FirstSQL : string`
- `modNum : long`

## Fonctions

- `wf_openfile(string) : boolean -- Ouverture fichier mise a jour`
- `wf_treatfile(string) : boolean -- Traitement contenu fichier`
- `isvalidaut(string) : boolean -- Validation fichier autorite`
- `wf_applynewaut(string) : boolean -- Application nouvelles autorites`
- `wf_mess_upgraderec(string) : void -- Message enregistrement mise a jour`
- `wf_pos_sql_sep(string) : long -- Position separateur SQL`

## Dependances

Voir les references croisees dans le module _system.
