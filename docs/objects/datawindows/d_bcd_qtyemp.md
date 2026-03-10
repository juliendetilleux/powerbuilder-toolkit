# d_bcd_qtyemp

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
		lots.locode = :as_lot
 ORDER BY stocks.stloc 
```

## Colonnes
| Colonne |
|---------|
| lots_lostatus |
| lots_loexpdat |
| stocks_stqty |
| stocks_stalloc |
| stocks_stloc |

