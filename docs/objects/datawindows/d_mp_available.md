# d_mp_available

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
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
		endif as alloc_status,
		( select count(ml.mlitemseq) 
					from mfglallocs as ml
						JOIN items as it ON it.itcode = ml.mlitem 
					where ml.mlcode = mfghead.mhcode and 
							it.itactiv = 'Y' and
							it.ittyp IN ( 'P', 'M', 'C' ) and
							ml.mlstatus < '8' and
							ml.mlpalloctyp NOT IN ( 'B', 'L', 'G' ) and
							isnull( ml.mllallocqty, 0 ) - isnull( ml.mlissuedqty, 0 ) > 0 and
							isnull(( select sum( st.stqty - st.stalloc )
        								from lots as lo
        									JOIN stocks as st ON st.stlot = lo.locode AND
        											st.stitem = lo.loitem 
        								where it.itcode = lo.loitem and
        									(( lo.lostatus IN ( 'A', 'P' ) and date( lo.loexpdat ) >= date( now() )) OR it.itlot = 'N') ),0) < isnull( ml.mllallocqty, 0 ) - isnull( ml.mlissuedqty, 0 )	//stock disponible < stock a préparer
						 ) as nb_of_partial
    FROM lots 
			JOIN items ON items.itcode = lots.loitem 
			JOIN stocks ON stocks.stlot = lots.locode AND
								stocks.stitem = lots.loitem  
			JOIN mfglallocs ON mfglallocs.mli
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| loc |
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
| nb_of_partial |

