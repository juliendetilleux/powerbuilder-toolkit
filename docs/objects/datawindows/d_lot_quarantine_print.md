# d_lot_quarantine_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT lots.loitem,   
         items.itname,   
         lots.locode,   
         lots.lorecdat,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.loexpdat ,
         lots.loorgcode,
	    lots.loavailabledate as avalaible_Date  
    FROM lots,   
         items  
   WHERE ( items.itcode = lots.loitem ) and  
         ( ( lots.lostatus = :Selected_status ) AND  
         ( lots.lostock > 0 ) )   
ORDER BY avalaible_Date ASC,
		lots.lorecdat ASC,   
         lots.loitem ASC,   
         lots.locode ASC      


```

## Colonnes
| Colonne |
|---------|
| lots_loitem |
| itname |
| lots_locode |
| lots_lorecdat |
| lots_lostock |
| lots_lostatus |
| items_itum |
| lots_loexpdat |
| lots_loorgcode |
| avalaible_date |

