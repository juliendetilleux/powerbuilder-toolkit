# d_linkitloc2_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as data_exist,
			 linkitloc.llqtymin,
			 linkitloc.llqtymax,
			 linkitloc.llitem,
			 linkitloc.llloc,
			 items.itcode,
			 items.itname,
			items.itum 
    FROM linkitloc,items
   WHERE linkitloc.llloc = items.itlocpic AND
			   items.itcode = linkitloc.llitem

UNION ALL

SELECT 0,
			 0,
			 0,
			  items.itcode,
			 items.itlocpic,
			 items.itcode,
			 items.itname,
			items.itum 
FROM items
WHERE items.itcat = 'S' AND
			items.itactiv = 'Y' AND
			isnull(items.itlocpic,'') <> '' AND
			items.itcode not in ( SELECT linkitloc.llitem FROM linkitloc WHERE linkitloc.llloc = items.itlocpic)  
order by 2 desc ,4,3 desc


```

## Colonnes
| Colonne |
|---------|
| data_exist |
| linkitloc_llqtymin |
| linkitloc_llqtymax |
| linkitloc_llitem |
| linkitloc_llloc |
| items_itcode |
| items_itname |
| items_itum |

