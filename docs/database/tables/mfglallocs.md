# Table: mfglallocs

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mlcode | numeric(6) | NO | |
| mlitemseq | numeric(5) | NO | |
| mlline | numeric(5) | NO | |
| mlstatus | char(1) | NO | |
| mlitem | char(20) | NO | |
| mlbomqty | numeric(12,3) | NO | |
| mllallocqty | numeric(12,3) | NO | |
| mlpallocqty | numeric(12,3) | YES | |
| mlissuedqty | numeric(12,3) | YES | |
| mlpallocseq | numeric(4) | YES | |
| mlcomment | char(60) | YES | |
| mlpalloctyp | char(1) | YES | |
| mlctrl | char(1) | YES | |
| mldelalloc | numeric(12,3) | YES | |
| mlwcreqs | numeric(4) | YES | |
| mloneemp | char(1) | YES | |
| mlloc | char(8) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| itemmfga | items |
| mfghead | mfghead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| mfglallocs | mfglbatch |

