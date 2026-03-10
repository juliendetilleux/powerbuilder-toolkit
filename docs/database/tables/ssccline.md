# Table: ssccline

## Description
SSCC (codes barres)

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| slcode | char(18) | NO | |
| sllot | char(30) | YES | |
| slqty | numeric(10,3) | YES | |
| slloc | char(8) | YES | |
| slin | char(1) | YES | |
| sl_lastmod | timestamp | YES | |
| slshiphead | numeric(8) | YES | |
| slshipline | numeric(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| shipline | shipline |

