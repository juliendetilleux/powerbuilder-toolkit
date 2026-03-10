# Table: linkitloc

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| llitem | varchar(20) | NO | |
| llloc | varchar(8) | NO | |
| llqtymin | numeric(12,3) | NO | |
| llqtymax | numeric(12,3) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| fk_item | items |
| fk_loc | locations |

