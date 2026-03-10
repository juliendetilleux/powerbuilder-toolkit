# gf_dw_ddlb_deleteitems

- **Module**: `_general` (Utilitaires generaux)
- **Signature**: `integer gf_dw_ddlb_deleteitems(uo_datawindow adw_target, string as_field, string as_valuestodel)`
- **Description**: Supprime les items d'un DDLB dans un DataWindow

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `adw_target` | `uo_datawindow` | DataWindow - target |
| `as_field` | `string` | Chaine - field |
| `as_valuestodel` | `string` | Chaine - valuestodel |

## Appele par

- `w_allocateorder_update` (_manufg)
- `w_bom_update` (_methods)
- `w_location_update` (_masters)
- `w_param_stat` (_masters)
- `w_purghead_update` (_purch)
- `w_purhead_update` (_purch)
- `w_purheadlimite_update` (_purch)

