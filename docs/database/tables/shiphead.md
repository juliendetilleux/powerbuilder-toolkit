# Table: shiphead

## Description
Expedition/Shipping

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| shcode | numeric(8) | NO | |
| shcust | char(10) | NO | |
| shshipto | numeric(4) | NO | |
| shdate | timestamp | NO | |
| shprint | char(1) | YES | |
| shcomment | long varchar(32767) | YES | |
| shprseq | numeric(4) | YES | |
| shpalnbr | numeric(3) | YES | |
| shgroweight | numeric(8,3) | YES | |
| shreservation | varchar(20) | YES | |
| shexpedi | char(1) | YES | |
| shmccode | varchar(10) | YES | |
| shclot | char(1) | YES | |
| shcreauser | char(50) | YES | |
| sh_tosend_wms | numeric(1) | NO | |
| sh_sended_wms | timestamp | YES | |
| shchassis | varchar(17) | YES | |
| shregistre | varchar(20) | YES | |
| shmarque | varchar(25) | YES | |
| shdatereg | timestamp | YES | |
| shkm | numeric(6) | YES | |
| shcash | numeric(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| adresses001 | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| shiphead | invoiceline |
| shiphead | shipline |

