# w_profils

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 394
- **Description**: Gestion des profils de securite. Permet de creer et modifier les profils d'acces et d'associer les utilisateurs.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `is_Sel_ProfilCode : String`
- `ib_dwLoseFocus : boolean`

## Fonctions

- `wf_refresh_head(string) : void -- Rafraichissement en-tete profil`
- `wf_useraccess_update(string) : void -- Mise a jour acces utilisateur`

## Dependances

Voir les references croisees dans le module _system.
