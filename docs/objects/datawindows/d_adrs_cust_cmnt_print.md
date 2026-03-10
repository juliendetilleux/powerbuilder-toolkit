# d_adrs_cust_cmnt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,   
         comments.coline,   
         comments.cocmnt  
    FROM adresses,   
         comments  
   WHERE ( comments.cokey = adresses.adcode ) and  
         ( ( comments.cotype = 'CMAD' ) AND  
         ( adresses.adcust = 'Y' ) AND  
         ( adresses.adactiv = 'Y' ) ) AND  
			adresses.adcode not in ('#########C','#########R','#########S')  
ORDER BY adresses.adname ASC,   
         comments.coline ASC   

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |
| comments_coline |
| comments_cocmnt |

