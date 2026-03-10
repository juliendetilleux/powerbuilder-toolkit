# d_brf_lot_locext_forsales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stloc,
			locations.lcautoalloc,
			stocks.stqty ,
			stocks.stqty - stocks.stalloc as dispo 
    FROM stocks,
			locations  
   WHERE ( stocks.stlot = :Sel_lot ) AND  
			( locations.lccode = stocks.stloc ) AND 
         ( stocks.stqty > 0 OR locations.lcautoalloc = 'G' )   
		and//FZ0240
		lcactiv = 'Y' and
		lcexp = 'Y' 

```

## Colonnes
| Colonne |
|---------|
| stloc |
| lcautoalloc |
| stocks_stqty |
| dispo |

