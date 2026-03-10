# d_techdata_torecalc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         itstat1.imdesc,   
         itstat2.isdesc,
			items.ittddatemodif,
			items.ittechdatarecalc,
			isnull(items.ittdtorecalc, 'N') as ittdtorecalc
    FROM items, 
			itstat1, 
			itstat2 
   WHERE itstat1.imcode = items.itstat1 AND 
         itstat2.iscode = items.itstat1 AND  
         itstat2.iscode2 = items.itstat2 AND 
			items.itsale = 'Y' AND 
			items.ittyp = 'M' AND 
			isnull(items.ittdtorecalc, 'N') = 'Y' and 
			isnull(items.it_excl_rec_daa,'N') = 'N'
ORDER BY items.itcode 


```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| imdesc |
| isdesc |
| ttddatemodif |
| ittechdatarecalc |
| ittdtorecalc |

