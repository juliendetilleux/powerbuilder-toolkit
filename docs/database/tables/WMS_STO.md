# Table: WMS_STO

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ws_id | integer | NO | |
| ws_fk_iw_id | integer | YES | |
| ws_fk_file_iw_id | integer | NO | |
| ws_LOT_CODE | char(30) | NO | |
| ws_QUANTITY | numeric(12,5) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| import_wms | import_wms |
| import_wms001 | import_wms |

