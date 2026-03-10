# Table: qcctrlline

## Description
Qualite/Quality Control

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| qlctrlid | numeric(8) | NO | |
| qlline | numeric(4) | NO | |
| qlseq | numeric(4) | YES | |
| qltestid | char(8) | YES | |
| qldesc | varchar(60) | YES | |
| qlmin | numeric(13,6) | YES | |
| qlmax | numeric(13,6) | YES | |
| qlum | char(10) | YES | |
| qlcmnt | varchar(60) | YES | |
| qlrsltval | numeric(13,6) | YES | |
| qlrslt | char(1) | YES | |
| qltestdat | timestamp | YES | |
| qlusrid | char(50) | YES | |
| qlvalid | char(1) | YES | |
| qlrsltrange | char(1) | YES | |
| qlflag | char(1) | YES | |
| qlchoiceid | numeric(6) | YES | |
| qlchoiceseq | numeric(3) | YES | |
| qlchdesc | varchar(30) | YES | |
| qlshowext | char(1) | YES | |
| qlshowsum | char(1) | YES | |
| qlexectyp | char(1) | YES | |
| qlchoicestr | char(1) | NO | |
| qldescnum | varchar(20) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| qcctrlhead | qcctrlhead |
| qctest | qctest |

