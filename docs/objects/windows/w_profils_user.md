# w_profils_user

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 2315
- **Description**: Gestion des profils utilisateurs. Permet d'attribuer des droits d'acces, autorites et profils aux utilisateurs du systeme.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `ii_Object : Int`
- `is_user_novis : string`
- `is_user_vis : string`
- `ib_AUtority_Changed : Boolean`

## Fonctions

- `wf_refresh(string) : void -- Rafraichissement pour un utilisateur donne`
- `wf_refresh_autorite() : void -- Rafraichissement des autorites`
- `wf_menu_autorities() : void -- Gestion des autorites de menu`
- `wf_auditgdrp(string) : void -- Audit GDPR par type de transaction`

## Dependances

Voir les references croisees dans le module _system.
