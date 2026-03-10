# Table: matallocs

## Description
Matieres/Materials

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| matyp | char(1) | NO | |
| macode | numeric(6) | NO | |
| maitemseq | numeric(5) | NO | |
| maallocseq | numeric(4) | NO | |
| maitem | char(20) | NO | |
| malot | char(30) | NO | |
| maloc | char(8) | NO | |
| maallocqty | numeric(12,3) | NO | |
| maissuedqty | numeric(12,3) | YES | |
| ma2issueqty | numeric(12,3) | YES | |
| masscc | varchar(18) | YES | |
| macustalloc | numeric(12,3) | YES | |
| malotorgcode | varchar(20) | YES | |
| malotdlc | timestamp | YES | |
| mauser | char(50) | YES | |
| maallocdat | timestamp | YES | |
| maissued_trf | numeric(12,3) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| locations | locations |

