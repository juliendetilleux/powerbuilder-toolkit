# d_salord_alloc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
 SELECT salline.slshipto,
			adresses.adcode
    From salhead	,
			salline	,
			items , 
			adresses
	Where adresses.adcode = :ras_Cust   And
			salhead.shcode          = salline.slcode		And 
			salline.slitem          = items.itcode			And
			salline.slqtyalloc		> 0						And
			salline.slstatus 			< '6'						And
			( salline.slprintghost <> 'N' 	Or 
			  salline.slprintghost Is Null 				)	And 
			salline.slshipto        = :ran_Shipto	 		And 
			salhead.shcode			  In  ( Select Distinct salline.slcode
													 From salhead ,
															salline 
													Where salhead.shcode     = salline.slcode And
															salline.slqtyalloc > 0					And
															salhead.shcust		 = :ras_Cust		And
															salline.slshipto   = :ran_Shipto        )    

	group by salline.slshipto, adresses.adcode

```

## Colonnes
| Colonne |
|---------|
| salline_slshipto |
| adresses_adcode |

