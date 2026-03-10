# d_mfgordr_bcd_print2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode,   
         mfghead.mhitem,   
         items.itname,   
         mfghead.mhreqqty,   
         items.itum,   
         mfghead.mhreqdat,   
         mfgwcreqs.mwwccode,   
         workcenters.wcname,   
         mfgwcreqs.mwreqmac,   
         mfgwcreqs.mwreqlab,   
         mfgwcreqs.mwline,   
         mfghead.mhcmntrel,   
         mfgwcreqs.mwstartdat,   
         mfgwcreqs.mwstopdat,
			mfgwcreqs.mwoper,
			workoper.woopdesc
    FROM items,   
         mfghead,   
         mfgwcreqs,   
         workcenters,
         workoper   
   WHERE ( mfghead.mhitem = items.itcode ) and  
         ( workcenters.wccode = mfgwcreqs.mwwccode ) and  
         ( mfgwcreqs.mwcode = mfghead.mhcode ) and  
         ( mfgwcreqs.mwwccode = workoper.wowcid ) and  
         ( mfgwcreqs.mwtask = workoper.woopid ) and  
         ( ( mfghead.mhcode = :Selected_order ) )   
ORDER BY mfgwcreqs.mwline ASC   


```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| items_itum |
| mfghead_mhreqdat |
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwreqmac |
| mfgwcreqs_mwreqlab |
| mfgwcreqs_mwline |
| mfghead_mhcmntrel |
| mfgwcreqs_mwstartdat |
| mfgwcreqs_mwstopdat |
| mfgwcreqs_mwoper |
| workoper_woopdesc |

