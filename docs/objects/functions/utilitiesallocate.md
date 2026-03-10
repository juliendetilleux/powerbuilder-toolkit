# utilitiesallocate

- **Module**: `_manufg` (Fabrication)
- **Signature**: `boolean utilitiesallocate(string ordrtyp, long ordrno, long ordrlin, string item, integer lastalloc, double qtyrequired)`
- **Description**: Utilitaire d'allocation de stock pour fabrication

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ordrtyp` | `string` | string |
| `ordrno` | `long` | long |
| `ordrlin` | `long` | long |
| `item` | `string` | string |
| `lastalloc` | `integer` | integer |
| `qtyrequired` | `double` | double |

## Appele par

- `nvo_of_launch` (_manufg)
- `w_launchorder_group_line` (_manufg)

## Appelle

- `dberrormsg`

