# nvo_pmiengineapi

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: Shared_PmiEngineAPI
- **Description**: Objet non-visuel pour l'integration avec l'API PmiEngine (authentification, requetes HTTP)

## Variables d'instance

| Variable | Type |
|----------|------|
| Inv_HttpClient | HttpClient |
| Is_base_url | string |
| Is_token_user | string |
| Is_token_password | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| sendrequest(string as_method, string as_endpoint, string as_data) : integer | Public | Envoie une requete HTTP a l'API |
| of_post_loginpmi(string as_user, string as_password, string as_erreur) : boolean | Public | Authentification PMI avec identifiants |
| of_post_login(string as_erreur) : boolean | Public | Authentification avec token existant |
| of_convert_pw() : void | Public | Conversion du mot de passe |

## Evenements

Aucun evenement personnalise.
