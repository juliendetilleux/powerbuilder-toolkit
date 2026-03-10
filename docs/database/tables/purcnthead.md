# Table: purcnthead

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chcode | numeric(6) | NO | |
| chstatus | char(1) | YES | |
| chadid | char(10) | YES | |
| chdesc | varchar(50) | YES | |
| Chadref | varchar(30) | YES | |
| Chcurr | char(3) | YES | |
| Chcreadat | timestamp | YES | |
| Chordid | numeric(6) | YES | |
| Chappdat | timestamp | YES | |
| Chexptyp | char(1) | YES | |
| Chexpdat | timestamp | YES | |
| Chexpqty | numeric(10,3) | YES | |
| Chuomord | char(2) | YES | |
| Chlastdat | timestamp | YES | |
| Chusdqty | numeric(10,3) | YES | |
| Chcmnt | long varchar(32767) | YES | |
| chdlvt | char(1) | YES | |
| chdlvtplace | varchar(15) | YES | |
| chmccode | varchar(10) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |

