# d_itadcons

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         ( items.itstdpur * items.itstock ) As val  
    FROM items  
   WHERE ( items.itowner = :ras_AdId ) And
         ( items.itcons = 'Y' ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( items.itstock > 0 )   
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| val |

