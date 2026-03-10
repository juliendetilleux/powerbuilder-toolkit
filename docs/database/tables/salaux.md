# Table: salaux

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sacode | numeric(6) | NO | |
| saline | numeric(4) | NO | |
| sastatus | char(1) | NO | |
| sadesc | varchar(30) | NO | |
| saqty | numeric(10,3) | NO | |
| saum | char(2) | YES | |
| sastdval | numeric(10,4) | NO | |
| sasalval | numeric(8,2) | NO | |
| sadatcrea | timestamp | NO | |
| safileref | numeric(4) | YES | |
| safileline | numeric(4) | YES | |
| safatype | numeric(3) | NO | |
| saexp | char(1) | YES | |
| sacomment | varchar(32767) | YES | |
| sacurrconv2 | numeric(10,6) | YES | |
| sasort | numeric(4) | YES | |
| sashipto | numeric(3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| salhead | salhead |

