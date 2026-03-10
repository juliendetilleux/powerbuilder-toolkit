# dd_fileline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT fileline.fldesc,   
         fileline.flcode,   
         fileline.flline,
			if fileline.flline = 1 then 1 else 2 endif orderby 
    FROM fileline  
   WHERE fileline.flcode = :an_file  and
			fileline.flstatus < '9'  
  ORDER BY orderby, fileline.fldesc 

```

## Colonnes
| Colonne |
|---------|
| fldesc |
| flcode |
| flline |
| orderby |

