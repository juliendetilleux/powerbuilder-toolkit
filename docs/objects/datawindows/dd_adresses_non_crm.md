# dd_adresses_non_crm

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,   
         adresses.adgrading  
    FROM adresses  
   WHERE ( adresses.adactiv = 'Y' ) AND  
         (( adresses.adcust = 'Y' ) OR  
         ( adresses.adsupp = 'Y' ) OR  
         ( adresses.adcode = '##########' )) AND
 	      adresses.adcode not in ('#########C','#########R','#########S') 
ORDER BY adresses.adname ASC,   
         adresses.adcode ASC   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adgrading |

