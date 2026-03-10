# d_mfgordr_preclose2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT '10' ltype, 
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
         if IsNull( items_used.itcons, 'N') = 'Y' then 0 else items_used.itstdpur endif item_used_cost , 
         mfglallocs.mllallocqty ,
         mfglallocs.mlissuedqty,
			mfglallocs.mlitemseq,
			 mfghead.mhmfgqtyqty item_mfg_recqty
    FROM items items_mfg,   
         mfghead,   
         mfglallocs,   
         items items_used 
   WHERE ( mfghead.mhitem = items_mfg.itcode ) and  
         ( mfglallocs.mlcode = mfghead.mhcode ) and  
         ( mfglallocs.mlitem = items_used.itcode ) and  
         ( ( mfghead.mhcode = :Selected_order ) )   
UNION  all 
  SELECT '20' ltype, 
         mfghead.mhcode ,   
         mfghead.mhitem ,   
         items_mfg.itname ,   
         mfghead.mhreqqty ,   
         mfghead.mhmfgqty ,   
         items_mfg.itum ,   
         if IsNull( items_mfg.itcons, 'N') = 'Y' then 0 else items_mfg.itstdpur endif ,   
         mfghead.mhreqdat ,   
         mfghead.mhcmntrel ,   
         workcenters.wccode ,   
         workcenters.wcname ,   
         'H' ,   
         workcenters.wccost , 
         mfgwcreqs.mwreqlab ,
         mfgwcreqs.mwrealab,
         0 ,
		mfghead.mhmfgqtyqty 
    FROM items items_mfg,   
         mfghead,   
         mfgwcreqs,   
         workcenters 
   WHERE ( mfghead.mhitem = items_mfg.itcode ) and  
         ( mfgwcreqs.mwcode = mfghead.mhcode ) and  
         ( mfgwcreqs.mwwccode = workcenters.wccode ) and  
         ( ( mfghead.mhcode 
```

## Colonnes
| Colonne |
|---------|
| cltype |
| mfghead_mhcode |
| mfghead_item_mfg_id |
| items_item_mfg_name |
| mfghead_item_mfg_req |
| mfghead_item_mfg_rec |
| items_item_mfg_um |
| items_item_mfg_std |
| mfghead_item_mfg_dat |
| mfghead_item_mfg_cmnt |
| items_item_used_id |
| items_item_used_name |
| items_item_used_um |
| items_item_used_cost |
| mfglallocs_mllallocqty |
| mfglallocs_mlissuedqty |
| mfglallocs_mlitemseq |
| mfghead_item_mfg_recqty |

