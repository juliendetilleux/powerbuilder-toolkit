# d_mfgordr_cost_mod4_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT '10' ltype, 
         '1' tri,
         mfghead.mhcode ,   
         mfghead.mhitem item_mfg_id,   
         items_mfg.itname item_mfg_name,   
         mfghead.mhreqqty item_mfg_req,   
         mfghead.mhmfgqty item_mfg_rec,   
         items_mfg.itum item_mfg_um,   
         items_mfg.itstdpur item_mfg_std,   
         mfghead.mhreqdat item_mfg_dat,   
         mfghead.mhcmntrel item_mfg_cmnt,   
         items_used.itcode item_used_id,   
         items_used.itname item_used_name,   
         items_used.itum item_used_um,   
         mfgcosts.mcqalloc  ,
         mfgcosts.mcqreal   ,
         mfgcosts.mcvalloc  ,
         mfgcosts.mcvreal, 
         mfgcosts.mcseq,   
         mfghead.mhmfgqtyqty item_mfg_recqty
    FROM items items_mfg,   
         mfghead,   
         mfgcosts,   
         items items_used 
   WHERE ( mfghead.mhitem = items_mfg.itcode ) and  
         ( mfgcosts.mccode = mfghead.mhcode ) and  
         ( mfgcosts.mcitem = items_used.itcode ) and  
         ( mfgcosts.mctype = 'M' ) and 
         ( mfghead.mhcode = :Selected_order ) 
UNION  all 
  SELECT '20' ltype, 
         '1' tri,
         mfghead.mhcode ,   
         mfghead.mhitem ,   
         items_mfg.itname ,   
         mfghead.mhreqqty ,   
         mfghead.mhmfgqty ,   
         items_mfg.itum ,   
         items_mfg.itstdpur ,   
         mfghead.mhreqdat ,   
         mfghead.mhcmntrel ,   
         workcenters.wccode ,   
         workcenters.wcname ,   
         'H' ,   
         mfgcosts.mcqalloc  ,
         mfgcosts.mcqreal   ,
         mfgcosts.mcvalloc  ,
         mfgcosts.mcvreal, 
         mfgcosts.mcseq,   
         mfghead.mhmfgqtyqty
    FROM items items_mfg,   
         mfghead,   
         mfgcosts,   
         workcenters 
   WHERE ( mfghead.mhitem = items_mfg.itcode ) and  
         ( mfgcosts.mccode = mfghead.mhcode ) and  
         ( mfgcosts.mcitem = workcenters.wccode ) and  
         ( mfgcosts.
```

## Colonnes
| Colonne |
|---------|
| cltype |
| ctri |
| mfghead_mhcode |
| mfghead_item_mfg_id |
| items_item_mfg_name |
| mfghead_item_mfg_req |
| mfghead_item_mfg_rec |
| u |
| items_item_mfg_std |
| mfghead_item_mfg_dat |
| mfghead_item_mfg_cmnt |
| items_item_used_id |
| items_item_used_name |
| items_item_used_um |
| mfgcosts_mcqalloc |
| mfgcosts_mcqreal |
| mfgcosts_mcvalloc |
| mfgcosts_mcvreal |
| mfgcosts_mcseq |
| mfghead_item_mfg_recqty |

