# Table: profohead

## Description
Proforma

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| phcode | numeric(6) | NO | |
| phcust | char(10) | NO | |
| phdate | timestamp | NO | |
| phcurr | char(3) | YES | |
| phtvaref | char(15) | YES | |
| phpaymnt | char(1) | YES | |
| phsalval | numeric(8,2) | YES | |
| phtvaval | numeric(8,2) | YES | |
| phtotval | numeric(8,2) | YES | |
| phcomment | long varchar(32767) | YES | |
| phexpiry | timestamp | YES | |
| phtyptva | char(1) | YES | |
| phcurconv | numeric(10,6) | YES | |
| phdlvt | char(1) | YES | |
| phpaymode | numeric(2) | NO | |
| phactiv | char(1) | YES | |
| phrist | numeric(4,2) | YES | |
| phesct | numeric(4,2) | YES | |
| phristval | numeric(8,2) | YES | |
| phesctval | numeric(8,2) | YES | |
| phorderrist | char(1) | YES | |
| phmccode | varchar(10) | YES | |
| phstatus | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| profohead | profotva |

