# Table: routline

## Description
Gammes/Routing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| rlcode | char(20) | NO | |
| rltype | char(1) | NO | |
| rlline | numeric(4) | NO | |
| rlwccode | char(8) | NO | |
| rloffset | numeric(6,2) | NO | |
| rlmacrun | decimal(20,12) | NO | |
| rllabrun | decimal(20,12) | NO | |
| rllabval | numeric(20,12) | NO | |
| rlsetup | numeric(6,2) | YES | |
| rloper | char(60) | YES | |
| rllabfix | numeric(6,2) | YES | |
| rlmacval | numeric(20,12) | YES | |
| rltask | char(4) | YES | |
| rlctrl | char(1) | YES | |
| rltest | numeric(5) | YES | |
| rlcoeff | numeric(12,4) | YES | |
| rlum | char(20) | YES | |
| rlblocmes | char(1) | YES | |
| rlblocqty | char(1) | YES | |
| rlsubc | char(1) | YES | |
| rlsuppid | varchar(10) | YES | |
| rlcptpur | numeric(4) | YES | |
| temp_rllabrun | decimal(20,12) | YES | |
| temp_rlmacrun | decimal(20,12) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |

## Referencee par
| FK | Table enfant |
|----|-------------|
| routline | routline_nomachine |

