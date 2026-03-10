# ds_empty

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname 
    FROM items  
   WHERE items.itcode not like '###########%'   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

