# zmod_salord_alloc_pack_det_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT packings.pkcode 							As PackCode ,
			packings.pkname							As PackName ,   
         itempack.ipconv							As PackConv ,
			packings.pkstdcost						As PackCost ,
			salhead.shcurr								As Curr		,
			salline.slitem								As Item		,
         ( Select currencies.cuconv
				 From currencies
				Where currencies.cucode = Curr ) As CurrConv ,
			( If itempack.ipconv < 0
					Then salline.slqtyalloc * itempack.ipconv * -1
					Else Ceiling( salline.slqtyalloc / itempack.ipconv)
				EndIf		 															) As PackQty ,
			( Select adresses.adautoitpack
				 From adresses
				Where adresses.adcode = salhead.shcust )					  As AutoVal	,
			salhead.shcode								As ShCode
    FROM salhead	,
			salline	,
			items		,
			packings	,
			itempack 
   WHERE packings.pkcode 			= itempack.ippack		And  
			itempack.ipitem			= salline.slitem		And
			salhead.shcode          = salline.slcode		And 
			salline.slitem          = items.itcode			And
			salline.slqtyalloc		> 0						And
			salline.slstatus 			< '6'						And
			( salline.slprintghost <> 'N' 	Or 
			  salline.slprintghost Is Null 				)	And 
			salline.slshipto        = :ran_Shipto	 		And 
			AutoVal						= 'Y'						And
			salhead.shcode			  In  ( Select Distinct salline.slcode
													 From salhead ,
															salline 
													Where salhead.shcode     = salline.slcode And
															salline.slqtyalloc > 0					And
															salhead.shcust		 = :ras_Cust		And
															salline.slshipto   = :ran_Shipto        )       
    
Order By 1, 3

```

## Colonnes
| Colonne |
|---------|
| packings_packcode |
| packings_packname |
| itempack_packconv |
| packings_packcost |
| curr |
| salline_item |
| currconv |
| cpackqty |
| cautoval |
| salhead_shcode |

