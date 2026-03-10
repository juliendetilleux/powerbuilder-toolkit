# nvo_users

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _system
- **Description**: Objet systeme

## Variables d'instance

| Variable | Type |
|----------|------|
| is_error | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_create_users(string as_login, string as_password) : integer | Public | Fonction utilisateur publique |
| uof_chek_session_user(string as_login, string as_password) : boolean | Public | Fonction utilisateur publique |
| uof_isuserexists(string as_login) : boolean | Public | Fonction utilisateur publique |
| uof_checkall_userpmix() : boolean | Public | Fonction utilisateur publique |
| uof_issessionwin(string as_login, string as_password) : boolean | Public | Fonction utilisateur publique |
| uof_isusercurrentsession(string as_user) : boolean | Public | Fonction utilisateur publique |

## Evenements

Aucun evenement personnalise.
