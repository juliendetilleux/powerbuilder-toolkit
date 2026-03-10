# ds_table_stat

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT sys.systable.table_name,   
         sys.systable.count  
    FROM sys.systable   
WHERE  creator = 1 and table_name not like 'pbc%'  and count > 0
order by count desc 

```

## Colonnes
| Colonne |
|---------|
| table_name |
| count |

