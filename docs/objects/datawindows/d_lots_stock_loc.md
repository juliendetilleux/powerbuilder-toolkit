# d_lots_stock_loc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         stocks.stqty,   
         stocks.stalloc,   
         items.itstdpur,   
         items.itum,   
         items.itdefaultlot,
         lots.loorgcode  
    FROM items,   
         locations,   
         stocks,   
         lots  
   WHERE ( items.itcode = stocks.stitem ) and  
         ( lots.loitem = items.itcode ) and  
         ( stocks.stloc = locations.lccode ) and  
         ( stocks.stitem = lots.loitem ) and  
         ( stocks.stlot = lots.locode ) and  
         ( ( locations.lccode = :location ) AND  
         ( items.itcode = :Item ) ) AND  
         stocks.stqty <> 0   
ORDER BY lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| stocks_stqty |
| stocks_stalloc |
| items_itstdpur |
| items_itum |
| items_itdefaultlot |
| lots_loorgcode |

