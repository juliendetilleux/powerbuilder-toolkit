# Table: filetoreceptMFG_line

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fl_id | integer | NO | |
| fl_fk_fm_id | integer | YES | |
| fl_fileline | integer | NO | |
| fl_mfghead_mhcode | integer | YES | |
| fl_item | varchar(64) | YES | |
| fl_loc | varchar(64) | YES | |
| fl_lot | varchar(64) | YES | |
| fl_qty_torecept | numeric(15,3) | YES | |
| fl_status | numeric(1) | NO | |
| fl_report | varchar(1024) | NO | |
| fl_type | char(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| fileMFG | fileMFG |

