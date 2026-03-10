# d_cash_item_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode, items.itname 
    FROM items
   WHERE isnull( items.itstat1, '  ' ) = :as_itstat1 AND
		isnull( items.itstat2, '  ' ) = isnull( :as_itstat2, '  ' ) AND
		isnull( items.itstat3, '  ' ) = isnull( :as_itstat3, '  ' ) 
ORDER BY items.itname ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |

