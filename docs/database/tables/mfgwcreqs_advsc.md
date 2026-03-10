# Table: mfgwcreqs_advsc

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| maid | integer | NO | |
| maschednum | numeric(3) | NO | |
| mamwcode | numeric(6) | NO | |
| mamwline | numeric(4) | NO | |
| mamachine | integer | YES | |
| mastart | timestamp | NO | |
| maduration | numeric(10) | NO | |
| matype | numeric(1) | NO | |
| macmnt | varchar(512) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| machine | machine |
| mfgwcreqs | mfgwcreqs |

