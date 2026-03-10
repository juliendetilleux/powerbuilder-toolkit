# Table: edihead_DESADV_import

## Description
EDI electronique

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ed_id | integer | NO | |
| ed_filename | varchar(256) | NO | |
| ed_integration_date | timestamp | NO | |
| ed_status | numeric(1) | NO | |
| ed_GLN_sender | varchar(13) | NO | |
| ed_GLN_receptionner | varchar(13) | NO | |
| ed_codeext | varchar(64) | NO | |
| ed_shipdate | timestamp | YES | |
| ed_reqdat1 | timestamp | YES | |
| ed_reqdat2 | timestamp | YES | |
| ed_ref | varchar(64) | NO | |
| ed_GLN_buyer | varchar(13) | NO | |
| ed_GLN_vendor | varchar(13) | NO | |
| ed_GLN_receiver | varchar(13) | NO | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| edihead_DESADV_import | ediline_DESADV_import |

