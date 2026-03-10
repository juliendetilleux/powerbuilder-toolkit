# d_infosuplot

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
         lots.loorgcode,   
         lots.loadcode,   
         adresses.adname  
    FROM lots,   
         items,   
         adresses  
   WHERE ( items.itcode = lots.loitem ) and  
         ( lots.loadcode = adresses.adcode ) and  
         ( ( lots.loorgcode = :ras_lot ) AND  
         ( lots.loadcode = :ras_AdId ) ) AND  
         lots.loitem = :ras_ItId   
GROUP BY lots.loalloc,   
         items.itum,   
         items.itcode,   
         items.itname,   
         lots.loorgcode,   
         lots.loadcode,   
         adresses.adname   

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
| lots_loadcode |
| adresses_adname |

