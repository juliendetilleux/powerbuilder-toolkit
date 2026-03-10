# dd_qry_adresses

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
 SELECT 1,
		adresses.adcode,   
         adresses.adname,   
         adresses.adactiv,   
         adresses.adcust,   
         adresses.adsupp  
    FROM adresses  
   WHERE adcode= '##########'


union all

  SELECT 2,
		adresses.adcode,   
         adresses.adname,   
         adresses.adactiv,   
         adresses.adcust,   
         adresses.adsupp  
    FROM adresses  
   WHERE adcode not in ('#########C','#########R','#########S','##########')   



ORDER BY 1 ASC, 2 ASC   

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| adcode |
| adname |
| adactiv |
| adcust |
| adsupp |

