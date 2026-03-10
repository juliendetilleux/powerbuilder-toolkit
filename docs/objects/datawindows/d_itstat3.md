# d_itstat3

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT itstat3.iscode3,   
         itstat3.isdesc  
    FROM itstat3  
   WHERE ( itstat3.iscode = :Selected_itstat1 ) AND  
		( itstat3.iscode2 = :Selected_itstat2 ) AND  
         ( itstat3.iscode3 <> '  ' )   
ORDER BY itstat3.iscode3 ASC   

```

## Colonnes
| Colonne |
|---------|
| iscode3 |
| isdesc |

