# d_brf_lot_by_loc_and_item_short

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select distinct 
	stlot, 
	sum ( stqty) - sum (stalloc) as disponible ,
	loexpdat
from 
	stocks , lots
where 
	(stqty -stalloc) > 0 and 
	stqty > 0 and
	stlot = locode and 
	stitem = :itemcode and
	stloc = :loc
group by 
	stlot , loexpdat
order by 
	loexpdat, stlot
```

## Colonnes
| Colonne |
|---------|
| stocks_stlot |
| disponible |
| lots_loexpdat |

