# d_stock_lot_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itstock,   
         items.italloc,   
         lots.locode,   
         lots.lostatus,   
         lots.lostock,   
         lots.loalloc,   
         lots.loexpdat,   
         stocks.stloc,   
         stocks.stqty,   
         stocks.stalloc,   
         items.itum,   
         items.itdefaultlot,   
         items.itcat,   
         lots.loorgcode  
    FROM items,   
         lots,   
         stocks  
   WHERE ( lots.loitem = items.itcode ) and  
         ( items.itcode = stocks.stitem ) and  
         ( stocks.stlot = lots.locode ) and  
         ( ( items.itcode like :Selected_item ) AND  
         ( stocks.stlot like :Selected_lot ) AND  
         ( stocks.stqty <> 0 ) ) AND
		( lots.lost like :lots_wc ) 
ORDER BY items.itcode ASC,   
         lots.locode ASC,   
         stocks.stloc ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itstock |
| items_italloc |
| lots_locode |
| lots_lostatus |
| lots_lostock |
| lots_loalloc |
| lots_loexpdat |
| stocks_stloc |
| stocks_stqty |
| stocks_stalloc |
| items_itum |
| items_itdefaultlot |
| items_itcat |
| lots_loorgcode |

