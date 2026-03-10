# d_mfg_prepare_mfglallocs

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT mfghead.mhreqqty,
		mfglallocs.mlbomqty, 
		mfglallocs.mlissuedqty, 
		mfglallocs.mlitemseq,
		mfglallocs.mlpalloctyp,
		items.itcode,
		items.itname
  FROM mfghead, mfglallocs, items
WHERE mfghead.mhcode = :al_of AND
		mfghead.mhcode = mfglallocs.mlcode AND
		mfglallocs.mlitem = items.itcode
 ORDER BY mfglallocs.mlitemseq
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhreqqty |
| mfglallocs_mlbomqty |
| mfglallocs_mlissuedqty |
| mfglallocs_mlitemseq |
| mfglallocs_mlpalloctyp |
| items_itcode |
| items_itname |

