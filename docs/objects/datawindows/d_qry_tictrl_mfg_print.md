# d_qry_tictrl_mfg_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT sum(workline.wlwrktime) total_time,   
         workline.wlmfgid order_id,   
         workoper.wowcid wc_id,   
         mfghead.mhmfgqty qty_mfg, 
         workcenters.wcname wc_name ,
         mfghead.mhitem item ,
         items.itname item_name ,
         items.itum um  , 
         workoper.woopid opid, 
         workoper.woopdesc  opdesc 
    FROM workline,   
         workoper,   
         workcenters, 
         mfghead, 
         items 
   WHERE ( workcenters.wccode = workoper.wowcid ) and  
         ( workline.wltyp = workoper.wotyp ) and  
         ( workline.wlmfgid = mfghead.mhcode ) and  
         ( items.itcode = mfghead.mhitem ) and  
         ( workline.wlwcid = workoper.wowcid ) and  
         ( workoper.woopid = workline.wlopid ) and  
         ( workline.wldat between :Sel_start AND :Sel_end ) AND  
         ( workline.wltyp < '3' ) 
GROUP BY workline.wlmfgid,   
         workoper.wowcid,
         mfghead.mhmfgqty,    
         workcenters.wcname ,
         mfghead.mhitem , 
         items.itname,
         items.itum , 
         workoper.woopid, 
         workoper.woopdesc 
order by workcenters.wcname ASC , workoper.woopdesc asc, workline.wlmfgid ASC 

```

## Colonnes
| Colonne |
|---------|
| ctotal_time |
| workline_order_id |
| workoper_wc_id |
| mfghead_qty_mfg |
| workcenters_wc_name |
| mfghead_item |
| items_item_name |
| items_um |
| workoper_opid |
| workoper_opdesc |

