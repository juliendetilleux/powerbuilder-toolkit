# Table: qcspecline

## Description
Qualite/Quality Control

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| qlitem | char(20) | NO | |
| qltyp | char(1) | NO | |
| qladcode | char(10) | NO | |
| qlversn | numeric(4) | NO | |
| qlline | numeric(4) | NO | |
| qlseq | numeric(4) | YES | |
| qltestid | char(8) | YES | |
| qldesc | varchar(60) | YES | |
| qlmin | numeric(13,6) | YES | |
| qlmax | numeric(13,6) | YES | |
| qlum | char(10) | YES | |
| qlcmnt | varchar(60) | YES | |
| qlrsltrange | char(1) | YES | |
| qlshowext | char(1) | YES | |
| qlshowsum | char(1) | YES | |
| qlreplicat | char(1) | YES | |
| qlchoiceid | numeric(6) | YES | |
| qlexectyp | char(1) | YES | |
| qlexecqty | numeric(12,3) | YES | |
| qlexecdat | timestamp | YES | |
| qlexecqtyrem | numeric(12,3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| qctest | qctest |

