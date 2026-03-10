# d_mfgprepare_batchline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT mfghead.mhreqqty,
		mfghead.mhqtybybatch,
		mfghbatch.mhqtybatchexpect,
		mfglallocs.mlbomqty,
		mfglallocs.mlissuedqty,
		isnull((select mfglbatch.mlqtyissue
					from mfglbatch
				 where mfglbatch.mlmhcode = mfghbatch.mhmhcode and
					mfglbatch.mlline = mfghbatch.mhline and
					mfglbatch.mlitemseq = mfglallocs.mlitemseq ), 0) as batchqtyissue,
		mfglallocs.mlitemseq,
		mfglallocs.mlpalloctyp,
		items.itcode,
		items.itname
  FROM mfghbatch, mfghead, mfglallocs, items
WHERE mfghbatch.mhmhcode = :al_of AND
		mfghbatch.mhline = :al_batchline AND
		mfghbatch.mhmhcode = mfghead.mhcode AND
		mfghbatch.mhmhcode = mfglallocs.mlcode AND
		mfglallocs.mlitem = items.itcode
ORDER BY mfglallocs.mlitemseq
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhreqqty |
| mfghead_mhqtybybatch |
| mfghbatch_mhqtybatchexpect |
| mfglallocs_mlbomqty |
| mfglallocs_mlissuedqty |
| batchqtyissue |
| mfglallocs_mlitemseq |
| mfglallocs_mlpalloctyp |
| items_itcode |
| items_itname |

