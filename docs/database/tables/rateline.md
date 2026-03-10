# Table: rateline

## Description
Tarifs/Rates

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| rlcode | numeric(5) | NO | |
| rlitem | char(20) | NO | |
| rlval | numeric(11,5) | YES | |
| rlstroke | numeric(6,2) | YES | |
| rlvalold | numeric(11,5) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| ratehead | ratehead |

