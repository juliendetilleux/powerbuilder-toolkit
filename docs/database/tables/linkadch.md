# Table: linkadch

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| lac_id | integer | NO | |
| lac_adcode | char(10) | YES | |
| lac_chcode | char(4) | YES | |
| lac_clline | numeric(3) | NO | |
| lac_isornot | tinyint | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| choicehead | choicehead |

