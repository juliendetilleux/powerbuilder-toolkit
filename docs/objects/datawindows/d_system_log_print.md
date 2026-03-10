# d_system_log_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT histojob.hjdatim,   
         histojob.hjjob,   
         histojob.hjuser,   
         histojob.hjcomment  
    FROM histojob  
   WHERE histojob.hjdatim >= :Startdat   
ORDER BY histojob.hjdatim DESC   

```

## Colonnes
| Colonne |
|---------|
| hjdatim |
| hjjob |
| hjuser |
| hjcomment |

