# Table: SUBLINE_SAL

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sl_id | integer | NO | |
| sl_sh_id_fk_SUBHEAD | integer | NO | |
| sl_itcode_fk_items | char(20) | NO | |
| sl_slcode_fk_salline | numeric(6) | YES | |
| sl_slline_fk_salline | numeric(4) | YES | |
| sl_datecrea | timestamp | NO | |
| sl_usercrea_fk_users | char(50) | NO | |
| sl_datemodif | timestamp | YES | |
| sl_usermodif_fk_users | char(50) | YES | |
| sl_createcmd | numeric(1) | NO | |
| sl_activ | char(1) | NO | |
| sl_qty | numeric(10,3) | NO | |
| sl_cmnt | varchar(1024) | NO | |
| sl_accode | numeric(2) | YES | |
| sl_aarespons | varchar(50) | YES | |
| sl_actionauto | char(1) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| salline | salline |
| SUBHEAD | SUBHEAD |

## Referencee par
| FK | Table enfant |
|----|-------------|
| SUBLINE_SAL | SUBLINE_REP |

