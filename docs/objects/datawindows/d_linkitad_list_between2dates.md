# d_linkitad_list_between2dates

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
Select 
	lktyp,
	lkitem,
	itname,
	lkadcode,
	adname,
	adlegalform,
	lkcreadate,
	lkmoddate
from
	linkitad,
	items,
	adresses
where
	lkitem = itcode and
	lkadcode = adcode 
order by 
	adname,
	lktyp,
	itname 
	
	
```

## Colonnes
| Colonne |
|---------|
| linkitad_lktyp |
| linkitad_lkitem |
| items_itname |
| linkitad_lkadcode |
| adresses_adname |
| adresses_adlegalform |
| linkitad_lkcreadate |
| linkitad_lkmoddate |

