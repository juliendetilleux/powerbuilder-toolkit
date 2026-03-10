# d_stock_id_mod4_print

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
         items.itname,   
         items.itdefaultlot,   
         items.itum,   
         lots.lofreezdate,   
         IF isnull(items.itisfrozen,'') <> 'Y' THEN
			isnull(itfreezable, '')
		ELSE
			'Y'
		ENDIF as itisfrozen,
		IF isnull((select ppvalue from progparam where ppcode = 'FREEZART'), '') <> '1' THEN
			isnull((select ppvalue from progparam where ppcode = 'FREEZABLE'), '')
		ELSE
			'1'
		ENDIF as FREEZART ,
		isnull((select adresses.adname from adresses where adresses.adcode = lots.loadcode),'') as adname ,
		isnull(lots.lofreeze, '') as lofreeze ,
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
| lots_lofreezdate |
| itisfrozen |
| freezart |
| adname |
| lofreeze |
| lots_locontopend |

