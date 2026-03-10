# d_label_shipnotice_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adname,   
         shipto.stdesc,
         shipto.stadr1,
			shipto.stadr2,   
         shipto.stzip,   
         shipto.stloc,   
         shipto.stcountr,   
         shipto.sttel,   
         shipto.stfax  
    FROM shipto,   
         adresses,   
         shiphead  
   WHERE ( shipto.stcode = adresses.adcode ) and  
         ( shiphead.shcust = shipto.stcode ) and  
         ( shiphead.shshipto = shipto.stseq ) and  
         ( shiphead.shcust = adresses.adcode ) and  
         ( ( shiphead.shcode = :ran_shipmnt ) )
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| stdesc |
| stadr1 |
| stadr2 |
| stzip |
| stloc |
| stcountr |
| shipto_sttel |
| shipto_stfax |

