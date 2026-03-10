# Table: pfobjet

## Description
Profils

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| poid | numeric(5) | NO | |
| posort | numeric(5) | YES | |
| podesc | varchar(60) | YES | |
| pogroup | char(1) | YES | |
| podefaultval | char(1) | YES | |
| poavailable | char(1) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| pfobjet | pfline |
| pfobjet | pfuseracces |

