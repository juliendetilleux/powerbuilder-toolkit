# d_left2alloc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select
	shcode,
	shcust,
	adname,
	slitem,
	itname,
	slqtyreq,
	slqtyalloc
from 
	salhead,
	adresses,
	salline,
	items
where
	salhead.shcust = adresses.adcode and
	salhead.shcode = salline.slcode and
	salline.slitem = items.itcode and
	salhead.shcode = :comnum

```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salhead_shcust |
| adresses_adname |
| salline_slitem |
| items_itname |
| salline_slqtyreq |
| salline_slqtyalloc |

