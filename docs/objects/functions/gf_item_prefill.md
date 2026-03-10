# gf_item_prefill

- **Module**: `_masters` (Donnees de base)
- **Signature**: `integer gf_item_prefill(ref uo_datawindow target, long row)`
- **Description**: Pre-remplit les champs article

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `target` | `ref uo_datawindow` | uo datawindow |
| `row` | `long` | long |

## Appele par

- `w_dvi_item_create` (_devis)
- `w_item_import_show` (_masters)
- `w_item_update` (_masters)
- `w_items_cust` (_masters)

