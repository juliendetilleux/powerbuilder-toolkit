# d_brf_mfg_linecheck

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
 SELECT mfglallocs.mlitemseq,
			mfglallocs.mllallocqty,
			mfglallocs.mlissuedqty,
			mfglallocs.mllallocqty - mfglallocs.mlissuedqty as neededqty ,
			mfglallocs.mlpalloctyp,
			mfglallocs.mloneemp,
			mfglallocs.mlloc,
			mfglallocs.mlcomment,
			locations.lcautoalloc,
			if isnull(mfglallocs.mlwcreqs,0) = :an_mwline then -1 else isnull(mfglallocs.mlwcreqs,0) endif as wcreqs
		FROM mfglallocs LEFT OUTER JOIN locations ON 
					mfglallocs.mlloc = locations.lccode
	WHERE mfglallocs.mlcode = :an_OrdNo  AND
			mfglallocs.mlitem = :as_Item 
	ORDER BY 1;
```

## Colonnes
| Colonne |
|---------|
| mlitemseq |
| mfglallocs_mllallocqty |
| mfglallocs_mlissuedqty |
| neededqty |
| mfglallocs_mlpalloctyp |
| mfglallocs_mloneemp |
| mfglallocs_mlloc |
| mfglallocs_mlcomment |
| locations_lcautoalloc |
| wcreqs |

