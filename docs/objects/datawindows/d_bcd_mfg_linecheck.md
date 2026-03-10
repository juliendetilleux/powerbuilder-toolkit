# d_bcd_mfg_linecheck

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
 SELECT mlitemseq,
			mllallocqty,
			mlissuedqty,
			mllallocqty - mlissuedqty as neededqty ,
			mlpalloctyp,
			mloneemp,
			mlloc,
			mlcomment,
			mlline,
			locations.lcautoalloc,
			if isnull(mlwcreqs,0) = :an_mwline then -1 else isnull(mlwcreqs,0) endif as wcreqs,
			if (select count(*) from mfglallocs as mfg2 where mfg2.mlline = mfg1.mlline) > 1 then 
				(select first itname from items join mfglallocs as mfg3 on mfg3.mlitem = itcode where mfg3.mlline = mfg1.mlline and ittyp = 'F' and mfg3.mlcode = mfg1.mlcode order by mlitemseq)
			else
				''
			endif as origine
		FROM mfglallocs as mfg1 LEFT OUTER JOIN locations ON mfg1.mlloc = locations.lccode
	WHERE mfg1.mlcode = :an_OrdNo  AND
			mfg1.mlitem = :as_Item 
	ORDER BY 1;
```

## Colonnes
| Colonne |
|---------|
| mfglallocs_mlitemseq |
| mfglallocs_mllallocqty |
| mfglallocs_mlissuedqty |
| neededqty |
| mfglallocs_mlpalloctyp |
| mfglallocs_mloneemp |
| mfglallocs_mlloc |
| mfglallocs_mlcomment |
| mfglallocs_mlline |
| locations_lcautoalloc |
| wcreqs |
| origine |

