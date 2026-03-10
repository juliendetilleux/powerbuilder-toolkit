# Table: salediscount

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sdcode | numeric(4) | NO | |
| sdstat1 | char(2) | YES | |
| sdstat2 | char(2) | YES | |
| sddisc | numeric(11,5) | YES | |
| sdqty | numeric(8) | YES | |
| sddatestart | timestamp | YES | |
| sddatestop | timestamp | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| salediscount | linkadristqty |

