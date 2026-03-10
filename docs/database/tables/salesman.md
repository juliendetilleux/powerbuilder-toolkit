# Table: salesman

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| smcode | char(8) | NO | |
| smname | varchar(30) | YES | |
| smactiv | char(1) | YES | |
| smcmnt | varchar(120) | YES | |
| smcommission | numeric(5,2) | YES | |
| sm_mail | varchar(120) | YES | |
| smbegsess | timestamp | YES | |
| smendsess | timestamp | YES | |
| smext | char(20) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| salesman | linksaus |
| salesman | users |

