# d_mfgwc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT  mfghead.mhcode,   
         string(mfghead.mhitem) + ' - ' + string(items.itname) as Article,   
         mfghead.mhreqqty,   
         items.itum,   
         mfghead.mhitem,   
		isnull(mfgwcreqs.mwfinish,'N') as mfg_mwfinish,
		mfgwcreqs.mwstartdat,
		mfgwcreqs.mwline,
		mfgwcreqs.mwoper
    FROM items,   
         mfghead,   
         mfgwcreqs 
   WHERE ( mfghead.mhitem = items.itcode ) and  
         ( mfgwcreqs.mwcode = mfghead.mhcode ) and 
         ( isnull(mfgwcreqs.mwfinish,'N') <> 'Y' ) and 
         ( mfgwcreqs.mwwccode = :ras_wkcode )    
	order by mfgwcreqs.mwfinish asc,
				mfgwcreqs.mwstartdat asc,
				mfgwcreqs.mwline asc


```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| article |
| mfghead_mhreqqty |
| items_itum |
| mfghead_mhitem |
| mfg_mwfinish |
| mfgwcreqs_mwstartdat |
| mfgwcreqs_mwline |
| mfgwcreqs_mwoper |

