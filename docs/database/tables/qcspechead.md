# Table: qcspechead

## Description
Qualite/Quality Control

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| qhitem | char(20) | NO | |
| qhtyp | char(1) | NO | |
| qhadcode | char(10) | NO | |
| qhversn | numeric(4) | NO | |
| qhactiv | char(1) | YES | |
| qhadtyp | char(1) | YES | |
| qhcmnt | varchar(120) | YES | |
| qhcreadat | timestamp | YES | |
| qhcreausr | char(50) | YES | |
| qhmodifdat | timestamp | YES | |
| qhmodifusr | char(50) | YES | |
| qhapplydat | timestamp | YES | |
| qhappro | char(1) | YES | |
| qhapprodat | timestamp | YES | |
| qhapprousr | char(50) | YES | |
| qhsmplref | numeric(8,3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| qcspechead | qcspecetiq |

