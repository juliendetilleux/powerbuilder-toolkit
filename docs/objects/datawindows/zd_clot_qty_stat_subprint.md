# zd_clot_qty_stat_subprint

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imdesc as smname,
			itstat2.isdesc as adname,
			items.itname,
			clotfinit.ciperiod as ihcptper,
			clotfinit.ciqty as ilsalval
     FROM clotfinit,
		items,
		itstat1,
		itstat2
  WHERE clotfinit.cityp = 'S' AND
		clotfinit.ciperiod > :period1 AND
		clotfinit.ciperiod <= :period2 AND
		items.itcode = clotfinit.ciitem AND
		items.itstat1 = itstat1.imcode AND	
		itstat1.imcode = itstat2.iscode AND	
		items.itstat2 = itstat2.iscode2 AND
		clotfinit.cival <> 0
 ORDER BY smname,
		adname,
		items.itname,
		ihcptper
```

## Colonnes
| Colonne |
|---------|
| smname |
| adname |
| itname |
| ilsalval |

