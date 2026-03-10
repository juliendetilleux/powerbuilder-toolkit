# gf_access_setnewobjects

- **Module**: `_system` (Systeme)
- **Signature**: `boolean gf_access_setnewobjects(string as_typ, string as_user, string as_profil, ref gstr_authority astr_tabobjet[])`
- **Description**: Definit les droits pour les nouveaux objets

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_typ` | `string` | Chaine - typ |
| `as_user` | `string` | Chaine - user |
| `as_profil` | `string` | Chaine - profil |
| `astr_tabobjet` | `ref gstr_authority` | Structure - tabobjet |

## Appele par

- `nvo_users` (_system)
- `w_system_auto_update` (_system)
- `w_system_database` (_system)
- `w_user_update` (_system)

## Appelle

- `dberrormsg`

