# Table: crmfilterformat

## Description
CRM

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fffilterid | numeric(4) | NO | |
| ffline | numeric(3) | NO | |
| ffopenbracket | varchar(5) | YES | |
| fffield | varchar(20) | NO | |
| ffcondition | varchar(5) | NO | |
| ffresult | varchar(30) | NO | |
| ffclosebracket | varchar(5) | YES | |
| ffoperator | varchar(10) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| fk_filter | Crmfilter |

