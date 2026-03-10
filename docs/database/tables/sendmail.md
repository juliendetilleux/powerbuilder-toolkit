# Table: sendmail

## Description
Email

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| smidcode | integer | NO | |
| smsender | varchar(100) | NO | |
| smsender_name | varchar(1000) | YES | |
| smserver | varchar(1000) | YES | |
| smport | integer | YES | |
| smtimeout | integer | YES | |
| smrecipient | varchar(2000) | NO | |
| smcc | varchar(2000) | YES | |
| smbcc | varchar(200) | YES | |
| smsubject | varchar(2000) | NO | |
| smmessage | long varchar(32767) | YES | |
| smmessage_html | long varchar(32767) | YES | |
| smmessage_send | long binary | YES | |
| smfile | long varchar(32767) | YES | |
| smstatut | integer | YES | |
| smdatesend | timestamp | YES | |
| smxperror | integer | YES | |
| smerrorcode | integer | YES | |
| smerrortext | long varchar(32767) | YES | |

