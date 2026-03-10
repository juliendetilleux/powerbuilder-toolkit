# Table: salaudit

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| saslcode | numeric(6) | NO | |
| saslline | numeric(4) | NO | |
| satyp | char(1) | NO | |
| sauser | char(50) | NO | |
| saaudit | varchar(80) | YES | |
| sadate | timestamp | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| salline | salline |

