# Table: purline

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| plcode | numeric(6) | NO | |
| plline | numeric(4) | NO | |
| plitem | char(20) | NO | |
| plqtyord | numeric(10,3) | NO | |
| plqtyreq | numeric(10,3) | NO | |
| pluomord | char(2) | NO | |
| pluomconv | numeric(16,10) | NO | |
| pldatreq | timestamp | NO | |
| pldatsup | timestamp | NO | |
| plstdval | numeric(10,4) | NO | |
| plpurval | numeric(8,2) | YES | |
| plqtyrec | numeric(10,3) | YES | |
| plstatus | char(1) | YES | |
| pladref | char(30) | YES | |
| plshipto | numeric(4) | YES | |
| plqtyinv | numeric(10,3) | YES | |
| plrapnb | integer | YES | |
| pllastrap | timestamp | YES | |
| plsalhead | numeric(6) | YES | |
| plsalline | numeric(4) | YES | |
| plinvclot | char(1) | YES | |
| pldatrec | timestamp | YES | |
| pltransfered | char(1) | YES | |
| plrcio | char(1) | YES | |
| plcmnt | long varchar(32767) | YES | |
| plprorig | char(1) | YES | |
| plpurreqcode | numeric(6) | YES | |
| plpurreqline | numeric(4) | YES | |
| plqtyrectarif | numeric(12,3) | YES | |
| plrist | numeric(5,2) | YES | |
| plval | numeric(10,4) | YES | |
| plenvoy | char(1) | YES | |
| plcontract | numeric(6) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| itempurl | items |
| purhead | purhead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| purline | toreception |

