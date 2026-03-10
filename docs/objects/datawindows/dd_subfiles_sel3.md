# dd_subfiles_sel3

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT fileline.fldesc,   
         fileline.flline,
			if fileline.flline = 1 then 1 else 2 endif as orderby  
    FROM fileline  
   WHERE fileline.flcode = :ran_filecode    and
			fileline.flstatus < '8'   
  ORDER BY orderby, fileline.fldesc

```

## Colonnes
| Colonne |
|---------|
| fldesc |
| flline |
| orderby |

