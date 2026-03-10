# d_custnoturn_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adcode,   
         shipto.stdesc,   
         shipto.stadr1,   
         shipto.stzip,   
         shipto.stloc,
         shipto.stseq
    FROM adresses,   
         shipto  
   WHERE ( adresses.adcode = shipto.stcode ) and  
         ( adresses.adcust = 'Y' ) AND  
         ( adresses.adactiv = 'Y' ) AND  
         ( shipto.stactiv = 'Y' ) and
         ( select count(*) from turnline where tladcode= adresses.adcode and tlshipto = shipto.stseq ) = 0 and   
         adresses.adcode not in ('#########C','#########R','#########S') 
ORDER BY adresses.adname, shipto.stdesc

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adcode |
| shipto_stdesc |
| shipto_stadr1 |
| shipto_stzip |
| shipto_stloc |
| shipto_stseq |

