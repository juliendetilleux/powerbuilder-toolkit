# d_item_plgroup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,
			isnull(items.itmccode, '##########') as itmccode   
    FROM items  
   WHERE items.itplgroup = 0    

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itmccode |

