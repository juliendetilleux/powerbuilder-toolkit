# d_lblproc_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT lblproc.lpcode,   
         lblproc.lpdesc,   
         lblproc.lpprocess,   
         lblproc.lpetiq,   
         lblproc.lpbcd1,   
         lblproc.lpbcd2,   
         lblproc.lpbcd3  
    FROM lblproc   
  WHERE lblproc.lpcode = :as_lpcode 
```

## Colonnes
| Colonne |
|---------|
| lpcode |
| lpdesc |
| lpprocess |
| lpetiq |
| lpbcd1 |
| lpbcd2 |
| lpbcd3 |

