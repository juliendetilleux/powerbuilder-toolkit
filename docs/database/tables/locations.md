# Table: locations

## Description
Emplacements/Locations

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| lccode | char(8) | NO | |
| lcactiv | char(1) | YES | |
| lcmrpexcl | char(1) | YES | |
| lcautoalloc | char(1) | YES | |
| lcintext | char(1) | YES | |
| lcadcode | char(10) | YES | |
| lcifdefault | char(1) | YES | |
| lcseq | numeric(4) | YES | |
| lcexp | char(1) | YES | |
| lcpriority | numeric(3) | YES | |
| lcgroup | numeric(3) | YES | |
| lctypbuffer | char(1) | YES | |
| lclocprod | char(1) | YES | |
| lc_xmiss | char(1) | YES | |
| lc_exclprepsimpl | char(1) | YES | |
| lc_inactit | char(1) | NO | |
| lcdesc | varchar(30) | NO | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| locations | adresses |
| locations | histostock |
| fk_loc | linkitloc |
| locations | matallocs |
| locations | stocks |
| locations | transact_with_confirm |
| locations001 | transact_with_confirm |

