# d_adressmemo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.admemo,   
         adresses.adtel  
    FROM adresses  
   WHERE adresses.adcode = :Selected_ad    

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adcountr |
| admemo |
| adtel |

