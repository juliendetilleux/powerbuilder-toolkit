# Table: srvcrqmat

## Description
Matieres/Materials

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| smid | numeric(6) | NO | |
| smline | numeric(3) | NO | |
| smtypit | char(1) | YES | |
| smitem | char(20) | YES | |
| smqtyorig | numeric(12,3) | YES | |
| smqtyreal | numeric(12,3) | YES | |
| smcost | numeric(8,2) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| srvcrqhead | srvcrqhead |

