# Table: machinehead

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mhmachineid | char(10) | NO | |
| mhname | varchar(30) | NO | |
| mhactive | char(1) | NO | |
| mhwccode | char(8) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| fk_workcenter | workcenters |

