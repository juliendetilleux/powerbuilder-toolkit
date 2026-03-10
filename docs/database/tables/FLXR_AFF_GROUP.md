# Table: FLXR_AFF_GROUP

## Description
FlexReport

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned int | NO | |
| dataobject | varchar(50) | NO | |
| id_group | unsigned int | NO | |
| id_customization | unsigned int | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| FK_FLXR_AFFGROUP_REF_CUSTOM | FLXR_CUSTOMIZATION |
| FK_FLXR_AFFGROUP_REF_GROUP | FLXR_GROUP |

