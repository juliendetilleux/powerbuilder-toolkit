# Table: lots

## Description
Lots/Tracabilite

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| locode | char(30) | NO | |
| loitem | char(20) | NO | |
| lostatus | char(1) | NO | |
| loorder | numeric(6) | YES | |
| lorecdat | timestamp | YES | |
| loreldat | timestamp | YES | |
| loexpdat | timestamp | YES | |
| lostock | numeric(12,3) | NO | |
| loalloc | numeric(12,3) | NO | |
| lowip | numeric(12,3) | NO | |
| loqcstatus | char(1) | YES | |
| loctrl | char(1) | YES | |
| lolotctrl | char(1) | YES | |
| locmnt | varchar(1024) | YES | |
| loorgcode | char(20) | YES | |
| loadcode | char(10) | YES | |
| losampleid | numeric(8) | YES | |
| lolabelid | numeric(6) | YES | |
| lofreezdate | timestamp | YES | |
| lobascost | numeric(12,4) | YES | |
| loxtrcost | numeric(12,4) | YES | |
| lobasdate | timestamp | YES | |
| loxtrdate | timestamp | YES | |
| lobasuser | varchar(8) | YES | |
| loxtruser | varchar(8) | YES | |
| loserialcpt | numeric(6) | YES | |
| lofreeze | char(1) | YES | |
| locontopend | timestamp | YES | |
| lorcpoum | char(2) | YES | |
| lost | char(1) | NO | |
| loexcmrp | char(1) | NO | |
| loid | integer | NO | |
| lodensity | numeric(6,3) | YES | |
| lodegree | numeric(4,2) | YES | |
| loavailabledate | timestamp | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| itemlot | items |

