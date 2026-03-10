# Table: turnhead

## Description
Tournees/Rounds

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| thid | numeric(3) | NO | |
| thdesc | varchar(20) | YES | |
| thactiv | char(1) | YES | |
| tlcmnt | varchar(120) | YES | |
| thday_inteval | integer | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| turnhead | turn_prev |

