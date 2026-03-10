# d_infocuslot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( lots.lostock) As Qte_Tot,   
         lots.loalloc,   
         items.itum,   
         items.itcode,   
         items.itname,   
         lots.loorgcode 
    FROM lots,   
         items  
   WHERE ( items.itcode = lots.loitem ) and  
         ( lots.loorgcode = :ras_lot ) AND  
         lots.loitem = :ras_ItId   
GROUP BY lots.loalloc,   
         items.itum,   
         items.itcode,   
         items.itname,   
         lots.loorgcode 

```

## Colonnes
| Colonne |
|---------|
| cqte_tot |
| loalloc |
| items_itum |
| items_itcode |
| items_itname |
| lots_loorgcode |

