# ds_closeof

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
SELECT mfghead.mhcode
		 FROM mfghead,   
				items  
		WHERE ( items.itcode = mfghead.mhitem ) and  
				( mfghead.mhstatus >= '6' ) AND  
				( mfghead.mhstatus <= '7' ) AND  
				( mfghead.mhitem <> '###########M' ) AND 
				( mfghead.mhtype <> 'G' ) AND
				( date(mfghead.mhreldat) <= today() - :ll_NBDMFGCS ) 
	 
 UNION ALL 
   
SELECT distinct mfghead.mhcode
 FROM mfgcoitem,   
		mfghead,   
		items  
WHERE ( mfghead.mhcode = mfgcoitem.mccode ) and  
		( mfgcoitem.mcitem = items.itcode )  and
		( mfghead.mhstatus >= '6' ) AND  
		( mfghead.mhstatus <= '7' ) AND  
		( mfghead.mhitem <> '###########M' ) AND 
		( mfghead.mhtype = 'G' ) AND
		( date(mfghead.mhreldat) <= today() - :ll_NBDMFGCS ) ;


```

## Colonnes
| Colonne |
|---------|
| mhcode |

