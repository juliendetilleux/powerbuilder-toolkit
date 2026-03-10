# Table: filetoallocate

## Description
Emplacements/Locations

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fa_id | integer | NO | |
| fa_filename | varchar(128) | NO | |
| fa_date | timestamp | NO | |
| fa_user | varchar(50) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| users | users |

## Referencee par
| FK | Table enfant |
|----|-------------|
| filetoallocate | filetoallocate_line |

