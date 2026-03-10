# Table: matreq

## Description
Matieres/Materials

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mritem | char(20) | NO | |
| mrreqdat | timestamp | NO | |
| mrorigin | char(1) | NO | |
| mrqty | numeric(12,3) | NO | |
| mrrun | numeric(4) | NO | |
| mrinter | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| itemmreq | items |

