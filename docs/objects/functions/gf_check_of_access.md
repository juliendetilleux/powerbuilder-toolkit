# gf_check_of_access

- **Module**: `_methods` (Methodes et nomenclatures)
- **Signature**: `boolean gf_check_of_access(long al_mfghead, string as_user)`
- **Description**: Verifie l'acces a un ordre de fabrication

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `al_mfghead` | `long` | Valeur long - mfghead |
| `as_user` | `string` | Chaine - user |

## Appele par

- `w_mfgorder_close` (_manufg)
- `w_mfgorder_report` (_manufg)
- `w_qry_cmpny_mfg` (_query)

## Appelle

- `dberrormsg`
- `gf_check_methode_access`

