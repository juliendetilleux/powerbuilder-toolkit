# d_advsched_mfg

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,            
         items.itname,   
         items.itum,   
         mfghead.mhreqdat,
		workcenters.wccode ,   	
		 workcenters.wcname,
		mfgwcreqs.mwreqmac,   
		 mfgwcreqs.mwreqlab,  
		 mfgwcreqs.mwreamac,   
		 mfgwcreqs.mwrealab, 
		mfghead.mhreqqty,
		mfghead.mhcode,
		mfgwcreqs.mwadvscsort
    FROM mfghead,   
         items,
		mfgwcreqs,
		workcenters  
   WHERE items.itcode = mfghead.mhitem and  
		mfghead.mhcode = mfgwcreqs.mwcode and
		mfgwcreqs.mwwccode = workcenters.wccode and
		mfgwcreqs.mwadvscsort is not null
order by mfgwcreqs.mwadvscsort ASC ;

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| mfghead_mhreqdat |
| workcenters_wccode |
| workcenters_wcname |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |
| mfgwcreqs_mwreamac |
| mfgwcreqs_mwrealab |
| mfghead_mhreqqty |
| mfghead_mhcode |
| mfgwcreqs_mwadvscsort |

