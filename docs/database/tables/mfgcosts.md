# Table: mfgcosts

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mccode | numeric(6) | NO | |
| mctype | char(1) | NO | |
| mcseq | numeric(4) | NO | |
| mcitem | char(20) | NO | |
| mcqalloc | numeric(12,3) | NO | |
| mcqreal | decimal(20,12) | NO | |
| mcvalloc | decimal(20,12) | NO | |
| mcvreal | decimal(20,12) | NO | |
| mcqty | numeric(12,3) | YES | |
| mcum | char(20) | YES | |
| mccoeff | numeric(3) | YES | |
| mcresponsable | char(50) | YES | |
| mcnbr | numeric(2) | YES | |
| mcctrl | char(1) | YES | |
| mcstarthour | time | YES | |
| mcendhour | time | YES | |
| mcfinish | timestamp | YES | |
| mcpaid | numeric(12) | NO | |
| mctask | char(4) | YES | |

