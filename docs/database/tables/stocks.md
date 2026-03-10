# Table: stocks

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| stitem | char(20) | NO | |
| stlot | char(30) | NO | |
| stloc | char(8) | NO | |
| stqty | numeric(12,3) | NO | |
| stalloc | numeric(12,3) | NO | |
| stctrl | char(1) | YES | |
| stid | integer | NO | |
| stqtytarif | numeric(12,3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| locations | locations |

