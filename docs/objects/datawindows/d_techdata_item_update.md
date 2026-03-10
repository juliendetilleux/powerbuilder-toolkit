# d_techdata_item_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT itcode,
			it_decompose_td
    FROM items
   WHERE items.itcode = :Selected_item 
 
```

## Colonnes
| Colonne |
|---------|
| itcode |
| it_decompose_td |

