# d_lot_not_a_print

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
         items.itum  
    FROM lots,   
         items  
   WHERE ( items.itcode = lots.loitem ) AND 
         ( lots.lostatus not in ('A', 'P') ) AND  
         ( lots.lostock <> 0 )    
ORDER BY lots.lostatus ASC,   
         lots.loitem ASC   

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

