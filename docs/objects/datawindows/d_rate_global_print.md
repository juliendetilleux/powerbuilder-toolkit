# d_rate_global_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adristcust,   
         adresses.adristrate,   
         adresses.adsalesman,   
         salesman.smname,   
         adresses.adgrcust,
			salesman.smcode  
    FROM adresses,   
         salesman  
   WHERE ( adresses.adsalesman = salesman.smcode ) and  
         ( ( adresses.adactiv = 'Y' ) AND  
         ( adresses.adcust = 'Y' ) ) AND 
         adresses.adcode not in ('#########C','#########R','#########S')     
ORDER BY salesman.smname ASC,   
         adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adristcust |
| adresses_adristrate |
| adresses_adsalesman |
| salesman_smname |
| adresses_adgrcust |
| salesman_smcode |

