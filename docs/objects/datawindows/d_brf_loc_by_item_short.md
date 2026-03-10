# d_brf_loc_by_item_short

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select distinct 
	stloc, 
	sum ( stqty) - sum (stalloc) as disponible 
from 
	stocks 
where 
	(stqty -stalloc) > 0 and 
	stqty > 0 and 
	stitem = :itemcode
group by 
	stloc 
order by 
	stloc
```

## Colonnes
| Colonne |
|---------|
| stloc |
| disponible |

