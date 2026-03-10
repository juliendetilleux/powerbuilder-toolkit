# Table: except_rate_itad

## Description
Tarifs/Rates

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| er_id | integer | NO | |
| er_fk_ratehead_rhcode | numeric(5) | NO | |
| er_fk_items_itcode | char(20) | NO | |
| er_fk_adresses_adcode | char(10) | NO | |
| er_startdat | timestamp | NO | |
| er_stopdat | timestamp | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| items | items |
| ratehead | ratehead |

