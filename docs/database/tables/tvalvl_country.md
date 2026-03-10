# Table: tvalvl_country

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tccode | char(1) | NO | |
| tccountry | char(2) | NO | |
| tclvl | numeric(4,2) | NO | |
| tclinkcomptapratic | varchar(5) | YES | |
| tcprestalvl | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| country | country |
| tvalvl | tvalvl |

