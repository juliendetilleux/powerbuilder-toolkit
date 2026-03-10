# d_bcd_lot_list2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select 
	locode, 
	lostock,
	loexpdat
from 
	lots
where 
	loitem = :as_itemcode and
	lostock <> 0
order by 
	locode
```

## Colonnes
| Colonne |
|---------|
| locode |
| lostock |
| loexpdat |

