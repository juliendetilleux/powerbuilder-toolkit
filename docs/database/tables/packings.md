# Table: packings

## Description
Emballages/Packaging

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| pkcode | char(4) | NO | |
| pkname | char(30) | YES | |
| pkactiv | char(1) | YES | |
| pklength | numeric(4) | YES | |
| pkwidth | numeric(4) | YES | |
| pkheight | numeric(4) | YES | |
| pkweight | numeric(5,2) | YES | |
| pkstdcost | numeric(10,4) | YES | |
| pkdefconv | numeric(7,2) | YES | |
| pkdefsalimcpt | numeric(4) | YES | |
| pkdefpurimcpt | numeric(4) | YES | |
| pkitemin | char(20) | YES | |
| pkitemout | char(20) | YES | |
| pkimptyp | char(1) | YES | |
| pktype | char(1) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| packings | conssale |
| packings | itempack |

