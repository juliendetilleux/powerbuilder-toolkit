# Table: toreception

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| trid | integer | NO | |
| trpurhead | numeric(6) | NO | |
| trpurline | numeric(4) | NO | |
| trqty | numeric(10,3) | NO | |
| trloorgcode | varchar(20) | YES | |
| trloexpdat | timestamp | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| purline | purline |

