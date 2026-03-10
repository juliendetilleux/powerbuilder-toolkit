# dd_cashlist_by_grch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
SELECT clname,
	    isnull(clcval2, '0') as clcval2
    FROM choiceline
   WHERE choiceline.clcode = 'CASH' and 
				clactiv = 'Y' and 
				isnull(clcval2,'0') like :as_grcash
	order by cast( clname as numeric)
```

## Colonnes
| Colonne |
|---------|
| clname |
| clcval2 |

