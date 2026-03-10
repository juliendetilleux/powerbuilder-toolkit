# Table: salegroup

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sgcode | numeric(8) | NO | |
| sgsalhead | numeric(8) | YES | |
| sgsalline | numeric(4) | YES | |
| sgkey1 | varchar(50) | YES | |
| sgkey2 | varchar(10) | YES | |
| sgkey3 | char(1) | YES | |
| sgqty | numeric(10,3) | YES | |
| sglevel | numeric(3) | YES | |
| sgparentid | numeric(5) | YES | |
| sgid | numeric(5) | YES | |
| sgconssale | integer | YES | |
| sgweight | numeric(12,3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| conssale | conssale |

