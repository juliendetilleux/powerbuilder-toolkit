# Table: workflowline

## Description
Travail/Work orders

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| wlhead | numeric(6) | NO | |
| wlline | numeric(3) | NO | |
| wlseq | numeric(4) | NO | |
| wlname | char(50) | YES | |
| wloperationtype | char(1) | NO | |
| wllinkclose | numeric(6) | YES | |
| wllinkmodif | numeric(6) | YES | |
| wllinkcreate | numeric(6) | YES | |
| wlcreadate | timestamp | NO | |
| wlcreator | char(50) | NO | |
| wlmoddate | timestamp | YES | |
| wlmoduser | char(50) | YES | |
| wlactiontype | numeric(2) | YES | |
| wlusertype | char(1) | YES | |
| wluser | char(50) | YES | |
| wldesc | varchar(30) | YES | |
| wloffsetdays | numeric(3) | NO | |
| wltiming | numeric(4) | NO | |
| wltable | char(60) | YES | |
| wlfield | char(60) | YES | |
| wlvalue | numeric(3) | YES | |
| wlsql | varchar(200) | YES | |
| wlchoicedate | char(1) | YES | |
| wlexecuteimmediate | char(1) | YES | |
| wlitem | char(20) | YES | |
| wlquoteval | numeric(9,2) | YES | |
| wllinkfail | numeric(6) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| activities | activities |
| workflowhead | workflowhead |
| workflowhead001 | workflowhead |
| workflowhead002 | workflowhead |
| workflowhead003 | workflowhead |

