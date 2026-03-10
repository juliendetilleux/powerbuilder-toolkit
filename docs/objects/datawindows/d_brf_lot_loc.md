# d_brf_lot_loc

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
			( locations.lccode = stocks.stloc ) 
         // AND  ( dispo > 0 or locations.lcautoalloc = 'G' )    

```

## Colonnes
| Colonne |
|---------|
| stloc |
| lcautoalloc |
| stocks_stqty |
| dispo |

