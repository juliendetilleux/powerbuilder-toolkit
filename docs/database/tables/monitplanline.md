# Table: monitplanline

## Description
Planning

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mlcode | numeric(6) | NO | |
| mlline | numeric(3) | NO | |
| mltyp | varchar(20) | YES | |
| mllocal | numeric(3) | YES | |
| mlequipmnt | numeric(3) | YES | |
| mlsamplepoint | numeric(3) | YES | |
| mlopprod | varchar(8) | YES | |
| mltemp | numeric(3) | YES | |
| mlwarninglimit | numeric(5) | YES | |
| mlactionlimit | numeric(5) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| monitplan | monitplan |

