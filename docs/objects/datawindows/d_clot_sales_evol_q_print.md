# d_clot_sales_evol_q_print

- **Type**: DataWindow
- **Style**: Group
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
 SELECT clotfinitad.cdperiod as chperiod,   
		sum(clotfinitad.cdval) as chsal 
	 FROM clotfinitad, adresses  
	WHERE clotfinitad.cdtyp = 'S' AND 
		clotfinitad.cdadid = adresses.adcode 
 GROUP BY chperiod  
 ORDER BY chperiod ASC 
```

## Colonnes
| Colonne |
|---------|
| chperiod |
| chsal |

