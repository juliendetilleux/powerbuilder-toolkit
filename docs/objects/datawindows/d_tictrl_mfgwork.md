# d_tictrl_mfgwork

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
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
		workoper.woopdesc   
    FROM workers,   
         workline,
		workoper  
   WHERE ( workline.wlwkcode = workers.wkcode ) and  
         ( workline.wltyp = '1' ) AND  
         ( workline.wlmfgid = :Sel_order ) AND
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

