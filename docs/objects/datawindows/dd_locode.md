# dd_locode

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode  
    FROM lots,   
         items  
   WHERE ( lots.loitem = :ras_itcode ) AND  
         ( lots.loitem = items.itcode ) AND  
		( lots.lostock > 0 ) AND
         ( items.itactiv = 'Y' )  
            

```

## Colonnes
| Colonne |
|---------|
| locode |

