# Table: filetoAJ_line

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fl_id | integer | NO | |
| fl_fk_fa_id | integer | YES | |
| fl_fileline | integer | NO | |
| fl_type | varchar(8) | NO | |
| fl_loc_start | varchar(64) | YES | |
| fl_lot | varchar(64) | YES | |
| fl_qty | numeric(15,3) | YES | |
| fl_loc_dest | varchar(64) | YES | |
| fl_status | numeric(1) | NO | |
| fl_report | varchar(1024) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| fileAJ | fileAJ |

