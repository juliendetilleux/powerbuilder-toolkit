# Table: srvcentity

## Description
Service/Maintenance

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| secode | char(8) | NO | |
| seactiv | char(1) | YES | |
| sename | char(30) | YES | |
| seloc | char(30) | YES | |
| secrit1 | numeric(4) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| srvcentity | srvccycle |
| srvcentity | srvcrqhead |

