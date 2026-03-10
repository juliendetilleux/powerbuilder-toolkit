# zmod_mfgordr_lab_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs.mwwccode,   
         workcenters.wcname,   
         mfgwcreqs.mwreqmac,   
         mfgwcreqs.mwreqlab,   
         mfgwcreqs.mwline,   
         mfgwcreqs.mwstartdat,   
         mfgwcreqs.mwstopdat,   
         mfgwcreqs.mwoper  ,
			mfgwcreqs.mwtask ,
			( Select workoper.woopdesc  
    			 From workoper  
				WHERE mfgwcreqs.mwwccode = workoper.wowcid and  
         			mfgwcreqs.mwtask   = workoper.woopid 		)   As Task 
    FROM mfgwcreqs,   
         workcenters  
   WHERE ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( ( mfgwcreqs.mwcode = :Selected_order ) )   
ORDER BY mfgwcreqs.mwline ASC   

```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |
| mfgwcreqs_mwline |
| mfgwcreqs_mwstartdat |
| mfgwcreqs_mwstopdat |
| mfgwcreqs_mwoper |
| mfgwcreqs_mwtask |
| ctask |

