# d_qc_perstatus

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         items.itname,   
         lots.lostock,   
         lots.lostatus,   
         items.itum,   
         lots.lorecdat,   
         lots.loorgcode,
	   lots.loavailabledate as avalaible_Date 
    FROM items,   
         lots  
   WHERE ( lots.loitem = items.itcode ) and  
         ( ( lots.lostock > 0 ) AND  
         ( lots.lostatus = :Selected_status ) )   
ORDER BY lots.lorecdat ASC,   
         lots.loitem ASC,   
         lots.locode ASC   

```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_loitem |
| items_itname |
| lots_lostock |
| lots_lostatus |
| items_itum |
| lots_lorecdat |
| lots_loorgcode |
| avalaible_date |

