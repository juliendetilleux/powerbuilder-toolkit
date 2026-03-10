# d_brf_qtyemp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT lots.lostatus,   
         lots.loexpdat,   
         stocks.stqty,   
         stocks.stalloc,   
         stocks.stloc  
    FROM lots,   
         stocks   
  WHERE lots.locode = stocks.stlot AND
		lots.locode = :as_lot and
		stocks.stqty <> 0 
 ORDER BY stocks.stqty desc 
```

## Colonnes
| Colonne |
|---------|
| lots_lostatus |
| lots_loexpdat |
| stocks_stqty |
| stocks_stalloc |
| stocks_stloc |

