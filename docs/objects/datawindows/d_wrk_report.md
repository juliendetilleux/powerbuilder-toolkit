# d_wrk_report

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs.mwwccode,   
         workcenters.wcname,   
         mfgwcreqs.mwreqmac,   
         mfgwcreqs.mwreqlab,   
         mfgwcreqs.mwreamac,   
         mfgwcreqs.mwrealab,   
         mfgwcreqs.mw2rpmac,   
         mfgwcreqs.mw2rplab,   
         mfgwcreqs.mwline,   
         mfgwcreqs.mwcode,   
         mfgwcreqs.mwstartdat,   
         mfgwcreqs.mwstopdat,   
         mfgwcreqs.mwoper,   
         workoper.woopdesc,   
         mfgwcreqs.mwtask  
    FROM mfgwcreqs,   
         workcenters,   
         workoper  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( mfgwcreqs.mwwccode = workoper.wowcid ) and  
         ( mfgwcreqs.mwtask = workoper.woopid ) and 
			(  Isnull( mfgwcreqs.mwsubc, 'N') = 'N' ) and /*HA2277*/
         ( ( mfgwcreqs.mwcode = :SelectedOrder ) )   
ORDER BY mfgwcreqs.mwline ASC   

```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |
| mfgwcreqs_mwreamac |
| mfgwcreqs_mwrealab |
| mfgwcreqs_mw2rpmac |
| mfgwcreqs_mw2rplab |
| mfgwcreqs_mwline |
| mfgwcreqs_mwcode |
| mfgwcreqs_mwstartdat |
| mfgwcreqs_mwstopdat |
| mfgwcreqs_mwoper |
| workoper_woopdesc |
| mfgwcreqs_mwtask |

