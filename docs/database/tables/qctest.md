# Table: qctest

## Description
Qualite/Quality Control

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| qttestid | char(8) | NO | |
| qtactiv | char(1) | YES | |
| qtname | varchar(30) | YES | |
| qtcmnt | varchar(60) | YES | |
| qttyp | char(1) | YES | |
| qtum | char(10) | YES | |
| qtnameext | varchar(50) | YES | |
| qtshowext | char(1) | YES | |
| qtshowsum | char(1) | YES | |
| qtlabo | char(1) | YES | |
| qtchoiceid | numeric(6) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| qctest | qcctrlline |
| qctest | qcspecline |

