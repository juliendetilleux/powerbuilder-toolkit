# d_qry_tictrl_split

- **Type**: DataWindow
- **Style**: Group
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT date(workline.wldat),   
         workers.wkname,   
         workline.wlstart,   
         workline.wlend,   
         workline.wlwrktime,   
         workline.wltyp,   
         choiceline.clname,   
         workline.wlmfgid,   
         workoper.wowcid,   
         workcenters.wcname,   
         workoper.woopdesc  
    FROM workline,   
         workoper,   
         workers,   
         workcenters,   
         choiceline  
   WHERE ( workcenters.wccode = workoper.wowcid ) and  
         ( workline.wltyp = workoper.wotyp ) and  
         ( workline.wlwcid = workoper.wowcid ) and  
         ( workoper.woopid = workline.wlopid ) and  
         ( workline.wlwkcode = workers.wkcode ) and  
         ( workoper.wowrgroup = choiceline.clline ) and  
         ( workline.wltyp <> '9')  AND  
         ( choiceline.clcode = 'WKGR'  )  and 
			( workline.wldat between :Start_date and :Stop_Date ) 
ORDER BY 1 ASC,   
         workers.wkname ASC,   
         workline.wlstart ASC   

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| workers_wkname |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |
| workline_wltyp |
| choiceline_clname |
| workline_wlmfgid |
| workoper_wowcid |
| workcenters_wcname |
| workoper_woopdesc |

