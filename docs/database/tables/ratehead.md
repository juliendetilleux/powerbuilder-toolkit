# Table: ratehead

## Description
Tarifs/Rates

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| rhcode | numeric(5) | NO | |
| rhactiv | char(1) | NO | |
| rhrpcode | char(1) | NO | |
| rhcurr | char(3) | YES | |
| rhdesc | char(30) | YES | |
| rhstroke | numeric(6,2) | YES | |
| rhtyp | char(1) | YES | |
| rhmod | char(1) | YES | |
| rhnet | char(1) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| ratehead | adresrate |
| ratehead | except_rate_itad |
| ratehead | rateline |

