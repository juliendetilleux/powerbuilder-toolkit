# d_mfwc_st

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
		mfgwcreqs.mwsubc,
		mfgwcreqs.mwsuppid,
		(select adname from adresses where adcode = mfgwcreqs.mwsuppid) as adname
    FROM mfgwcreqs,   
         workcenters,   
         workoper  
   WHERE workcenters.wccode = mfgwcreqs.mwwccode and  
         mfgwcreqs.mwwccode = workoper.wowcid and  
         mfgwcreqs.mwtask = workoper.woopid and  
         mfgwcreqs.mwcode = :Selected_order and
		isnull(mfgwcreqs.mwsubc,'') = 'Y' 
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
| mfgwcreqs_mwsubc |
| mfgwcreqs_mwsuppid |
| adname |

