# n_parm

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _system
- **Description**: Objet de passage de parametres entre fenetres (pattern dictionnaire cle/valeur)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_passed_from | string |
| ib_positive_response | boolean |
| iui_upper_bound | uint |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_set(string as_name, any aa_value) : void | Public | Definit un parametre par nom et valeur |
| uf_set(string as_name, powerobject apo_val) : void | Public | Definit un parametre par nom et objet |
| uf_get(string as_name) : any | Public | Recupere un parametre par son nom |
| uf_exists(string as_name) : boolean | Public | Verifie si un parametre existe |

## Evenements

Aucun evenement personnalise.
