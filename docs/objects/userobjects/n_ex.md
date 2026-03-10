# n_ex

- **Type**: User Object (Non-visuel)
- **Ancetre**: exception
- **Module**: _XDWSpy
- **Description**: Classe d'exception personnalisee pour le module DWSpy (debugging DataWindow)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_err_num | int |
| ii_line | int |
| is_class | string |
| is_script | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_populate(integer ai_err_num, string as_err_msg, string as_class, string as_script, integer ai_line) : void | Public | Remplit les informations de l'exception |
| uf_msg() : void | Public | Affiche le message d'erreur |

## Evenements

Aucun evenement personnalise.
