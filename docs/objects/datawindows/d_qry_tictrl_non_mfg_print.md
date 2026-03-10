# d_qry_tictrl_non_mfg_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT   10 as prefix
         , (workline.wlwrktime) total_time   
         , workline.wlmfgid order_id   
         , workoper.wowcid wc_id   
         , workcenters.wcname wc_name 
         , workoper.woopid opid 
         , isnull(workoper.woopdesc,'')  opdesc 
         , workline.wltyp 
         , filehead.fhcode as fhcode 
         , filehead.fhdesc as fhdesc 
         , workline.wlwkcode
         , workers.wkname         
    FROM   workline   
         , workoper   
         , workcenters 
         , filehead 
         , workers 
   WHERE ( workcenters.wccode = workoper.wowcid )   
     AND ( workline.wltyp = workoper.wotyp )    
     AND ( workline.wlmfgid = filehead.fhcode )   

     AND ( workline.wlwcid = workoper.wowcid )     
     AND ( workoper.woopid = workline.wlopid )   
     AND ( workline.wldat between :Sel_start AND :Sel_end )          
     AND ( workline.wltyp = '4' )       
     AND workline.wlwkcode = workers.wkcode   

UNION ALL    

  SELECT   20 as prefix
         , sum(workline.wlwrktime) total_time   
         , workline.wlmfgid order_id   
         , workoper.wowcid wc_id   
         , workcenters.wcname wc_name 
         , workoper.woopid opid 
         , isnull(workoper.woopdesc,'')  opdesc 
         , workline.wltyp 
         , ''
         , ''
         , workline.wlwkcode
         , workers.wkname    
    FROM   workline    
         , workoper   
         , workcenters   
         , workers 
   WHERE ( workcenters.wccode = workoper.wowcid )   
     AND ( workline.wltyp = workoper.wotyp )    
/*     AND ( workline.wlmfgid = filehead.fhcode )   */
     AND ( workline.wlwcid = workoper.wowcid )     
     AND ( workoper.woopid = workline.wlopid )   
     AND ( workline.wldat between :Sel_start AND :Sel_end )          
     AND ( workline.wltyp not in ('1','4','9','x') )    
     AND workline.wlwkcode = workers.wkcode   

GROUP BY   workline.wlmfgid   
         , workoper.wowcid  
```

## Colonnes
| Colonne |
|---------|
| workline_prefix |
| ctotal_time |
| workline_order_id |
| workoper_wc_id |
| workcenters_wc_name |
| workoper_opid |
| workoper_opdesc |
| workline_wltyp |
| filehead_fhcode |
| filehead_fhdesc |
| workline_wlwkcode |
| workers_wkname |

