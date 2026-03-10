# d_brf_ship_prepare2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
select salline.slcode,
	salline.slline,
	salline.slitem,
	salline.slqtyreq - isnull(salline.slqtyalloc,0) - isnull(salline.slqtyreal,0) as toprep,
	salline.slqtyreq,
	items.itname,
	items.itlocpic,
	matallocs.maallocseq,
	matallocs.malot,
	matallocs.maloc,
	matallocs.maallocqty,
	items.itloc 
from 
	items, salhead, salline join matallocs on matallocs.matyp = 'X' and
															matallocs.macode = salline.slcode and
															matallocs.maitemseq = salline.slline 
where 
	salline.slcode = :al_salorder AND
	salline.slcode = salhead.shcode AND
	salline.slitem = items.itcode AND
	salline.slstatus < '5' AND
	toprep > 0 
  
UNION ALL  
  
select salline.slcode,
	salline.slline,
	salline.slitem,
	salline.slqtyreq - isnull(salline.slqtyalloc,0) - isnull(salline.slqtyreal,0) as toprep,
	salline.slqtyreq,
	items.itname,
	items.itlocpic,
	null,
	null,
	null,
	null,
	items.itloc
from 
	items, salhead, salline
where 
	salline.slcode = :al_salorder AND
	salline.slcode = salhead.shcode AND
	salline.slitem = items.itcode AND
	salline.slstatus < '5' AND
	toprep > 0  

order by
	7, 
	1,
	2,
	8 
```

## Colonnes
| Colonne |
|---------|
| salline_slcode |
| salline_slline |
| salline_slitem |
| toprep |
| salline_slqtyreq |
| items_itname |
| items_itlocpic |
| matallocs_maallocseq |
| matallocs_malot |
| matallocs_maloc |
| matallocs_maallocqty |
| items_itloc |

