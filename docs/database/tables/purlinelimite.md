# Table: purlinelimite

## Description
Achats/Purchasing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| pllcode | numeric(6) | NO | |
| pllline | numeric(4) | NO | |
| pllitem | char(20) | NO | |
| pllqtyord | numeric(10,3) | NO | |
| pllqtyreq | numeric(10,3) | NO | |
| plluomord | char(2) | NO | |
| plluomconv | numeric(16,10) | NO | |
| plldatreq | timestamp | YES | |
| plldatsup | timestamp | YES | |
| pllstatus | char(1) | YES | |
| plladref | char(30) | YES | |
| pllshipto | numeric(4) | YES | |
| pllrapnb | integer | YES | |
| plllastrap | timestamp | YES | |
| pllsalhead | numeric(6) | YES | |
| pllsalline | numeric(4) | YES | |
| plldatrec | timestamp | YES | |
| pllrcio | char(1) | YES | |
| pllcmnt | long varchar(32767) | YES | |
| pllenvoy | char(1) | YES | |
| pllcontract | numeric(6) | YES | |

