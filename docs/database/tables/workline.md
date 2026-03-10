# Table: workline

## Description
Travail/Work orders

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| wlwkcode | char(8) | NO | |
| wldat | timestamp | NO | |
| wlstart | char(5) | NO | |
| wlend | char(5) | YES | |
| wlwrktime | numeric(18,10) | YES | |
| wltyp | char(1) | YES | |
| wlmfgid | numeric(6) | YES | |
| wlwcid | char(8) | YES | |
| wlopid | char(4) | YES | |
| wlstatus | char(1) | YES | |
| wlpos | numeric(3) | YES | |
| wlfileline | numeric(4) | YES | |
| wlseq | numeric(3) | NO | |
| wlwcreqsline | numeric(4) | YES | |

