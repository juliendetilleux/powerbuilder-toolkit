# d_mfgordr_wkmvt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT workline.wldat,   
         workline.wlstart,   
         workline.wlend,   
         workline.wlwrktime,   
         workline.wlwcid,   
         workers.wkname,   
         workline.wlwcreqsline,   
         workline.wlopid,
		workoper.woopdesc,
		mfghead.mhcode,
		mfghead.mhitem,
		mfghead.mhmfgdat,
		mfghead.mhmfgqty,
		items.itname
    FROM workers,   
         workline,
		workoper,
		mfghead,
		items  
   WHERE ( workline.wlwkcode = workers.wkcode ) and  
         ( workline.wltyp = '1' ) AND  
         ( workline.wlmfgid = :Sel_order ) AND
		( mfghead.mhcode = workline.wlmfgid ) AND
		( mfghead.mhitem = items.itcode ) AND
		( workoper.wotyp = workline.wltyp ) and  
         ( workoper.wowcid = workline.wlwcid ) and  
         ( workline.wlopid = workoper.woopid )


```

## Colonnes
| Colonne |
|---------|
| workline_wldat |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |
| workline_wlwcid |
| workers_wkname |
| workline_wlwcreqsline |
| workline_wlopid |
| workoper_woopdesc |
| mfghead_mhcode |
| mfghead_mhitem |
| mfghead_mhmfgdat |
| mfghead_mhmfgqty |
| items_itname |

