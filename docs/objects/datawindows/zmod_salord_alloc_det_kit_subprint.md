# zmod_salord_alloc_det_kit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  Select 1 																	As clineid		,
			salline.slcode		 											As slsalorder	,
			salline.slline							 						As slsalline	,
			salline.slitem 												As slitem		,
			salline.slcomment 											As slcomment	,
			salline.slqtyalloc											As slqty			,
			items.itname 													As itname		,
			items.itdesc2 													As itdesc2		,
			salhead.shcode 												As shcode		,
			salhead.shcustref 											As shcustref	,
			salhead.shcurr 												As shcurr		,
			salline.sluomord 												As sluomord		,
			salline.slstdval 												As slstdval		,
			( Select yv_linkitad.lkadref
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'             And 
						yv_linkitad.lkitem   = items.itcode    And 
						yv_linkitad.lkadcode = salhead.shcust  And 
						yv_linkitad.lkactiv  = 'Y'                 )	As Lkadref		,
			( Select yv_linkitad.lkadref2
				 From yv_linkitad
				Where yv_linkitad.lktyp    = 'S'					And 
						yv_linkitad.lkitem   = items.itcode 	And 
						yv_linkitad.lkadcode = salhead.shcust  And 
						yv_linkitad.lkactiv  = 'Y'						 ) As Lkadref2		,
			( Select itemlang.ildesc
				 From itemlang
				Where itemlang.ilitcode = salline.slitem And 
						itemlang.illgcode = :ras_Lang           ) As Translate	,
			1																	As CurrConv		,	
			0																	As AdRistCust 	,
			0																	As ValExclDisc	,
			salline.sluomconv												As UmConv		,
			salline.slunitprice											As UnitPrice	,
			items.itum														As ItUm			,
			salline.slsalghost											As Ghost			,
			salline.slprintghost											As printghost  ,
			(Select first count(*) 
				From salline as sals 
				Where sals.slcode = shcode And 
					sals.slsalghost = salline.slline) 				As kit			,
			salhead.shshiptocmnt											As	shiptocmnt	,
			salline.slsample												As sample 		,
			(Select parameters.pmcval From parameters Where parameters.pmcode = 'SHOWKIT') as showkit
    From salh
```

## Colonnes
| Colonne |
|---------|
| salhead_clineid |
| salline_slsalorder |
| salline_slsalline |
| salline_slitem |
| salline_slcomment |
| salline_slqty |
| items_itname |
| items_itdesc2 |
| salhead_shcode |
| salhead_shcustref |
| shcurr |
| salline_sluomord |
| salline_slstdval |
| lkadref |
| lkadref2 |
| ctranslate |
| salhead_currconv |
| salhead_adristcust |
| salhead_valexcldisc |
| salline_umconv |
| salline_unitprice |
| items_itum |
| salline_ghost |
| salline_printghost |
| ckit |
| salhead_shiptocmnt |
| salline_sample |
| cshowkit |

