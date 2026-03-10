# Table: shipto

## Description
Expedition/Shipping

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| stcode | char(10) | NO | |
| stseq | numeric(4) | NO | |
| stdesc | char(30) | YES | |
| stactiv | char(1) | YES | |
| stmain | char(1) | YES | |
| stadr1 | char(30) | YES | |
| stadr2 | char(30) | YES | |
| stzip | char(10) | YES | |
| stloc | char(25) | YES | |
| stcountr | char(20) | YES | |
| stshipdays | numeric(4) | YES | |
| stcmnt | char(50) | YES | |
| sttel | char(20) | YES | |
| stfax | char(20) | YES | |
| stmail | char(50) | YES | |
| stcontact | char(30) | YES | |
| stcustomdoc | char(1) | YES | |
| steancode | char(13) | YES | |
| stdefturn | numeric(3) | YES | |
| stshipcmnt | varchar(40) | YES | |
| sttype | char(1) | YES | |
| stshipadcode | char(10) | YES | |
| stshipseq | numeric(4) | YES | |
| stuseadrescomp | char(1) | YES | |
| stadrescomp1 | varchar(100) | YES | |
| stadrescomp2 | varchar(100) | YES | |
| stadrescomp3 | varchar(100) | YES | |
| stadrescomp4 | varchar(100) | YES | |
| stadrescomp5 | varchar(100) | YES | |
| stadrescomp6 | varchar(100) | YES | |
| stref | varchar(60) | YES | |
| stturnbyday | char(1) | YES | |
| stturnmonday | numeric(3) | YES | |
| stturntuesday | numeric(3) | YES | |
| stturnwednesday | numeric(3) | YES | |
| stturnthursday | numeric(3) | YES | |
| stturnfriday | numeric(3) | YES | |
| stturnsaturday | numeric(3) | YES | |
| stturnsunday | numeric(3) | YES | |
| stcountrid | char(2) | YES | |
| ststateid | varchar(5) | YES | |
| stapbcode | char(20) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| shipto | shipto |

## Referencee par
| FK | Table enfant |
|----|-------------|
| shipto | shipto |

