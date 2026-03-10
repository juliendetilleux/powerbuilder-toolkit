# d_dsh_item

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select distinct
	itloc, 
	itcode, 
	itname,
	itstock,
	itsecur, 
	italloc as stalloc, 
	itpsize,
	lkadref,
	lkadref2,
	lkadcode,
	itdesc2,
	'' as items_oldname 
from items left outer join linkitad on itcode=lkitem and lkmain='Y'
where itcode like :as_item || '%'
and itactiv='Y'

union

select distinct
	itloc, 
	itcode, 
	itname,
	itstock,
	italloc as stalloc, 
	stalloc, 
	itpsize,
	lkadref,
	lkadref2,
	lkadcode,
	itdesc2  ,
	'' as items_oldname
from items left outer join linkitad on itcode=lkitem and lkmain='Y'
where itname like  '%' || :as_item || '%'
and itactiv='Y'

union

select distinct
	itloc, 
	itcode, 
	itname,
	itstock,
	itsecur, 
	italloc as stalloc, 
	itpsize,
	lkadref,
	lkadref2,
	lkadcode,
	itdesc2,
	'' as items_oldname  
from items left outer join linkitad on itcode=lkitem and lkmain='Y'
where lkadref like '%' || :as_item || '%'
and itactiv='Y'

union

select distinct
	itloc, 
	itcode, 
	itname,
	itstock,
	itsecur, 
	italloc as stalloc, 
	itpsize,
	lkadref,
	lkadref2,
	lkadcode,
	itdesc2,
	'' as items_oldname  
from items left outer join linkitad on itcode=lkitem and lkmain='Y'
where itdesc2 like :as_item || '%'
and itactiv='Y'

order by 2
```

## Colonnes
| Colonne |
|---------|
| items_itloc |
| items_itcode |
| items_itname |
| items_itstock |
| items_itsecur |
| stocks_stalloc |
| items_itpsize |
| linkitad_lkadref |
| linkitad_lkadref2 |
| linkitad_lkadcode |
| items_itdesc2 |
| items_oldname |

