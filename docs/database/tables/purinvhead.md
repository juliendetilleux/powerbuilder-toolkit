# Table: purinvhead

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| picode | numeric(6) | NO | |
| pisup | char(10) | NO | |
| pidate | timestamp | NO | |
| picurr | char(3) | YES | |
| pitvaref | char(15) | YES | |
| pistatus | char(1) | YES | |
| pisupref | char(20) | YES | |
| pipurval | numeric(8,2) | YES | |
| pitvaval | numeric(8,2) | YES | |
| pitotval | numeric(8,2) | YES | |
| picomment | varchar(120) | YES | |
| pitypinv | char(1) | YES | |
| piexpiry | timestamp | YES | |
| picptper | char(6) | YES | |
| pityptva | char(1) | YES | |
| picurconv | numeric(10,6) | YES | |
| picptexer | char(4) | YES | |
| pilastlin | numeric(3) | YES | |
| pirist | numeric(4,2) | YES | |
| piesct | numeric(4,2) | YES | |
| pifacnot | numeric(2) | YES | |
| pipaym | char(1) | YES | |
| pipaymdat | timestamp | YES | |
| pifileref | numeric(4) | YES | |
| pifileline | numeric(4) | YES | |
| picomm | varchar(20) | YES | |
| picreadate | timestamp | YES | |
| picreauser | char(50) | YES | |
| pimoddate | timestamp | YES | |
| pimoduser | char(50) | YES | |
| piorderrist | char(1) | YES | |
| piblockedpay | char(1) | YES | |
| pimccode | varchar(10) | YES | |
| picodemc | numeric(12) | YES | |
| picountryid | char(2) | YES | |
| pisupp | char(10) | YES | |
| pipathfilepdf | varchar(250) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| filehead | filehead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| purinvhead | purinvline |

