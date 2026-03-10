# d_dsh_in_st

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select 
   mhcode,
   mhrelqty,
   pldatreq,
   plcode,
   pldatrec,
   plqty,
   plqtyrec,
   plqty - plqtyrec, 
   plstatus	
from mfghead, purgline 
where 
    mhcode=plrefnum AND
    mhitem = :as_itcode AND
	isnull(mhsubc,'N') = 'Y' 
UNION ALL 
select 
   mhcode,
   mhrelqty,
   mhreqdat,
   null,
   mhmfgdat,
   mhreqqty,
   mhmfgqty,
   mhreqqty - mhmfgqty, 
   	IF mhstatus = '8' THEN 
		'6' 
	ELSE
		IF mhstatus = '6' THEN 
			'4' 
		ELSE
			mhstatus
		ENDIF
	ENDIF
from mfghead 
where mhitem = :as_itcode AND
	isnull(mhsubc,'N') <> 'Y' 
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhrelqty |
| purgline_pldatreq |
| purgline_plcode |
| purgline_pldatrec |
| purgline_plqty |
| purgline_plqtyrec |
| compute_0008 |
| purgline_plstatus |

