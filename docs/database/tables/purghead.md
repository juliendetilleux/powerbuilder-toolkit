# Table: purghead

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| phcode | numeric(6) | NO | |
| phtype | char(1) | NO | |
| phsupp | char(10) | NO | |
| phcurr | char(3) | NO | |
| phstatus | char(1) | YES | |
| phdatcrea | timestamp | YES | |
| phlastline | numeric(4) | YES | |
| phprojid | numeric(6) | YES | |
| phversn | numeric(3) | YES | |
| phcmnt | varchar(1000) | YES | |
| phfileref | numeric(4) | YES | |
| phfileline | numeric(4) | YES | |
| phpurchaser | char(8) | YES | |
| phdlvt | char(1) | YES | |
| phdlvtplace | varchar(15) | YES | |
| phsupppay | char(1) | YES | |
| phcreauser | char(50) | YES | |
| phaut | char(1) | YES | |
| phautuser | char(50) | YES | |
| phautdate | timestamp | YES | |
| phrcpocmnt | varchar(240) | YES | |
| phmccode | varchar(10) | YES | |
| phrefint | varchar(60) | YES | |
| phsendwms | numeric(3) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| filehead | filehead |

