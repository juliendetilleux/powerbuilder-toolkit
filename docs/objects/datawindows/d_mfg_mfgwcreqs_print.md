# d_mfg_mfgwcreqs_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
		items.itname,
		mfgwcreqs.mwcode,
		mfgwcreqs.mwline,
		lots.locode,
		lots.loexpdat,
		mfgwcreqs.mwwccode,
		workcenters.wcname
    FROM items,  
	    mfgwcreqs,   
	    workcenters,
         mfghead LEFT OUTER JOIN lots ON mfghead.mhlotmfg = lots.locode
   WHERE mfghead.mhcode = :al_mhcode AND
	items.itcode = mfghead.mhitem AND
	workcenters.wccode = mfgwcreqs.mwwccode AND
	mfgwcreqs.mwcode = mfghead.mhcode AND
	mfgwcreqs.mwline = (select min(mfgwcreqs.mwline) from mfgwcreqs where mfgwcreqs.mwcode = mfghead.mhcode)  
ORDER BY mfgwcreqs.mwcode,  
	mfgwcreqs.mwline
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| mfgwcreqs_mwcode |
| mfgwcreqs_mwline |
| lots_locode |
| lots_loexpdat |
| mfgwcreqs_mwwccode |
| workcenters_wcname |

