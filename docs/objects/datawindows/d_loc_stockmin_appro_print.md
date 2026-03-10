# d_loc_stockmin_appro_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT linkitloc.llloc, 
			  linkitloc.llitem,
			  items.itname,
			  isnull(( select sum(isnull(stocks.stqty, 0) - isnull(stocks.stalloc,0)) from stocks where stocks.stitem = items.itcode and stocks.stloc = linkitloc.llloc ),0) as currstockloc,
items.itum ,
linkitloc.llqtymin
 
    FROM linkitloc,   
			items
	WHERE items.itcode = linkitloc.llitem 											AND  
				( currstockloc <   linkitloc.llqtymin )
	ORDER BY 1,2

```

## Colonnes
| Colonne |
|---------|
| linkitloc_llloc |
| linkitloc_llitem |
| items_itname |
| currstockloc |
| items_itum |
| linkitloc_llqtymin |

