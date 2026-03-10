# d_bcd_stock_available

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
	lots.lorecdat,
	lots.loorgcode   
FROM 
	stocks join items on items.itcode = stocks.stitem 
        join lots on stocks.stlot = lots.locode
        join locations on stocks.stloc = locations.lccode 
WHERE 
	( ( lots.lostatus IN ('A','P') ) AND  
	( stavailable > 0 ) AND  
	( stocks.stitem = :Sel_item ) ) AND 
	( isnull(locations.lcexp, '') <> 'N' ) AND
	( date(lots.loexpdat) >= date(today()) )    
ORDER BY 
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
| lots_lorecdat |
| lots_loorgcode |

