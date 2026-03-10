# Table: machine

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mcid | integer | NO | |
| mcode | varchar(30) | NO | |
| mcname | varchar(50) | NO | |
| mcpriority | numeric(4) | NO | |
| mcactiv | char(1) | NO | |
| mccells | integer | YES | |
| mccal | varchar(6) | YES | |
| mchourly | integer | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| calhead | calhead |
| cells | CELLS |
| hourly | hourly |

## Referencee par
| FK | Table enfant |
|----|-------------|
| machine | hourly_day |
| machine | link_machine_pdc |
| machine | mfgwcreqs_advsc |
| machine | routline_nomachine |

