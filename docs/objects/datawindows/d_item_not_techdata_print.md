# d_item_not_techdata_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum ,
			( Select comments.cocmnt
				 From comments
				Where comments.cokey = items.itcode And
						comments.cotype = 'TDNT' And
						comments.coline = 1 And
						comments.cotab = '1' ) As ItIng
    FROM items  
   WHERE ( items.itcode not like '###########%' ) AND  
         ( items.itactiv = 'Y' ) AND  
         ( items.itsale = 'Y' ) AND  
         ( items.ittyp = 'M' ) AND
			( Trim ( IsNull( ItIng, '' )) = '' )
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| iting |

