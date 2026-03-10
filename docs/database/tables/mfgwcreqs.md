# Table: mfgwcreqs

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mwcode | numeric(6) | NO | |
| mwline | numeric(4) | NO | |
| mwwccode | char(8) | NO | |
| mwstartdat | timestamp | NO | |
| mwstopdat | timestamp | NO | |
| mwreqmac | decimal(20,12) | NO | |
| mwreqlab | decimal(20,12) | NO | |
| mwreamac | decimal(20,12) | NO | |
| mwrealab | decimal(20,12) | NO | |
| mw2rpmac | numeric(20,12) | YES | |
| mw2rplab | decimal(20,12) | YES | |
| mwoffset | numeric(6,2) | YES | |
| mwoper | char(60) | YES | |
| mwtask | char(4) | YES | |
| mwfinish | char(1) | YES | |
| mwdatefinish | timestamp | YES | |
| mwcoeff | numeric(12,4) | YES | |
| mwqty | numeric(12,3) | YES | |
| mwum | char(20) | YES | |
| mwresponsable | char(50) | YES | |
| mwnbr | numeric(2) | YES | |
| mwctrl | char(1) | YES | |
| mwtype | char(1) | YES | |
| mwstarthour | time | YES | |
| mwendhour | time | YES | |
| mwblocmes | char(1) | YES | |
| mwblocqty | char(1) | YES | |
| mwstartdatestep | timestamp | YES | |
| mwstartuserstep | varchar(8) | YES | |
| mwsubc | char(1) | YES | |
| mwsuppid | varchar(10) | YES | |
| mwadvscsort | integer | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| wccode | workcenters |

## Referencee par
| FK | Table enfant |
|----|-------------|
| mfgwcreqs | advsched_lastdel |
| mfgwcreqs | mfgwcreqs_advsc |

