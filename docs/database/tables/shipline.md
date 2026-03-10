# Table: shipline

## Description
Expedition/Shipping

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| slcode | numeric(8) | NO | |
| slline | numeric(4) | NO | |
| slsalorder | numeric(6) | YES | |
| slsalline | numeric(4) | YES | |
| slitem | char(20) | NO | |
| slitcustnam | char(30) | YES | |
| sllot | char(30) | YES | |
| slqty | numeric(12,3) | NO | |
| slinv | char(1) | YES | |
| slinvno | numeric(6) | YES | |
| slcomment | long varchar(32767) | YES | |
| slqcip | numeric(8) | YES | |
| sltransfered | char(1) | YES | |
| slcustpc | numeric(12,3) | YES | |
| slaction | numeric(6) | YES | |
| slbascost | numeric(12,4) | YES | |
| slxtrcost | numeric(12,4) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |
| salline | salline |
| shiphead | shiphead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| shipline | shippack |
| shipline | ssccline |

