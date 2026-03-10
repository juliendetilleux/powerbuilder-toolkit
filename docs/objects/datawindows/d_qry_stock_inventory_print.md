# d_qry_stock_inventory_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		locations.lccode,
		lots.locode,
		lots.loorgcode,
		lots.loexpdat,
		stocks.stqty,
		items.itdefaultlot,
		items.itum 
    FROM items,   
         locations,   
         lots,   
         stocks  
   WHERE lots.loitem = items.itcode AND
		stocks.stitem = items.itcode AND
		stocks.stloc = locations.lccode AND
		stocks.stlot = lots.locode AND
		stocks.stqty <> 0 AND 
		stocks.stloc like :as_loc 
    

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| locations_lccode |
| lots_locode |
| lots_loorgcode |
| lots_loexpdat |
| stocks_stqty |
| items_itdefaultlot |
| items_itum |

