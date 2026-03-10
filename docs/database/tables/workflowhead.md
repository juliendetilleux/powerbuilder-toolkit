# Table: workflowhead

## Description
Travail/Work orders

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| whid | numeric(6) | NO | |
| whname | char(50) | NO | |
| whcmnt | long varchar(32767) | YES | |
| whactive | char(1) | NO | |
| whcreadate | timestamp | NO | |
| whcreator | char(50) | NO | |
| whmoddate | timestamp | YES | |
| whmoduser | char(50) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| workflowhead | workflowline |
| workflowhead001 | workflowline |
| workflowhead002 | workflowline |
| workflowhead003 | workflowline |

