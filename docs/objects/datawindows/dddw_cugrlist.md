# dddw_cugrlist

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
select 
	clname,
	clline
from
	choiceline
where
	clcode = 'CUGR' and
	clactiv = 'Y'
order by
	clsort
```

## Colonnes
| Colonne |
|---------|
| clname |
| clline |

