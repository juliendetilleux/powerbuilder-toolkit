# zmod_mfgordr_cost_prod_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT 2 as ordernr,
			mfgcoitem.mccostf,  
         mfgcoitem.mcitem,   
			mfgcoitem.mcmfgcost,   
         mfgcoitem.mcmfgqty,   
         mfgcoitem.mcreqty,   
         items.itname,   
         items.itdefaultlot,   
         items.itum  
    FROM mfgcoitem,   
         items  
   WHERE ( mfgcoitem.mcitem = items.itcode ) and  
         ( ( mfgcoitem.mccode = :Selected_order ) )    
union all 
  SELECT 1,
			1 , 
         mfghead.mhitem,   
			mfghead.mhmfgcost,   
         mfghead.mhmfgcostqty - 
				(select sum(mfgcoitem.mcmfgqty * mccostf )
					 from mfgcoitem 
					where mfgcoitem.mccode = :Selected_order and 
							mfgcoitem.mcitem <> mfghead.mhitem ),   
         mfghead.mhreqqty,   
         items.itname,   
         items.itdefaultlot,   
         items.itum  
    FROM mfghead,   
         items  
   WHERE ( mfghead.mhitem = items.itcode ) and  
         ( mfghead.mhcode = :Selected_order  )   
union all 
  SELECT 3,
			0 , 
         histostock.hsitem,   
			0,   
         histostock.hsqty * ( -1),  
         0,    
         items.itname,   
         items.itdefaultlot,   
         items.itum  
    FROM histostock,   
         items  
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( histostock.hsordtyp = 'M' ) and
         ( histostock.hscode = 'RQMO' ) and
         ( histostock.hsordno = :Selected_order  )   
order by 1 asc , 2 desc , 3 asc 

```

## Colonnes
| Colonne |
|---------|
| mfgcoitem_ordernr |
| mfgcoitem_mccostf |
| mfgcoitem_mcitem |
| mcmfgcost |
| mcmfgqty |
| mfgcoitem_mcreqty |
| items_itname |
| items_itdefaultlot |
| items_itum |

