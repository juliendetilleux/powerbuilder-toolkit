# d_stock_id_mod5_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         lots.lorecdat,   
         lots.loreldat,   
         lots.loexpdat,   
         lots.loqcstatus,   
         lots.loorgcode,   
         items.itcode,   
         isnull((select lkadref2 from linkitad where lktyp = 'S' and lkitem = itcode and lkadcode = :as_adcode), items.itname) as itname,   
         items.itdefaultlot,   
         items.itum,
		locontopend  
    FROM items,   
         lots  
   WHERE ( lots.loitem = items.itcode ) and  
         ( ( lots.locode = :as_locode ) )    

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| lots_lorecdat |
| lots_loreldat |
| lots_loexpdat |
| lots_loqcstatus |
| lots_loorgcode |
| items_itcode |
| items_itname |
| items_itdefaultlot |
| items_itum |
| lots_locontopend |

