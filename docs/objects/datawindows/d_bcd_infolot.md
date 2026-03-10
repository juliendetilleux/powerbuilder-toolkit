# d_bcd_infolot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         lots.lostatus,   
         lots.loexpdat  
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
| lots_lostatus |
| lots_loexpdat |

