# Table: linkactivities

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| lacode | numeric(6) | NO | |
| laaacode | numeric(2) | NO | |
| laitem | char(20) | NO | |
| ladesc | varchar(20) | NO | |
| laquoteval | numeric(12,3) | YES | |
| latiming | numeric(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| activities | activities |
| items | items |

