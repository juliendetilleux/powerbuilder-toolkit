# d_mfgordr_cost_mod2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfghead.mhcode ,   
         mfghead.mhitem item_mfg_id,   
         items_mfg.itname item_mfg_name,   
         mfghead.mhreqqty item_mfg_req,   
         mfghead.mhmfgqty item_mfg_rec,   
         items_mfg.itum item_mfg_um,   
         items_mfg.itstdpur item_mfg_std,   
         mfghead.mhreqdat item_mfg_reqdat,   
         mfghead.mhcmntrel item_mfg_cmnt, 
			( Select Min( hsdatim)
             From histostock
            Where hscode   = 'RCMO'           And 
                  hsordtyp = 'M'              And
						hsordno  = :Selected_order And
					hsordlin = 0 /*os2519*/  ) item_mfg_firstrcmodat ,
  			mfghead.mhmfgdat item_mfg_mfgdat,
			mfghead.mhclosdat item_mfg_closdat
    FROM items items_mfg,   
         mfghead
   WHERE ( mfghead.mhitem = items_mfg.itcode ) and  
         ( mfghead.mhcode = :Selected_order ) 

```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_item_mfg_id |
| items_item_mfg_name |
| mfghead_item_mfg_req |
| mfghead_item_mfg_rec |
| items_item_mfg_um |
| items_item_mfg_std |
| mfghead_item_mfg_reqdat |
| mfghead_item_mfg_cmnt |
| citem_mfg_firstrcmodat |
| mfghead_item_mfg_mfgdat |
| mfghead_item_mfg_closdat |

