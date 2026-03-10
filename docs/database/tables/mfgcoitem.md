# Table: mfgcoitem

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mccode | numeric(6) | NO | |
| mcitem | char(20) | NO | |
| mcreqty | numeric(12,3) | YES | |
| mcmfgqty | numeric(12,3) | YES | |
| mclotmfg | char(30) | YES | |
| mcexpdat | timestamp | YES | |
| mclotprt | char(30) | YES | |
| mccostf | numeric(12,4) | YES | |
| mcnqualf | numeric(12,4) | YES | |
| mcmfgcost | numeric(12,4) | YES | |
| mcbackf | numeric(1) | YES | |
| mcbaseitqtypc | numeric(5,2) | YES | |
| mcbaseitcostpc | numeric(5,2) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| mfghead | mfghead |

