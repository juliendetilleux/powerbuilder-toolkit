# Table: shippack

## Description
Expedition/Shipping

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| spcode | numeric(8) | NO | |
| spline | numeric(3) | NO | |
| sppackid | char(4) | YES | |
| spqty | numeric(5) | YES | |
| spinv | char(1) | YES | |
| spcurrconv2 | numeric(10,6) | YES | |
| spshipline | numeric(4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| shipline | shipline |

