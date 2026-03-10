# d_lot_from_loorg

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
SELECT 
	stitem, 
	stlot, 
	stqty - stalloc as allouable, 
	stloc, 
	loorgcode,
	loexpdat
FROM 
	stocks, 
	lots   , 
	items,  
	locations
where 
	stlot = locode and 
	stitem = itcode and 
	stloc = lccode and 
	lostatus = 'A' and
	loexpdat > today() and
	stqty - stalloc > 0 and
	loorgcode = :as_org  and 
	itactiv = 'Y' and 
	stqty > 0 and
	lcactiv = 'Y' and
	lcexp = 'Y'  and
	lc_exclprepsimpl = 'N'
order by 
	2, 4

```

## Colonnes
| Colonne |
|---------|
| stocks_stitem |
| stocks_stlot |
| allouable |
| stocks_stloc |
| lots_loorgcode |
| lots_loexpdat |

