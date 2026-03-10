# Table: smtcode

## Description
SmartCode

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| sccode | char(4) | NO | |
| scactiv | char(1) | NO | |
| scdesc | char(20) | YES | |
| scum | char(2) | YES | |
| sctype | char(1) | YES | |
| scitem | char(20) | YES | |
| sc_cat | integer | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| smt_category | smt_category |

