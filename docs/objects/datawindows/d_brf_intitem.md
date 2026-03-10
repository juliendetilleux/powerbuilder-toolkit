# d_brf_intitem

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,
			lots.lostatus,   
         	lots.loexpdat,   
         	stocks.stqty,   
         	stocks.stalloc,   
         	stocks.stloc,
			items.itdefaultlot,
			if lots.locode = items.itdefaultlot then 0 else 1 endif as glot
    FROM lots,   
         	stocks,
			items 
  WHERE lots.locode = stocks.stlot AND
		stocks.stitem = :as_item and
		stocks.stitem = items.itcode and
		stocks.stqty <> 0 
 ORDER BY stocks.stqty desc 
```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| lots_loexpdat |
| stocks_stqty |
| stocks_stalloc |
| stocks_stloc |
| items_itdefaultlot |
| glot |

