# d_mfwc

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
		isnull((select ppvalue from progparam where ppcode = 'STDSPC'),'') as STDSPC,
		mfgwcreqs.mwsubc,
		mfgwcreqs.mwsuppid,
		(select adname from adresses where adcode = mfgwcreqs.mwsuppid) as adname
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
| stdspc |
| mfgwcreqs_mwsubc |
| mfgwcreqs_mwsuppid |
| adname |

