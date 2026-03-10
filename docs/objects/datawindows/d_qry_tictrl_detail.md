# d_qry_tictrl_detail

- **Type**: DataWindow
- **Style**: Grid
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
         choices.chname,   
         workline.wlmfgid,   
         workoper.wowcid,   
         workcenters.wcname,   
         workoper.woopdesc  
    FROM workline,   
         workoper,   
         workers,   
         workcenters,   
         choices  
   WHERE ( workcenters.wccode = workoper.wowcid ) and  
         ( workline.wltyp = workoper.wotyp ) and  
         ( workline.wlwcid = workoper.wowcid ) and  
         ( workoper.woopid = workline.wlopid ) and  
         ( workline.wlwkcode = workers.wkcode ) and  
         ( workline.wltyp = choices.chcode ) and  
         ( ( workline.wldat >= :Sel_start ) AND  
         ( workline.wldat <= :Sel_end ) AND  
         ( workline.wltyp <> '9' ) AND  
         ( choices.chtype = 'WKTY' ) )   
ORDER BY 1 ASC,   
         workers.wkname ASC,   
         workline.wlstart ASC   
```

## Colonnes
| Colonne |
|---------|
| datep |
| worker |
| workline_wlstart |
| workline_wlend |
| worktime |
| wltyp |
| type |
| mfgid |
| workoper_wowcid |
| wcname |
| opdesc |

