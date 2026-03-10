# zd_qry_bom_ml_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT bomline.blline,   
         bomline.blramcode,   
         bomline.blramqty,   
         bomline.blramtype,   
         bomline.blstartdat,   
         bomline.blstopdat,   
         bomline.blscrap,   
         items.itname,   
         items.itum,   
         bomline.blpalloctyp,   
         bomline.blcomment,   
         bomhead.bhcoeff  
    FROM bomline,   
         items,   
         bomhead  
WHERE	items.itcode = bomline.blramcode							and  
         	bomline.blcode = bomhead.bhcode 						and  
         	bomline.bltype = bomhead.bhtype 						and  
         	bomline.blcode = :Selected_item							AND  
         	bomline.bltype = '0' 											AND
			( Exists ( Select * 
						 From items 
					    Where itcode = bomline.blcode and 
								 ittyp In ( 'M', 'F')					) Or 
			  Not exists ( Select * 
							  From items 
							Where itcode = bomline.blcode 	)  		)  //HA2226
ORDER BY bomline.blline ASC   

```

## Colonnes
| Colonne |
|---------|
| bomline_blline |
| bomline_blramcode |
| bomline_blramqty |
| bomline_blramtype |
| bomline_blstartdat |
| bomline_blstopdat |
| bomline_blscrap |
| items_itname |
| items_itum |
| bomline_blpalloctyp |
| bomline_blcomment |
| bomhead_bhcoeff |

