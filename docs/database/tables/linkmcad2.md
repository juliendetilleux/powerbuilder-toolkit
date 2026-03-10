# Table: linkmcad2

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| lkadcode | char(10) | NO | |
| lkmccode | char(10) | NO | |
| lkidcptcust | varchar(30) | YES | |
| lktrfcptcust | char(1) | YES | |
| lkactiv | char(1) | YES | |
| lkidcptsupp | varchar(30) | YES | |
| lktrfcptsupp | char(1) | YES | |
| lkadmodif | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| adresses001 | adresses |

