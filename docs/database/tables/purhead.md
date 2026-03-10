# Table: purhead

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| phcode | numeric(6) | NO | |
| phsupp | char(10) | NO | |
| phcurr | char(3) | NO | |
| phstatus | char(1) | YES | |
| phdatcrea | timestamp | YES | |
| phlastline | numeric(4) | YES | |
| phcntid | numeric(6) | YES | |
| phcntref | varchar(30) | YES | |
| phcmnt | varchar(1000) | YES | |
| phwithtransp | char(1) | YES | |
| phtranspid | char(10) | YES | |
| phdlvt | char(1) | YES | |
| phdlvtplace | varchar(15) | YES | |
| phtransfered | char(1) | YES | |
| phfileref | numeric(4) | YES | |
| phfileline | numeric(4) | YES | |
| phdatsupply | timestamp | YES | |
| phpurchaser | char(8) | YES | |
| phrcpocmnt | varchar(240) | YES | |
| phsupppay | char(1) | YES | |
| phcreauser | char(50) | YES | |
| phaut | char(1) | YES | |
| phautuser | char(8) | YES | |
| phautdate | timestamp | YES | |
| phmccode | varchar(10) | YES | |
| phrefint | varchar(60) | YES | |
| phnbsendedi | numeric(3) | NO | |
| phsendwms | numeric(3) | NO | |
| phchassis | varchar(17) | YES | |
| phregistre | varchar(20) | YES | |
| phmarque | varchar(25) | YES | |
| phdatereg | timestamp | YES | |
| phkm | numeric(6) | YES | |
| phmodif | timestamp | YES | |
| phusermodif | char(20) | YES | |
| phproforma | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| filehead | filehead |
| supplier | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| purhead | purline |

