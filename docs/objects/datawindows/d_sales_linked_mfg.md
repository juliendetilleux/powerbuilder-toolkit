# d_sales_linked_mfg

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,
        mfghead.mhreldat,
        mfghead.mhreqqty,
        mfghead.mhmfgqty,
        choices.chname as status, 

			( SELECT workcenters.wcname
				 FROM mfgwcreqs, workcenters
				 where workcenters.wccode = mfgwcreqs.mwwccode and
						 mfgwcreqs.mwcode = mfghead.mhcode AND 
						 mwline = ( select min(mw2.mwline) from mfgwcreqs as mw2 where mw2.mwcode = mfghead.mhcode and isnull( mw2.mwfinish , 'N' ) IN ('D','Y') )
					 ) as wcname, 

			( SELECT first mfgwcreqs.mwoper
				 FROM mfgwcreqs
				 where mfgwcreqs.mwcode = mfghead.mhcode AND 
						 mwline = ( select min(mw3.mwline) from mfgwcreqs as mw3 where mw3.mwcode = mfghead.mhcode and isnull( mw3.mwfinish , 'N' ) IN ('D','Y') )
  ) as opname 
	FROM mfghead, choices
	WHERE mfghead.mhsalhead = :al_salhead AND 
         mfghead.mhsalline = :al_salline AND
         choices.chtype = 'MFGS' AND
         choices.chcode = mfghead.mhstatus
   ORDER BY mfghead.mhcode
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhreldat |
| mfghead_mhreqqty |
| mfghead_mhmfgqty |
| choices_status |
| cwcname |
| copname |

