# Table: linkitadtd

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ldadcode | char(10) | NO | |
| lditem | char(20) | NO | |
| ldmoddat | timestamp | YES | |
| lding | long varchar(32767) | YES | |
| ldnut | long varchar(32767) | YES | |
| ldalg | long varchar(32767) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| items | items |

