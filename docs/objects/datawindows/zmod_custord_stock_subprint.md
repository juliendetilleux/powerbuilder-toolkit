# zmod_custord_stock_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT stocks.stlot,   
         lots.lostatus,   
         stocks.stloc,   
         stocks.stqty,   
         items.itum,   
         lots.loexpdat,   
         items.itdefaultlot  
    FROM lots,   
         stocks,   
         items  
   WHERE ( stocks.stlot = lots.locode ) and  
         ( items.itcode = lots.loitem ) and  
         ( ( stocks.stitem = :SelItem ) AND  
         ( stocks.stqty > 0 ) AND  
         ( lots.lostatus in ('A', 'P') ) AND  
         ( lots.loexpdat > today(*) ) )   
ORDER BY lots.loexpdat ASC   

```

## Colonnes
| Colonne |
|---------|
| stocks_stlot |
| lots_lostatus |
| stocks_stloc |
| stocks_stqty |
| items_itum |
| lots_loexpdat |
| items_itdefaultlot |

