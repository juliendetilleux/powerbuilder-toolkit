# d_adrcons

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         sum( items.itstdpur * items.itstock) as Val 
    FROM adresses,   
         items  
   WHERE ( adresses.adcode = items.itowner ) and  
         ( items.itcons = 'Y' ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( items.itstock <> 0 )   
     AND  items.itcode not like '###########%'
GROUP BY adresses.adcode,   
         adresses.adname  
ORDER BY adresses.adcode ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| cval |

