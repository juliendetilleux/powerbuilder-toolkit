# d_mfgprepare_batch_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT mfghbatch.mhline,
	mfghbatch.mhinmodif,
	(select count(*) 
	   from mfglbatch 
	 where mfglbatch.mlmhcode = mfghbatch.mhmhcode and
		mfglbatch.mlline = mfghbatch.mhline and
		mfglbatch.mlqtyissue > 0 ) as nbpartial
  FROM mfghbatch
WHERE mfghbatch.mhmhcode = :al_of
ORDER BY mfghbatch.mhline
```

## Colonnes
| Colonne |
|---------|
| mhline |
| mhinmodif |
| nbpartial |

