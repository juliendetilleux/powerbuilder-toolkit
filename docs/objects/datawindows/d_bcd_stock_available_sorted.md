# d_bcd_stock_available_sorted

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT 
	lots.locode,   
	stocks.stloc,   
	stocks.stqty - stocks.stalloc as stavailable,   
	lots.loexpdat,   
	items.itdefaultlot,
	if stocks.stloc = isnull(:as_loc,'') then 1 else 2 endif as sort,
	lots.lorecdat
FROM 
	stocks join items on items.itcode = stocks.stitem 
        join lots on stocks.stlot = lots.locode
        join locations on stocks.stloc = locations.lccode 
WHERE 
	( ( lots.lostatus IN ('A', 'P') ) AND  
	( stavailable > 0 ) AND  
	( stocks.stitem = :Sel_item ) )   
ORDER BY 
	sort,
	lots.loexpdat ASC,
	lots.lorecdat asc 

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| stocks_stloc |
| cstavailable |
| lots_loexpdat |
| items_itdefaultlot |
| csort |
| lots_lorecdat |

