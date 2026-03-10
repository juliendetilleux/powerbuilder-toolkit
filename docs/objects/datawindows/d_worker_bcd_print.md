# d_worker_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT workers.wkcode,   
         workers.wkname  
    FROM workers  
   WHERE workers.wkcode = :as_wkcode   
ORDER BY workers.wkname ASC   

```

## Colonnes
| Colonne |
|---------|
| wkcode |
| wkname |

