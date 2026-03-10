# d_file_with_actions

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
SELECT DISTINCT Filehead.fhcode,
		Filehead.fhdesc,
		Filehead.fhstatus
	FROM Filehead,
		Adrsactions
	WHERE filehead.fhcode = adrsactions.aafileref
		AND Adrsactions.aaactiondate BETWEEN :adt_start AND :adt_stop
order by Filehead.fhcode
```

## Colonnes
| Colonne |
|---------|
| fhcode |
| fhdesc |
| fhstatus |

