# Table: qcctrlhead

## Description
Qualite/Quality Control

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| qhctrlid | numeric(8) | NO | |
| qhitem | char(20) | YES | |
| qhtyp | char(1) | YES | |
| qhadcode | char(10) | YES | |
| qhversn | numeric(3) | YES | |
| qhlot | char(30) | YES | |
| qhactiv | char(1) | YES | |
| qhcmnt | varchar(120) | YES | |
| qhcreadat | timestamp | YES | |
| qhcreausr | char(50) | YES | |
| qhappro | char(1) | YES | |
| qhapprousr | char(50) | YES | |
| qhapprodat | timestamp | YES | |
| qhordno | numeric(6) | YES | |
| qhordlin | numeric(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| qcctrlhead | qcctrlline |

