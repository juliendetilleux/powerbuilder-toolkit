# d_mp_available_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
      /*   	lots.locode,   
         	lots.loorgcode,
		lots.lostatus,
		lots.loexpdat,*/
		itloc as loc ,
		isnull( mfglallocs.mllallocqty, 0 ) - isnull( mfglallocs.mlissuedqty, 0 ) as qty_need,
		sum( stocks.stqty - stocks.stalloc ) as avalaible,
		items.itdefaultlot,
		mfghead.mhcode ,
		mfghead.mhstatus,
		mfghead.mhrefint,
		date( mfghead.mhreqdat ) as mhreqdat,
		( select count( *) from mfglallocs where mlcode = mfghead.mhcode and mllallocqty > mlissuedqty and mfglallocs.mlpalloctyp not in ('B', 'G') ) as nbmfglalloc_notissued,
		( select count( *) from mfglallocs where mlcode = mfghead.mhcode and 0 < mlissuedqty and mfglallocs.mlpalloctyp not in ('B', 'G') ) as nbmfglalloc_partialissued ,
		if nbmfglalloc_partialissued = 0 then
			'Créé'
		else
			if  nbmfglalloc_notissued = 0 then
				'Prépa terminée'
			else
				'Prépa partielle'
			endif
		endif as alloc_status
    FROM lots 
			JOIN items ON items.itcode = lots.loitem 
			JOIN stocks ON stocks.stlot = lots.locode AND
								stocks.stitem = lots.loitem  
			JOIN mfglallocs ON mfglallocs.mlitem = items.itcode
			JOIN mfghead ON mfghead.mhcode = mfglallocs.mlcode  
   WHERE 
		items.itactiv = 'Y' AND 
		(( lots.lostatus IN ( 'A', 'P' ) AND date( lots.loexpdat ) >= date( now() )) OR items.itlot = 'N') AND
		items.ittyp IN ('P' , 'M', 'C' ) AND
		mfglallocs.mlstatus < '8' AND
		mfghead.mhstatus < '8' AND
		mfglallocs.mlpalloctyp NOT IN ( 'B', 'L', 'G' ) AND
		isnull( mfglallocs.mllallocqty, 0 ) - isnull( mfglallocs.mlissuedqty, 0 ) > 0 /*il faut qu'il reste quelque chose a sortire*/
 GROUP BY items.itcode,
		items.itname,
      /*   	lots.locode,   
         	lots.loorgcode,
		lots.lostatus,
		lots.loexpdat,*/
		loc,
		qty_need,
		items.itdefaultlot,
		mfghead.mhrefint,
		mfghead.mhreqdat,
		mfghead.mhcode ,
		mfghead.mhstatus
  HAVING avalaible > 0
 ORDER BY mfghead.mhcode,
	items.itcode

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_loc |
| qty_need |
| avalaible |
| items_itdefaultlot |
| mfghead_mhcode |
| mfghead_mhstatus |
| mfghead_mhrefint |
| mfghead_mhreqdat |
| nbmfglalloc_notissued |
| nbmfglalloc_partialissued |
| alloc_status |

