# dd_file_sel2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT filehead.fhcode,   
         filehead.fhdesc,   
         filehead.fhadid  
    FROM filehead  
   WHERE filehead.fhstatus < '8' AND
			filehead.fhstatus > '0'   
ORDER BY filehead.fhdesc ASC   

```

## Colonnes
| Colonne |
|---------|
| fhcode |
| fhdesc |
| fhadid |

