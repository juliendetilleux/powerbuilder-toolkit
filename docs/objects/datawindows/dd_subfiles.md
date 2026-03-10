# dd_subfiles

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
SELECT flcode,
		flline,
		fldesc,   
		fldesc2,
		string(flcode) + '-' + string(flline) as comp_pk ,
		if flline = 1 then 1 else 2 endif as orderby
	FROM fileline   
	WHERE flstatus < 8 and
			fileline.flstatus < '9'  
	ORDER BY flcode, orderby, fldesc

```

## Colonnes
| Colonne |
|---------|
| flcode |
| flline |
| fldesc |
| fldesc2 |
| comp_pk |
| orderby |

