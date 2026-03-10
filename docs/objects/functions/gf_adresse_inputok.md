# gf_adresse_inputok

- **Module**: `_masters` (Donnees de base)
- **Signature**: `boolean gf_adresse_inputok(integer mode, string action, uo_datawindow target, long row, ref struct_item_error errormsg[])`
- **Description**: Valide la saisie d'une adresse

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `mode` | `integer` | integer |
| `action` | `string` | string |
| `target` | `uo_datawindow` | uo datawindow |
| `row` | `long` | long |
| `errormsg` | `ref struct_item_error` | struct item error |

## Appele par

- `w_adresse_update` (_masters)

## Appelle

- `check_idcode`
- `createadcode`
- `dberrormsg`
- `gf_adresse_custconstraint`
- `gf_get_param_c`
- `gf_get_paramprog`
- `gf_replace_character`
- `messagebox`

