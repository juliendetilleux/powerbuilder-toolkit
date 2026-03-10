# d_truck_sort

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT adresses.adname,   
         shipto.stdesc,   
         max( truckline.tlsort) as tlsort,   
         adresses.adcode,   
         shipto.stseq 
    FROM adresses,   
         salhead,   
         salline,   
         shipto,   
         truckline  
   WHERE ( salhead.shcust = adresses.adcode ) and  
         ( salline.slcode = salhead.shcode ) and  
         ( salline.slshipto = shipto.stseq ) and  
         ( truckline.tlsalhead = salhead.shcode ) and  
         ( truckline.tlsalline = salline.slline ) and  
         ( adresses.adcode = shipto.stcode ) and  
         ( ( truckline.tlcode = :ran_Truck ) )   
 group by adresses.adname,   
         shipto.stdesc,   
         adresses.adcode,   
         shipto.stseq 
ORDER BY  tlsort  ASC

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| shipto_stdesc |
| truckline_tlsort |
| adresses_adcode |
| shipto_stseq |

