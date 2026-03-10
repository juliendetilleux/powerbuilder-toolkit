# dd_grcash_for_cashlist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT clname,
			 cast(clline as char(10)) as clline
    FROM choiceline
   WHERE choiceline.clcode = 'GRCH' and
				choiceline.clactiv = 'Y'
	order by clsort

```

## Colonnes
| Colonne |
|---------|
| clname |
| clline |

