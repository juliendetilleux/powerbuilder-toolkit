# n_dynamicitem

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ftp
- **Description**: Objet utilisateur - gestion des articles

## Variables d'instance

| Variable | Type |
|----------|------|
| im_dynamic | m_dynamicitem[] |
| iw_parent | w_window |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_additem(menu am_parent, string as_text) : integer | Public | Fonction publique |
| of_getitemcount() : integer | Public | Fonction publique |
| of_getitemstring(integer ai_index, string as_propname) : string | Public | Fonction publique |
| of_getiteminteger(integer ai_index, string as_propname) : integer | Public | Fonction publique |
| of_addseparator(menu am_parent) : integer | Public | Fonction publique |
| of_getitembool(integer ai_index, string as_propname) : boolean | Public | Fonction publique |
| of_setitem(integer ai_index, string as_propname, boolean ab_value) : void (subroutine) | Public | Fonction publique |
| of_setitem(integer ai_index, string as_propname, string as_value) : void (subroutine) | Public | Fonction publique |
| of_setparent(w_window aw_parent) : void (subroutine) | Public | Fonction publique |
| of_setitem(integer ai_index, string as_propname, integer ai_value) : void (subroutine) | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
