# gf_check_mfg_mat_status

- **Module**: `_quality` (Qualite)
- **Signature**: `integer gf_check_mfg_mat_status(string as_lot, ref string as_message, boolean ab_manual)`
- **Description**: Verifie le statut matiere en fabrication

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `as_lot` | `string` | Chaine - lot |
| `as_message` | `ref string` | Chaine - message |
| `ab_manual` | `boolean` | Booleen - manual |

## Appele par

- `w_lot_update` (_quality)
- `w_qc_update` (_quality)
- `w_qcctrl` (_quality)
- `w_qcctrl_appro` (_quality)
- `w_qcstatus` (_quality)

## Appelle

- `dberrormsg`
- `gf_get_paramprog`
- `gf_qcinfo_retrieveparam`
- `savehistojob`

