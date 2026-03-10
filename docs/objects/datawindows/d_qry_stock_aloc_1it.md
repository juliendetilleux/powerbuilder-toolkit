# d_qry_stock_aloc_1it

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT 'M',
			mfglallocs.mlcode,   
         mfglallocs.mlitemseq,   
         mfglallocs.mllallocqty - mfglallocs.mldelalloc  as remain ,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,		
		IF ITUMTRF = '2' THEN
			f_get_alloctrf_byordno ( 'M', mfglallocs.mlcode, mfglallocs.mlitemseq )
		ELSE
			0
		ENDIF   as alloc_trf 
    FROM mfglallocs JOIN mfghead ON mfglallocs.mlcode = mfghead.mhcode
						JOIN items ON items.itcode = mfglallocs.mlitem
   WHERE mfglallocs.mlitem = :Selected_item and
               ( mfglallocs.mllallocqty - mfglallocs.mldelalloc    <> 0 OR alloc_trf <> 0 ) and
			mfghead.mhstatus > '0' and
			mfghead.mhstatus < '8' 
UNION all 
 SELECT 	'X',
			salline.slcode,   
         salline.slline,   
         salline.slqtyalloc ,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,		
		IF ITUMTRF = '2' THEN
			f_get_alloctrf_byordno ( 'X', salline.slcode, salline.slline )
		ELSE
			0
		ENDIF  as alloc_trf   
    FROM salline JOIN items ON salline.slitem = items.itcode 
   WHERE ( salline.slitem = :Selected_item ) AND  
         ( salline.slstatus < '6' ) AND
         ( salline.slqtyalloc  > 0 OR alloc_trf > 0 )

  
UNION ALL //os2809
	select 'T',
		tc_num,
		tc_line,
		tc_qty,
		items.itum,
		'N',
		'',
		'',
		0
	from transact_with_confirm JOIN items ON items.itcode = transact_with_confirm.tc_itcode
	where tc_deleted = 'N' and
			tc_itcode = :Selected_item
	UNION ALL //os2809
	select '3',
		macode,
		maitemseq,
		maallocqty,
		items.itum,
		'N',
		'',
		'',
		0
	from matallocs JOIN items on items.itcode = matallocs.maitem
	where matyp = '3' and
			maitem = :Selected_item 


order by 2 ASC, 3 ASC
```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| mlcode |
| mlitemseq |
| remain |
| items_itum |
| itisumtarif |
| itumtarif |
| itumtrf |
| alloc_trf |

