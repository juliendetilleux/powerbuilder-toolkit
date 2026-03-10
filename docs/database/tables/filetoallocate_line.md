# Table: filetoallocate_line

## Description
Emplacements/Locations

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fl_id | integer | NO | |
| fl_fk_fa_id | integer | YES | |
| fl_fileline | integer | NO | |
| fl_salhead_shcode | integer | YES | |
| fl_loc | varchar(64) | YES | |
| fl_lot | varchar(64) | YES | |
| fl_qty_toalloc | numeric(15,3) | YES | |
| fl_status | numeric(1) | NO | |
| fl_report | varchar(1024) | NO | |
| fl_salline_slline | numeric(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| filetoallocate | filetoallocate |

