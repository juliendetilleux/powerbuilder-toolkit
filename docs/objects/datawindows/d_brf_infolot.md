# d_brf_infolot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname, 
		items.itum,  
         lots.lostatus,   
         lots.loexpdat ,
		items.itdefaultlot  
    FROM items,   
         lots  
   WHERE ( lots.loitem = items.itcode )  AND
		lots.locode = :as_lot

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| lots_lostatus |
| lots_loexpdat |
| items_itdefaultlot |

