# zmod_mfg_item_bcd_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as print_order,
			mfghead.mhcode,   
         mfghead.mhitem,   
         items_a.itname,   
         mfghead.mhreqqty,   
         items_a.itum,   
         mfghead.mhreqdat,   
         mfghead.mhcmntrel,   
         mfghead.mhmfgqty,   
         mfghead.mhlotmfg,   
         mfghead.mhtype,
         mfghead.mhexpdat,  
			mfghead.mhlotprt,
			mfghead.mhsalhead,
			mfghead.mhsalline
    FROM items items_a,   
         mfghead  
   WHERE ( mfghead.mhitem = items_a.itcode ) and  
         ( mfghead.mhcode = :Selected_order )  
UNION ALL 
  SELECT 2,
			mfgcoitem.mccode,
			mfgcoitem.mcitem,   
         items.itname,   
         0,   
         items.itum,
         null, 
         null, 
			mfgcoitem.mcmfgqty,   
         mfgcoitem.mclotmfg,
			'',
         mfgcoitem.mcexpdat,   
         mfgcoitem.mclotprt,
			null,
			null
    FROM mfgcoitem,   
         items  
   WHERE ( mfgcoitem.mcitem = items.itcode ) and  
         ( ( mfgcoitem.mccode = :Selected_order ) ) 

UNION ALL 
 select 	3,
			:Selected_order,
			bccoitem,
         items.itname,   
         0,   
         items.itum,
         null, 
         null, 
			0,   
         null,
			'',
         null,   
         null,
			null,
			null
	 from mfghead, bomcoitem, items
	where bomcoitem.bccoitem = items.itcode and 
			bomcoitem.bccode = mfghead.mhitem and 
			bomcoitem.bctype = mfghead.mhbomtyp and 
			mfghead.mhcode = :Selected_order and 
			bomcoitem.bccoitem not in ( select mcitem from mfgcoitem where mccode = :Selected_order )

order by 1, 2
  

```

## Colonnes
| Colonne |
|---------|
| items_print_order |
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| items_itum |
| mfghead_mhreqdat |
| mfghead_mhcmntrel |
| mfghead_mhmfgqty |
| mfghead_mhlotmfg |
| mfghead_mhtype |
| mfghead_mhexpdat |
| mfghead_mhlotprt |
| mfghead_mhsalhead |
| mfghead_mhsalline |

