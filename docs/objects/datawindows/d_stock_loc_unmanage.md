# d_stock_loc_unmanage

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loorgcode,
		items.itcode,
		items.itname,
		lots.lostock,
		lots.lostatus,
		lots.loexpdat,
		lots.lorecdat
    FROM items,   
         stocks,   
         lots  
   WHERE stocks.stitem = items.itcode and 
         stocks.stitem = lots.loitem and  
         stocks.stlot = lots.locode and  
         stocks.stloc = :as_loc 
ORDER BY lots.loitem ASC, 
	lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_loorgcode |
| items_itcode |
| items_itname |
| lots_lostock |
| lots_lostatus |
| lots_loexpdat |
| lots_lorecdat |

