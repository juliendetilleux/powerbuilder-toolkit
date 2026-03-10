# Table: users

## Description
Utilisateurs

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| uscode | char(50) | NO | |
| usactiv | char(1) | NO | |
| usname | char(30) | NO | |
| uspswrd | char(50) | NO | |
| uslastcon | timestamp | YES | |
| ustyp | char(1) | YES | |
| usacttyp | char(1) | YES | |
| Ussalesman | char(1) | YES | |
| uscost | numeric(8,4) | YES | |
| ustsacces | char(1) | YES | |
| usmailsign | varchar(200) | YES | |
| ussuppcrm | char(1) | YES | |
| usrtfmailsign | long binary | YES | |
| usprefmail | char(1) | YES | |
| uspurchaser | char(1) | YES | |
| ustel | char(20) | YES | |
| usfax | char(20) | YES | |
| usmail | char(50) | YES | |
| usgsm | char(20) | YES | |
| ustitle | char(30) | YES | |
| uslastsync | timestamp | YES | |
| usentry | char(1) | YES | |
| usmodifustmsh | char(1) | YES | |
| usprefdi | char(1) | YES | |
| usoldpswrd | char(50) | YES | |
| uslastchange | timestamp | YES | |
| uslang | char(2) | YES | |
| usprep | char(1) | YES | |
| usbomright | char(1) | YES | |
| usmcdo | varchar(10) | YES | |
| usmcdo2 | varchar(10) | YES | |
| ussmcode | char(8) | YES | |
| usdefaultmcdo | varchar(10) | NO | |
| usnewdesign | char(1) | YES | |
| usrtimer | numeric(4) | YES | |
| ustrfoutlook | numeric(1) | NO | |
| uscolor | integer | YES | |
| ustranslate | bit | NO | |
| usmod | char(1) | YES | |
| usbrf | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| salesman | salesman |

## Referencee par
| FK | Table enfant |
|----|-------------|
| users | Cells_cmnt |
| users | ETI_BPOST |
| users | ETI_BPS |
| users | fileAJ |
| users | fileMFG |
| users | filetoallocate |

