# d_dsh_loc

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select 
	stloc,
	sum( stocks.stqty ) as stqty
from stocks 
where stitem = :itcode
group by stloc
 having stqty <> 0
```

## Colonnes
| Colonne |
|---------|
| stloc |
| stqty |

