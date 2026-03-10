# d_brf_stock_loc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         stocks.stlot,   
         stocks.stqty,   
         stocks.stalloc,   
         items.itum,   
         lots.lolotctrl,   
         items.itstdpur,   
         items.itdefaultlot,   
         lots.loorgcode  
    FROM items,   
         lots,   
         stocks  
   WHERE ( stocks.stitem = items.itcode ) and  
         ( stocks.stlot = lots.locode ) and  
         ( ( stocks.stloc = :Selected_loc ) AND  
         ( stocks.stqty <> 0 ) )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| stocks_stlot |
| stocks_stqty |
| stocks_stalloc |
| items_itum |
| lots_lolotctrl |
| items_itstdpur |
| items_itdefaultlot |
| lots_loorgcode |

