# Table: FLXR_CUSTOMIZATION

## Description
FlexReport

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| id | unsigned int | NO | |
| dataobject | varchar(50) | NO | |
| name | varchar(50) | NO | |
| ref_syntax | long binary | YES | |
| cur_syntax | long binary | YES | |
| sub_report | integer | NO | |
| name_sub_report | varchar(50) | NO | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| FK_FLXR_AFFGLOBAL_REF_CUSTOM | FLXR_AFF_GLOBAL |
| FK_FLXR_AFFGROUP_REF_CUSTOM | FLXR_AFF_GROUP |
| FK_AFFUSER_REF_CUSTOM | FLXR_AFF_USER |

