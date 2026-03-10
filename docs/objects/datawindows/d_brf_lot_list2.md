# d_brf_lot_list2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select 
	locode, 
	stqty ,
	loexpdat,
	stloc
from 
	lots,
	stocks
where 
	loitem = :as_itemcode and
	stqty <> 0 And
	stlot = locode And
	stitem = loitem 
order by 
	locode
```

## Colonnes
| Colonne |
|---------|
| locode |
| stocks_stqty |
| loexpdat |
| stocks_stloc |

