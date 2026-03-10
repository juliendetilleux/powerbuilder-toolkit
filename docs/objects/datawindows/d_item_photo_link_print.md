# d_item_photo_link_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,
			items.itstat1,
			( Select itstat1.imdesc 
				From itstat1
			   Where itstat1.imcode = items.itstat1 ),
			items.itstat2,
			( Select itstat2.isdesc 
				From itstat2
			   Where itstat2.iscode = items.itstat1 And
					 itstat2.iscode2 = items.itstat2	     ), 
			( Select docref.drfile
				 From docref
				Where docref.drtyp = 'I' And
						docref.drrefc = items.itcode And
						docref.drgroup1 = 0 And
						docref.drgroup2 = -99				) As LinkRef ,
			If IsNull( LinkRef, '') = '' Then 0 Else 1 EndIf As Link 
    FROM items  
   WHERE ( items.itcode not like '###########%' ) AND  
         ( items.itactiv = 'Y' )   
ORDER BY Link, 
			items.itstat1,
			items.itstat2,
			items.itcode 

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itstat1 |
| imdesc |
| itstat2 |
| isdesc |
| linkref |
| link |

