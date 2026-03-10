# d_mfgorders_print

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
			IF (mfghead.mhlotmfg is null OR trim(mfghead.mhlotmfg) = '')
				 AND items.itlot = 'N' THEN
				items.itdefaultlot
			ELSE
				mfghead.mhlotmfg
			ENDIF as lot,
			mfghead.mhreqdat
	 FROM items,
			mfghead  
	WHERE ( mfghead.mhitem = items.itcode )  and  
			( mfghead.mhcode in (:al_of) )  
 
UNION ALL 
 
  SELECT mfgcoitem.mccode,
			mfgcoitem.mcitem,   
			items.itname,   
			mfgcoitem.mcreqty,   
			items.itum,   
			isnull(mfgcoitem.mclotmfg,''),
			(select mfghead.mhreqdat from mfghead where mfghead.mhcode = mfgcoitem.mccode)
	  FROM mfgcoitem,   
			items  
	 WHERE ( mfgcoitem.mcitem = items.itcode ) and  
			( mfgcoitem.mccode in (:al_of) ) 
 
 ORDER BY 1 ASC, 2 ASC
```

## Colonnes
| Colonne |
|---------|
| mfghead_mhcode |
| mfghead_mhitem |
| items_itname |
| mfghead_mhreqqty |
| items_itum |
| clot |
| mfghead_mhreqdat |

