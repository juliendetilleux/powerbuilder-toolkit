# d_items_of

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		items.ititemof,
		it.itname as itemofname
     FROM items, 
		items as it
   WHERE items.ititemof = it.itcode
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_ititemof |
| items_itemofname |

