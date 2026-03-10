# Table: promoline

## Description
Promotions

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| plcode | numeric(4) | NO | |
| plline | numeric(4) | NO | |
| plitem | char(20) | YES | |
| plitstat1 | char(2) | YES | |
| plitstat2 | char(2) | YES | |
| pltyp | char(1) | YES | |
| plqty1 | numeric(11,5) | YES | |
| plqty2 | numeric(11,5) | YES | |
| pldiscpc | numeric(11,5) | YES | |
| plgetriscde | bit | NO | |
| plsumcde | bit | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| promohead | promohead |

