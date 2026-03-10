# d_stock_id_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         items.itname,   
         items.itum,   
         lots.lolotctrl,   
         lots.lofreezdate,   
         isnull(items.itisfrozen,'') as itisfrozen,
		isnull((select ppvalue from progparam where ppcode = 'FREEZART'), '') as FREEZART 
    FROM lots,   
         items  
   WHERE ( items.itcode = lots.loitem ) and  
         ( ( lots.locode = :Selected_lot  ) )    

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_loitem |
| items_itname |
| items_itum |
| lots_lolotctrl |
| lots_lofreezdate |
| itisfrozen |
| freezart |

