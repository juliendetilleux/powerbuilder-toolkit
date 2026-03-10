# dd_customersfrcst

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adcode  
    FROM adresses  
   WHERE ( adresses.adactiv = 'Y' ) AND  
		   ( adresses.adcode not in ('#########C','#########R','#########S') ) AND 
         (( adresses.adcode = '##########' ) OR  
         ( adresses.adcust = 'Y' ))   
ORDER BY adresses.adname ASC   

```

## Colonnes
| Colonne |
|---------|
| adname |
| adcode |

