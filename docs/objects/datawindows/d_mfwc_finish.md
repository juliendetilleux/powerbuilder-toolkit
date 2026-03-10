# d_mfwc_finish

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs.mwline,   
         mfgwcreqs.mwwccode,   
         workcenters.wcname,   
         mfgwcreqs.mwstartdat,   
         mfgwcreqs.mwreqmac,   
         mfgwcreqs.mwreqlab,   
         mfgwcreqs.mwoper,   
         workoper.woopdesc,
			mfgwcreqs.mwcode,
			mfgwcreqs.mwfinish,  
			mfgwcreqs.mwdatefinish,
		mfgwcreqs.mwreqlab as timetot,
			(select sum(workline.wlwrktime) 
					from workline
					where mfgwcreqs.mwline = workline.wlwcreqsline AND
							workline.wltyp = '1' AND
							workline.wlmfgid = mfgwcreqs.mwcode) as timeprest
    FROM mfgwcreqs,   
         workcenters,   
         workoper  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( mfgwcreqs.mwwccode = workoper.wowcid ) and  
         ( mfgwcreqs.mwtask = workoper.woopid ) and  
         ( ( mfgwcreqs.mwcode = :Selected_order ) )   
ORDER BY mfgwcreqs.mwline ASC   

```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwline |
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwstartdat |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |
| mfgwcreqs_mwoper |
| workoper_woopdesc |
| mfgwcreqs_mwcode |
| mfgwcreqs_mwfinish |
| mfgwcreqs_mwdatefinish |
| mfgwcreqs_timetot |
| timeprest |

