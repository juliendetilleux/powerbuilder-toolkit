# gf_get_month_last_day

- **Module**: `_general` (Utilitaires generaux)
- **Signature**: `datetime gf_get_month_last_day(date adt_dateref)`
- **Description**: Retourne le dernier jour du mois

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `adt_dateref` | `date` | DateTime - dateref |

## Appele par

- `w_clot_mfg_update` (_monthclot)
- `w_qry_tictrl` (_query)

## Appelle

- `gf_get_month_first_day`

