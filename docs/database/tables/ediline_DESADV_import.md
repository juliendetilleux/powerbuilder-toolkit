# Table: ediline_DESADV_import

## Description
EDI electronique

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| el_id | integer | NO | |
| el_fk_ed_id | integer | NO | |
| el_status | numeric(1) | NO | |
| el_GTIN_item | varchar(14) | NO | |
| el_item_desc | varchar(128) | NO | |
| el_qtypc | numeric(10,3) | NO | |
| el_um | varchar(10) | YES | |
| el_stdval | numeric(10,4) | YES | |
| el_GLN_receiver | varchar(13) | NO | |
| el_field8 | varchar(128) | NO | |
| el_field9 | varchar(128) | NO | |
| el_field10 | varchar(128) | NO | |
| el_qtyKG | numeric(12,3) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| edihead_DESADV_import | edihead_DESADV_import |

