# zd_adresses_palet_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         adresses.adtva,   
         adresses.adtel,   
         adresses.adfax,   
         adresses.admail  
    FROM adresses  
   WHERE adresses.adcode = :ras_AdId    

```

## Colonnes
| Colonne |
|---------|
| adname |
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adcountr |
| adtva |
| adtel |
| adfax |
| admail |

