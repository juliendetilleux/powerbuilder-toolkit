# w_user_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 478
- **Description**: Mise a jour utilisateur. Formulaire de creation/modification d'un utilisateur avec gestion mot de passe.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `Action : String`

## Fonctions

- `wf_inputok(string) : boolean -- Validation saisie utilisateur`
- `wf_pwd_time_actif() : integer -- Temps activation mot de passe`
- `wf_update_date_pwd() : integer -- Mise a jour date mot de passe`
- `wf_recp_pwd() : integer -- Recuperation mot de passe`

## Dependances

Voir les references croisees dans le module _system.
