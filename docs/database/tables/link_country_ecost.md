# Table: link_country_ecost

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| lce_id | integer | NO | |
| lce_cocode | char(2) | YES | |
| lce_ecid | integer | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| country | country |
| extracosts | extracosts |

