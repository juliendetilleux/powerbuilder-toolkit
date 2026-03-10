# Table: workcenters

## Description
Travail/Work orders

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| wccode | char(8) | NO | |
| wcname | char(30) | NO | |
| wcactiv | char(1) | NO | |
| wccost | numeric(8,4) | YES | |
| wccal | char(6) | YES | |
| wccrit | char(1) | YES | |
| wccolor | numeric(8) | YES | |
| wcmacfix | numeric(10,4) | YES | |
| wcmacprop | numeric(10,4) | YES | |
| wcmonday | numeric(6,2) | YES | |
| wctuesday | numeric(6,2) | YES | |
| wcwednesday | numeric(6,2) | YES | |
| wcthursday | numeric(6,2) | YES | |
| wcfriday | numeric(6,2) | YES | |
| wcsaturday | numeric(6,2) | YES | |
| wcsunday | numeric(6,2) | YES | |
| wcdptid | numeric(2) | YES | |
| wcadvsched | char(1) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| calender | calhead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| workcenters | activities |
| workcenters | link_machine_pdc |
| fk_workcenter | machinehead |
| wccode | mfgwcreqs |

