# Table: purinvline

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| plcode | numeric(6) | NO | |
| plline | numeric(4) | NO | |
| pltype | char(1) | NO | |
| plitem | char(20) | YES | |
| plordno | numeric(6) | YES | |
| plordlin | numeric(3) | YES | |
| plqty | numeric(12,3) | YES | |
| plpurval | numeric(8,2) | YES | |
| pltva | numeric(4,2) | YES | |
| pltvaval | numeric(8,2) | YES | |
| pltotval | numeric(8,2) | YES | |
| plcomment | varchar(120) | YES | |
| plcptpur | char(12) | YES | |
| plcptanal | char(12) | YES | |
| plnetval | numeric(8,2) | YES | |
| plbastva | numeric(8,2) | YES | |
| plrealtva | numeric(8,2) | YES | |
| plcptanal2 | char(12) | YES | |
| plcptanal3 | char(12) | YES | |
| plmfg | numeric(6) | YES | |
| plmfgtype | char(1) | YES | |
| plmfgcostline | numeric(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| mfghead | mfghead |
| purinvhead | purinvhead |

