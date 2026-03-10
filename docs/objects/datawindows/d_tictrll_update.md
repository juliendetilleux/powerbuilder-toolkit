# d_tictrll_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT workline.wlwkcode,
         workline.wldat,   
         workline.wlstart,   
         workline.wlend,   
         workline.wlwrktime,   
         workline.wltyp,   
         workline.wlmfgid,   
         workline.wlwcid,   
         workline.wlopid,   
         workline.wlstatus,   
         workoper.woopdesc,   
         workline.wlfileline,   
         progparam.ppvalue,   
         workline.wlseq  ,
         cast( null as char(40)) as wcidname ,
         cast( null as char(40)) as opidname ,   
         workline.wlwcreqsline  
    FROM workline,   
         workoper,   
         progparam  
   WHERE ( workoper.wotyp = workline.wltyp ) and  
         ( workoper.wowcid = workline.wlwcid ) and  
         ( workline.wlopid = workoper.woopid ) and  
         ( ( workline.wlwkcode = :selected_wc ) AND  
         ( workline.wldat = :selected_dat ) AND  
         ( progparam.ppcode = 'TICTRL01' ) )   
ORDER BY workline.wlstart ASC 

```

## Colonnes
| Colonne |
|---------|
| workline_wlwkcode |
| workline_wldat |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |
| workline_wltyp |
| workline_wlmfgid |
| workline_wlwcid |
| workline_wlopid |
| workline_wlstatus |
| opidname |
| workline_wlfileline |
| progparam_ppvalue |
| workline_wlseq |
| cwcidname |
| copidname |
| workline_wlwcreqsline |

