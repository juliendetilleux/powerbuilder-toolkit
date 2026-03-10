# d_item_bomhead_coitem_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct 1 as typ,
		items.itcode as item,
		items.itname as itname 
    FROM items
   WHERE (items.ittyp = 'M' OR items.italttyp = 'M') AND
		items.itactiv = 'Y' AND
		items.itmfggeneric = 'Y'
     
 UNION ALL
    
  SELECT distinct 2 as typ,
		bomcoitem.bccoitem as item,
		(select items.itname from items where items.itcode = item) as itname
    FROM items,
		bomcoitem
   WHERE items.itcode = bomcoitem.bccode AND
		(items.ittyp = 'M' OR items.italttyp = 'M') AND
		items.itactiv = 'Y' AND
		items.itmfggeneric = 'Y'
    
ORDER BY 1, 2

```

## Colonnes
| Colonne |
|---------|
| typ |
| item |
| itname |

