# d_qry_stock_qty_chassis

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         stocks.stalloc,   
         lots.lorecdat,   
         lots.lolotctrl,   
         lots.loorgcode,   
         lots.loexpdat,   
         items.itdefaultlot,   
         lots.lorcpoum,
		lots.lost  
    FROM lots,   
         stocks,   
         items  
   WHERE ( stocks.stlot = lots.locode ) and  
         ( items.itcode = lots.loitem ) and  
         ( ( lots.loitem = :Selected_item ) AND  
         ( lots.lostock <> 0 ) )   
ORDER BY lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| stocks_stloc |
| stocks_stqty |
| stocks_stalloc |
| lots_lorecdat |
| lots_lolotctrl |
| lots_loorgcode |
| lots_loexpdat |
| items_itdefaultlot |
| lots_lorcpoum |
| lots_lost |

