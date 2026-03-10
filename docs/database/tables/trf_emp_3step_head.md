# Table: trf_emp_3step_head

## Description
Transferts

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| teid | integer | NO | |
| teloc_dest | varchar(20) | NO | |
| tedatreq | timestamp | NO | |
| testatus | numeric(1) | NO | |
| tecomment | varchar(1024) | YES | |
| tecreauser | varchar(20) | NO | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| trf_emp_3step_head | trf_emp_3step_line |

