# d_adressrate_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc  
    FROM adresses,   
         adresrate  
   WHERE ( adresrate.arcode = adresses.adcode ) and  
         ( ( adresses.adcust = 'Y' ) AND  
         ( adresses.adactiv = 'Y' ) ) AND   
         adresses.adcode not in ('#########C','#########R','#########S')   
ORDER BY adresses.adcode ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adadr1 |
| adzip |
| adloc |

