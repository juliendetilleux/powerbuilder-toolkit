# Table: projhead

## Description
Projets

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| phcode | numeric(6) | NO | |
| phstatus | char(1) | YES | |
| phactiv | char(1) | YES | |
| phdesc | varchar(50) | YES | |
| phdesc2 | varchar(1000) | YES | |
| phadid | char(10) | YES | |
| phstid | numeric(4) | YES | |
| phdatcrea | timestamp | YES | |
| phdatreq | timestamp | YES | |
| phreqtyp | char(1) | YES | |
| phmastr | numeric(6) | YES | |
| phuplab | numeric(5,2) | YES | |
| phupmat | numeric(5,2) | YES | |
| phupoth | numeric(5,2) | YES | |
| phupglob | numeric(5,2) | YES | |
| phinvacc | numeric(3) | YES | |
| phstep | numeric(2) | YES | |
| phtype | char(1) | YES | |
| phcurr | char(3) | YES | |
| phrate | numeric(5) | YES | |
| phrist | numeric(5,2) | YES | |
| phadcontact | numeric(2) | YES | |
| phexpdate | timestamp | YES | |
| phfilehead | numeric(6) | YES | |
| phfileline | numeric(4) | YES | |
| phofferact | numeric(6) | YES | |
| phflwofferact | numeric(6) | YES | |
| phcustref | varchar(40) | YES | |
| phlang | char(2) | YES | |
| phdlvt | char(1) | YES | |
| phdlvtplace | varchar(15) | YES | |
| phcustpay | char(1) | YES | |
| phdocid | numeric(7) | YES | |
| phsuccessper | numeric(3) | YES | |
| phfrcstdate | timestamp | YES | |
| phfam1 | numeric(3) | YES | |
| phfam2 | numeric(3) | YES | |
| phsalesman | varchar(8) | YES | |
| phmccode | varchar(10) | YES | |
| phdirectsal | char(1) | NO | |
| phturnid | numeric(3) | YES | |
| phprinted | char(1) | YES | |
| phggcode | numeric(5) | YES | |
| phcreauser | varchar(50) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| projhead | devgroup |

