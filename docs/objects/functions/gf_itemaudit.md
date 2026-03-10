# gf_itemaudit

- **Module**: `_masters` (Donnees de base)
- **Signature**: `boolean gf_itemaudit(string as_item, string as_text)`
- **Description**: Audit d'un article

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_item` | `string` | Chaine - item |
| `as_text` | `string` | Chaine - text |

## Appele par

- `w_item_mass_update` (_masters)
- `w_item_update` (_masters)
- `w_itemanx_update` (_masters)
- `w_itemfan_update` (_masters)
- `w_itemsrv_update` (_masters)

## Appelle

- `dberrormsg`
- `messagebox`

