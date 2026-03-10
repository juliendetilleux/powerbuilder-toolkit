# d_qry_stock_adrcons_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname, 
         count(adresses.adcode) As Nbr,  
         sum( items.itstdpur * items.itstock) as Val 
    FROM adresses,   
         items  
   WHERE ( adresses.adcode = items.itowner ) and  
         ( items.itcons = 'Y' ) AND  
         ( items.itactiv = 'Y' ) And
         ( items.itstock > 0 ) 
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
| cnbr |
| cval |

