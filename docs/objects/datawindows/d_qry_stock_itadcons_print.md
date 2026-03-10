# d_qry_stock_itadcons_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname, 
         items.itstock,
         items.itowner,
         adresses.adname,  
         ( items.itstdpur * items.itstock ) As val  
    FROM items,
         adresses  
   WHERE ( items.itowner = :ras_AdId ) And
         ( items.itcons = 'Y' ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( items.itstock > 0 ) And
         ( items.itowner = adresses.adcode )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| items_itstock |
| items_itowner |
| adresses_adname |
| val |

