# gf_item_inputok

- **Module**: `_masters` (Donnees de base)
- **Signature**: `boolean gf_item_inputok(integer mode, string action, uo_datawindow target, long row, ref struct_item_error errormsg[])`
- **Description**: Valide la saisie d'un article

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `mode` | `integer` | integer |
| `action` | `string` | string |
| `target` | `uo_datawindow` | uo datawindow |
| `row` | `long` | long |
| `errormsg` | `ref struct_item_error` | struct item error |

## Appele par

- `w_dvi_item_create` (_devis)
- `w_item_import_show` (_masters)
- `w_item_mass_update` (_masters)
- `w_item_update` (_masters)

## Appelle

- `gf_get_param_c`
- `gf_get_paramprog`
- `gf_item_custconstraint`
- `gf_replace_character`
- `gf_verif_items`
- `messagebox`
- `nvl`

