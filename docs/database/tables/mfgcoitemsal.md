# Table: mfgcoitemsal

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| msmhcode | numeric(6) | NO | |
| msitem | char(20) | NO | |
| mssalhead | numeric(6) | NO | |
| mssalline | numeric(4) | NO | |
| msqty | numeric(12,3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| salline | salline |

