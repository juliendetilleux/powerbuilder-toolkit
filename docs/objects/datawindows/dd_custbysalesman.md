# dd_custbysalesman

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT adresses.adcode,   
			adresses.adname,
			adresses.adgrading  
    FROM adresses
   WHERE ( adresses.adcust = 'Y' ) AND  
         ( adresses.adactiv = 'Y' ) AND  
         ( adresses.adcode not in ('#########C','#########R','#########S')  )   and
		(adresses.adsalesman IN ( :as_salesman ))
ORDER BY adresses.adname,
				adresses.adcode   

```

## Colonnes
| Colonne |
|---------|
| adcode |
| adname |
| adgrading |

