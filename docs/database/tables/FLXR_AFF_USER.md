# Table: FLXR_AFF_USER

## Description
Utilisateurs

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned int | NO | |
| dataobject | varchar(50) | NO | |
| id_user | unsigned int | NO | |
| id_customization | unsigned int | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| FK_AFFUSER_REF_CUSTOM | FLXR_CUSTOMIZATION |
| FK_FLXR_AFFGROUP_REF_USER | FLXR_USER |

