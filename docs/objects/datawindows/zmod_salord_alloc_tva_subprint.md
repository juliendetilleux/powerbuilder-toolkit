# zmod_salord_alloc_tva_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select 1																						As LineType	, 
			Sum ( salline.slunitprice * salline.slqtyalloc )						As Val		,
			tvalvl_country.tclvl 																		As TVA		,
			salhead.shcurr																						,
			1																						As CurConv	,
			adresses.adristcust																				,
			adresses.adtvatyp																	As TvaType	,
			salline.slsample																	As sample	,
			salhead.shcode																		As SalHead	,
			0																						As	PckQty	,
			'N'																					As AutoVal	,
			''																						As	PackCode
	 From salline	,
			salhead,
			items,
			tvalvl_country,
			adresses
	Where salhead.shcode  = salline.slcode					And 
			items.itcode    = salline.slitem					And 
			salline.slqtyalloc		> 0						And
			salline.slstatus 			< '6'						And
			( salline.slprintghost <> 'N' 	Or 
			  salline.slprintghost Is Null 				)	And 
			salline.slshipto        = :ran_Shipto	 		And 
			tvalvl_country.tccode   = items.ittvalvl					And 
			tvalvl_country.tccountry = (select adcountrid from adresses
											where adcode = IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2552*/
																	isnull(salhead.shmccode, '##########')
																ELSE
																	isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = salhead.shcust),'##########') 
																ENDIF)   And /*os2552*/
			salhead.shcust = adresses.adcode					And
			salhead.shcode			  In  ( Select Distinct salline.slcode
													 From salhead ,
															salline 
													Where salhead.shcode     = salline.slcode And
															salline.slqtyalloc > 0					And
															salhead.shcust		 = :ras_Cust		And
															salline.slshipto   = :ran_Shipto        )
Group By LineType					,
			TVA						,
			salhead.shdatcrea		,
			salhead.shcust			,
			salline.slitem			,
			salhead.shcurr			,
			adresses.adristcust  ,
			TvaType       			,
			salline.sl
```

## Colonnes
| Colonne |
|---------|
| salline_linetype |
| cval |
| tvalvl_country_tva |
| salhead_shcurr |
| salline_curconv |
| adresses_adristcust |
| adresses_tvatype |
| salline_sample |
| salhead_salhead |
| salline_pckqty |
| cautoval |
| cpackcode |

