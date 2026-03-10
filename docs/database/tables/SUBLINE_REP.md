# Table: SUBLINE_REP

## Description
Sous-traitance

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sr_id | integer | NO | |
| sr_sl_id_fk_SUBLINE_SAL | integer | NO | |
| sr_itcode_fk_items | char(20) | NO | |
| sr_datecrea | timestamp | NO | |
| sr_usercrea_fk_users | char(50) | NO | |
| sr_datemodif | timestamp | YES | |
| sr_usermodif_fk_users | char(50) | YES | |
| sr_activ | char(1) | NO | |
| sr_value | numeric(10,4) | NO | |
| sr_index | numeric(6,3) | NO | |
| sr_cmnt | varchar(1024) | NO | |
| sr_pt | char(1) | YES | |
| sr_nbrpoint | integer | YES | |
| sr_accode | numeric(2) | YES | |
| sr_nofac | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| SUBLINE_SAL | SUBLINE_SAL |

