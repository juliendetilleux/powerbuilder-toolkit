# d_oldword

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
			items.ittechdatarecalc,
			docref.drdatecrea,
			docref.drrefc,
			docref.drcomment,
			docref.drfile,
			docref.drcode,
			CAST(null as char(2)) as lang,
			CAST(null as char(60)) as mod,
			CAST('N' as char(1)) as heckbox
    FROM items, 
			itstat1, 
			itstat2,
			docref	 
   WHERE itstat1.imcode = items.itstat1 AND 
         itstat2.iscode = items.itstat1 AND  
         itstat2.iscode2 = items.itstat2 AND 
			items.itsale = 'Y' AND 
			items.ittyp = 'M' AND 
			docref.drtyp = 'I' AND 
		 	docref.drmod = 'F' AND 
		  	docref.drgroup2 = - 2 AND 
			docref.drrefc = items.itcode AND
			( docref.drdatecrea < isnull(items.ittechdatarecalc, datetime('1900/01/02 00:00:00')) OR
			  docref.drdatecrea < isnull(items.ittddatemodif, datetime('1900/01/02 00:00:00')))  
ORDER BY items.itcode, 
			docref.drdatecrea  


```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| ittechdatarecalc |
| docref_drdatecrea |
| docref_drrefc |
| docref_drcomment |
| docref_drfile |
| docref_drcode |
| clang |
| cmod |
| checkbox |

