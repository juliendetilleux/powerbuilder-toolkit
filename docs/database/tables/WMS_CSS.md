# Table: WMS_CSS

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| wc_id | integer | NO | |
| wc_date_integration | timestamp | NO | |
| wc_PRODUCT_CODE | char(20) | YES | |
| wc_LOT_CODE | char(30) | YES | |
| wc_DATE | varchar(64) | YES | |
| wc_STATUS_CODE | varchar(64) | YES | |
| wc_QUANTITY | numeric(12,5) | YES | |
| wc_OPERATION | varchar(64) | YES | |
| wc_filename | varchar(1024) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |

