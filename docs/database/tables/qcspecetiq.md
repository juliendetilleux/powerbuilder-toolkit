# Table: qcspecetiq

## Description
Qualite/Quality Control

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| qeitem | char(20) | NO | |
| qetyp | char(1) | NO | |
| qeadcode | char(10) | NO | |
| qeversn | numeric(4) | NO | |
| qeline | numeric(4) | NO | |
| qenbetiq | numeric(3) | YES | |
| qecmnt | varchar(120) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| qcspechead | qcspechead |

