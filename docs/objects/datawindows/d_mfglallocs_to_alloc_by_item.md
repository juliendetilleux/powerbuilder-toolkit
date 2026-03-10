# d_mfglallocs_to_alloc_by_item

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfglallocs.mlcode,
		mfglallocs.mlitemseq,
		mfglallocs.mlline,
		mfglallocs.mlpallocseq,
		itman.itcode,
		itman.itname,
		isnull( mfglallocs.mllallocqty, 0 ) as lallocqty,
		isnull( mfglallocs.mlpallocqty, 0 ) as pallocqty,
		mfghead.mhreqdat		
    FROM mfglallocs JOIN mfghead ON mfghead.mhcode = mfglallocs.mlcode 
		JOIN items ON items.itcode = mfglallocs.mlitem
		JOIN items as itman on  itman.itcode = mfghead.mhitem
   WHERE items.itcode = :as_item AND
		items.ittyp IN ('P' , 'M', 'C' ) AND
		mfghead.mhstatus < '8' AND
		mfglallocs.mlstatus < '8' AND
		mfglallocs.mlpalloctyp NOT IN ( 'B', 'L', 'G' ) AND
		isnull( mfglallocs.mllallocqty, 0 ) - isnull( mfglallocs.mlpallocqty, 0 ) > 0 

 ORDER BY mfglallocs.mlcode,
	mfglallocs.mlline
```

## Colonnes
| Colonne |
|---------|
| mfglallocs_mlcode |
| mfglallocs_mlitemseq |
| mfglallocs_mlline |
| mfglallocs_mlpallocseq |
| items_itcode |
| items_itname |
| lallocqty |
| pallocqty |
| mfghead_mhreqdat |

