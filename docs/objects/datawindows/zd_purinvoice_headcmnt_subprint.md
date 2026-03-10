# zd_purinvoice_headcmnt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT Purinvhead.picomment
	FROM Purinvhead
	WHERE Purinvhead.picode = :an_purinvoice
```

## Colonnes
| Colonne |
|---------|
| picomment |

