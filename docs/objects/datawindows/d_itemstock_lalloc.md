# d_itemstock_lalloc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT 'M',
			mfglallocs.mlcode,   
         mfglallocs.mlitemseq,   
         mfglallocs.mllallocqty - mfglallocs.mldelalloc,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,		
		IF ITUMTRF = '2' THEN
			f_get_alloctrf_byordno ( 'M', mfglallocs.mlcode, mfglallocs.mlitemseq )
		ELSE
			0
		ENDIF   as alloc_trf 
    FROM mfglallocs JOIN mfghead ON mfghead.mhcode = mfglallocs.mlcode
						JOIN items ON mfglallocs.mlitem = items.itcode
   WHERE mfglallocs.mlitem = :Selected_item and
         (mfglallocs.mllallocqty - mfglallocs.mlissuedqty  <> 0  or alloc_trf <> 0 )and
		mfghead.mhstatus > '0' and 
		mfghead.mhstatus < '8' 
UNION ALL 
 SELECT 	'X',
			salline.slcode,   
         salline.slline,   
         salline.slqtyalloc  ,
		items.itum,
		isnull( items.itisumtarif, '' ) as itisumtarif,
		isnull( items.itumtarif, '' ) as itumtarif,
		isnull( ( select ppvalue from progparam where ppcode = 'ITUMTRF' ), '' ) as ITUMTRF,		
		IF ITUMTRF = '2' THEN
			f_get_alloctrf_byordno ( 'X', salline.slcode, salline.slline )
		ELSE
			0
		ENDIF  as alloc_trf 
    FROM salline  JOIN items ON salline.slitem = items.itcode
   WHERE ( salline.slitem = :Selected_item ) AND  
         ( salline.slstatus < '6' ) AND
         ( salline.slqtyalloc  > 0 or alloc_trf > 0 )
	UNION ALL //EC0305
	select 'T',
		tc_num,
		tc_line,
		tc_qty,
		'',
		'N',
		'',
		'',
		0
	from transact_with_confirm
	where tc_deleted = 'N' and
			tc_itcode = :Selected_item
	UNION ALL //os2802
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
| compute_0004 |
| items_itum |
| itisumtarif |
| itumtarif |
| itumtrf |
| alloc_trf |

