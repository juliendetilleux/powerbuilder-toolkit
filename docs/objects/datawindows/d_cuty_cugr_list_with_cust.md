# d_cuty_cugr_list_with_cust

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select 
	adcode, 
	adname, 
	adlegalform, 
	clname, 
	clcode, 
	clsort
from 
	adresses, 
	choiceline, 
	linkadch
where 
	adcode = lac_adcode and 
	lac_chcode = clcode and 
	lac_clline = clline and
	clcode in ('CUTY','CUGR') and 
	adactiv = 'Y' and
	clactiv = 'Y' and 
	lac_isornot = 1
order by 
	clcode, 
	clsort,
    adname
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adlegalform |
| choiceline_clname |
| choiceline_clcode |
| choiceline_clsort |

