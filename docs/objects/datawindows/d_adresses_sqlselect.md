# d_adresses_sqlselect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adcust,   
         adresses.adsupp,   
         adresses.adactiv,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adgrsupp,   
         adresses.adgrcust,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adtel,   
         adresses.adsalesman,
         ( select smname from salesman where smcode = adresses.adsalesman )as smname    
         , adresses.adgrading     
    FROM adresses  
   WHERE adresses.adcode not in ('#########C','#########R','#########S')
ORDER BY adresses.adcode ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adcust |
| adsupp |
| adactiv |
| adzip |
| adloc |
| adcountr |
| adtva |
| adgrsupp |
| adgrcust |
| adadr1 |
| adadr2 |
| adtel |
| adsalesman |
| smname |
| adgrading |

