# Table: monitplan

## Description
Planning

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mpcode | numeric(6) | NO | |
| mpname | varchar(30) | YES | |
| mpcmnt | long varchar(32767) | YES | |
| mpcreadate | timestamp | YES | |
| mpcreauser | varchar(8) | YES | |
| mpmodifdate | timestamp | YES | |
| mpmodifuser | varchar(8) | YES | |
| mpactif | char(1) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| monitplan | monitplanline |

