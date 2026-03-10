# Table: transact_with_confirm

## Description
Transactions

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tc_id | integer | NO | |
| tc_num | integer | NO | |
| tc_line | integer | NO | |
| tc_itcode | char(20) | NO | |
| tc_locode | char(30) | NO | |
| tc_from | char(8) | NO | |
| tc_to | char(8) | NO | |
| tc_qty | decimal(15,3) | NO | |
| tc_itum | char(2) | NO | |
| tc_date | timestamp | NO | |
| tc_user | char(12) | YES | |
| tc_comment | varchar(200) | YES | |
| tc_typ | char(1) | NO | |
| tc_deleted | char(1) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| locations | locations |
| locations001 | locations |

