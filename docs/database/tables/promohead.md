# Table: promohead

## Description
Promotions

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| phcode | numeric(4) | NO | |
| phname | varchar(30) | YES | |
| phactiv | char(1) | YES | |
| phstartdate | timestamp | YES | |
| phstopdate | timestamp | YES | |
| phrateid | numeric(5) | YES | |
| phdesc | varchar(200) | YES | |
| phminsale | decimal(10,2) | YES | |
| phrissale | decimal(5,2) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| promohead | linkadpromo |
| promohead | promoline |

