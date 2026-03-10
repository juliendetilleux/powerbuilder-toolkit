# d_bcd_mfgwrecqs

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT mfgwcreqs.mwwccode,
			mfgwcreqs.mwline,
			workcenters.wcname,
			mfglallocs.mlitem,
			matallocs.malot,
			matallocs.maissuedqty
   FROM mfghead,
			(mfgwcreqs left outer join mfglallocs ON 
				mfglallocs.mlcode = mfgwcreqs.mwcode and
				mfglallocs.mlwcreqs = mfgwcreqs.mwline and
				mfglallocs.mlpalloctyp <> 'B')
					left outer join matallocs ON 
						matallocs.macode = mfglallocs.mlcode and
						matallocs.maitemseq = mfglallocs.mlitemseq and matallocs.matyp = 'M' ,
			workcenters,
			mfglallocs
 WHERE mfghead.mhcode = mfgwcreqs.mwcode AND 
			isnull(mfgwcreqs.mwfinish,'N') in ('L', 'B') AND
			mfgwcreqs.mwwccode = workcenters.wccode AND 
			mfgwcreqs.mwcode = :al_of 
  
ORDER BY 2,4,5,6


```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwwccode |
| mfgwcreqs_mwline |
| workcenters_wcname |
| mfglallocs_mlitem |
| matallocs_malot |
| matallocs_maissuedqty |

