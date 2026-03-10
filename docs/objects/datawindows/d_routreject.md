# d_routreject

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT routreject.rrcode,   
         routreject.rrtype,   
         routreject.rrcoeff,   
         routreject.rrum  
    FROM routreject  
   WHERE routreject.rrcode = :rltest    
 ORDER BY routreject.rrtype 
```

## Colonnes
| Colonne |
|---------|
| rrcode |
| rrtype |
| rrcoeff |
| rrum |

