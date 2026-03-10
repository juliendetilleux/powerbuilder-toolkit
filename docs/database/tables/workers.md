# Table: workers

## Description
Travail/Work orders

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| wkcode | char(8) | NO | |
| wkactiv | char(1) | YES | |
| wkname | char(20) | YES | |
| wkpswrd | char(8) | YES | |
| wkwc | char(8) | YES | |
| wkwt | char(8) | YES | |
| wktyp | char(1) | YES | |
| wkselfvalid | char(1) | YES | |
| wkcost | numeric(8,4) | YES | |
| wkinout | char(1) | YES | |
| wkadid | char(10) | YES | |
| wkgroup | numeric(3) | YES | |
| wkpayroll | varchar(20) | YES | |
| wkcell | integer | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| CELLS | CELLS |

