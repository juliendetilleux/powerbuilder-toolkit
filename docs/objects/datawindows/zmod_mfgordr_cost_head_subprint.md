# zmod_mfgordr_cost_head_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfgcoitem.mcitem,   
         items.itcode,   
			items.itname,
         mfgcoitem.mcreqty,   
			items.itum, 
         mfgcoitem.mcmfgqty,   
         mfgcoitem.mcmfgcost  
    FROM mfgcoitem,
			mfghead,   
         items  
   WHERE ( mfgcoitem.mcitem = items.itcode ) and 
			( mfghead.mhcode =  :selected_order) and
         ( mfgcoitem.mccode = :selected_order) 
UNION ALL 
  SELECT mfghead.mhitem,   
         items.itcode,   
			items.itname,
         mfghead.mhreqqty,   
			items.itum, 
         mfghead.mhmfgqty,   
         mfghead.mhmfgcost  
    FROM mfghead,   
         items  
   WHERE ( mfghead.mhitem = items.itcode ) and 
			( mfghead.mhcode =  :selected_order) and
			( mfghead.mhtype <> 'G' )


ORDER BY 1 ASC 
```

## Colonnes
| Colonne |
|---------|
| mfgcoitem_mcitem |
| items_itcode |
| items_itname |
| mfgcoitem_mcreqty |
| items_itum |
| mfgcoitem_mcmfgqty |
| mfgcoitem_mcmfgcost |

