# Table: linkitad

## Description
Table de liaison

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| lktyp | char(1) | NO | |
| lkitem | char(20) | NO | |
| lkadcode | char(10) | NO | |
| lkcode | numeric(8) | NO | |
| lkcurr | char(3) | NO | |
| lkactiv | char(1) | NO | |
| lkum | char(2) | YES | |
| lkumconv | numeric(16,10) | YES | |
| lkadref | char(30) | YES | |
| lkleadtime | numeric(4) | YES | |
| lkmain | char(1) | YES | |
| lkremval | numeric(4) | YES | |
| lkcmnt | varchar(50) | YES | |
| lkadref2 | varchar(60) | YES | |
| lkean | varchar(20) | YES | |
| lkconsinfo | varchar(20) | YES | |
| lkean1 | varchar(20) | YES | |
| lkean2 | varchar(20) | YES | |
| lkean3 | varchar(20) | YES | |
| lkeanref | char(1) | YES | |
| lkeanref2 | char(1) | YES | |
| lkeanref3 | char(1) | YES | |
| lkean2conv | numeric(9,4) | YES | |
| lkean3conv | numeric(9,4) | YES | |
| lklblproc | char(8) | YES | |
| lkfinalprice | numeric(12,4) | YES | |
| lkcol2 | numeric(5) | YES | |
| lkprocescrates | char(1) | YES | |
| lkpcratesregroup | char(1) | YES | |
| lkcratesweight | char(1) | YES | |
| lkumean2 | char(2) | YES | |
| lkumean3 | char(2) | YES | |
| lkwithcertif | char(1) | YES | |
| lkdatecertif | timestamp | YES | |
| lknbdaycertif | numeric(3) | YES | |
| lkcalcdluo | char(1) | YES | |
| lklblproc2 | char(8) | YES | |
| lkcheckpc | char(1) | YES | |
| lkuseeaninv | numeric(1) | YES | |
| lkcustint | char(1) | YES | |
| lkcreadate | timestamp | YES | |
| lkmoddate | timestamp | YES | |
| lkctrqtymin | numeric(10,3) | NO | |
| lkstdsalod | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| currency | currencies |
| itemlk | items |

