# d_techdata_torecalc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT 'A' as type,
			items.itcode,   
         items.itname,   
         itstat1.imdesc,   
         itstat2.isdesc,
			items.ittddatemodif,
			items.ittechdatarecalc,
			'' as file,
			cast(null as datetime) as drdatecrea,
			'' as comments
    FROM items, 
			itstat1, 
			itstat2 
   WHERE itstat1.imcode = items.itstat1 AND 
         itstat2.iscode = items.itstat1 AND  
         itstat2.iscode2 = items.itstat2 AND 
			items.itsale = 'Y' AND 
			items.ittyp = 'M' AND 
			isnull(items.ittdtorecalc, 'N') = 'Y' 
 
UNION ALL 
 
   SELECT 'L',
			items.itcode,   
         items.itname,   
			'',
			'',
			items.ittddatemodif,
			items.ittechdatarecalc,
			docref.drfile,
			docref.drdatecrea,
			docref.drcomment
    FROM items, 
			docref	 
   WHERE items.itsale = 'Y' AND 
			items.ittyp = 'M' AND 
			docref.drtyp = 'I' AND 
		 	docref.drmod = 'F' AND 
		  	docref.drgroup2 = - 2 AND 
			docref.drrefc = items.itcode AND
			( docref.drdatecrea < isnull(items.ittechdatarecalc, datetime('1900/01/02 00:00:00')) OR
			  docref.drdatecrea < isnull(items.ittddatemodif, datetime('1900/01/02 00:00:00')))  
 
ORDER BY 1,
			2,
			9


```

## Colonnes
| Colonne |
|---------|
| ctype |
| itcode |
| itname |
| imdesc |
| isdesc |
| ttddatemodif |
| ittechdatarecalc |
| cfile |
| cdrdatecrea |
| ccomments |

