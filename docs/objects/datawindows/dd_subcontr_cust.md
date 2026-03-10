# dd_subcontr_cust

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itowner,   
         adresses.adname  
    FROM adresses,   
         items  
   WHERE ( adresses.adcode = items.itowner ) and  
         ( ( adresses.adcode not like '#########%' ) AND  
         ( items.itcons = 'Y' ) )  
Group By items.itowner, adresses.adname

```

## Colonnes
| Colonne |
|---------|
| items_itowner |
| adresses_adname |

