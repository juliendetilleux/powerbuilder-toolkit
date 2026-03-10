# d_adresses_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.ADCODE ,  
         adresses.ADNAME ,  
         adresses.ADZIP ,  
         adresses.ADLOC      
    FROM adresses      
   WHERE ( adresses.ADACTIV = 'Y' ) and  
         ( adresses.ADCUST like :Selected_adcust ) and   
         ( adresses.ADSUPP like :Selected_adsupp ) AND  
         (adresses.adcode not in ('#########C','#########R','#########S'))   
```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adzip |
| adloc |

