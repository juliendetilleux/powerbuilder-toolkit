# Table: SUBHEAD

## Description
Sous-traitance

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sh_id | integer | NO | |
| sh_bom_fk_bomsubhead | integer | YES | |
| sh_cust_fk_adresses | char(10) | NO | |
| sh_mcdo_fk_adresses | char(10) | NO | |
| sh_name | varchar(60) | NO | |
| sh_datecrea | timestamp | NO | |
| sh_usercrea_fk_users | char(50) | NO | |
| sh_datemodif | timestamp | YES | |
| sh_usermodif_fk_users | char(50) | YES | |
| sh_periodicity | numeric(2) | NO | |
| sh_status | numeric(1) | NO | |
| sh_datestart | timestamp | NO | |
| sh_datestop | timestamp | NO | |
| sh_year_indexation | char(4) | NO | |
| sh_cmnt | varchar(1024) | NO | |
| sh_monthdec | numeric(2) | NO | |
| sh_typeabo | numeric(6) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| BOMSUBHEAD | BOMSUBHEAD |

## Referencee par
| FK | Table enfant |
|----|-------------|
| SUBHEAD | SUBINVOICE |
| SUBHEAD | SUBLINE_SAL |

