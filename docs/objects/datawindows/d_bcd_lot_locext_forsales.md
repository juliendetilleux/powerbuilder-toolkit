# d_bcd_lot_locext_forsales

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stloc,
			locations.lcautoalloc ,
			locations.lcexp,
			stocks.stqty   
    FROM stocks,
			locations  
   WHERE ( stocks.stlot = :Sel_lot ) AND 
         ( stocks.stloc = locations.lccode ) AND 
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
| locations_lcexp |
| stocks_stqty |

