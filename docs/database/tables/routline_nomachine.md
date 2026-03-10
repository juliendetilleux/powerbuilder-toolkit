# Table: routline_nomachine

## Description
Gammes/Routing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| rmrlcode | varchar(20) | NO | |
| rmrltype | char(1) | NO | |
| rmrlline | numeric(4) | NO | |
| rmmcid | integer | NO | |
| rmallow | char(1) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| machine | machine |
| routline | routline |

