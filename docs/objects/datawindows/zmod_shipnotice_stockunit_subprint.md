# zmod_shipnotice_stockunit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT 1 clineid, 
		salhead.shcustref salheadcustref,
		salhead.shcust custid , 
		shipline.slitem shipitemid,   
		sum(shipline.slqty) shipqty,   
		shipline.slsalorder salorder,   
		shipline.slsalline salline,   
		salline.slcustref sallinecustref,   
		salline.sluomord salum,   
		salline.sldatreq saldatreq,
		salline.sluomconv saluomconv,  
		shipline.slitcustnam shipitemname,  
		items.itname itemname,   
		shipline.slcomment shiplinecmnt,   
		items.itdefaultlot itemdefaultlot,   
		items.itconvusr itemconvumusr,   
		items.itumusr itemumusr,   
		items.itdesc2 itemdesc2,
		( Select yv_linkitad.lkadref 
			From yv_linkitad 
			Where ( yv_linkitad.lktyp    = 'S'             ) And 
					( yv_linkitad.lkitem   = items.itcode    ) And
					( yv_linkitad.lkadcode = cust ) And
					( yv_linkitad.lkactiv  = 'Y'             )     ) As lkadref,
		( Select yv_linkitad.lkadref2 
			From yv_linkitad 
			Where ( yv_linkitad.lktyp    = 'S'             ) And 
					( yv_linkitad.lkitem   = items.itcode    ) And
					( yv_linkitad.lkadcode = cust ) And
					( yv_linkitad.lkactiv  = 'Y'             )     ) As lkadref2,
		items.itweight itemweight, 
		( select ildesc from itemlang where ilitcode = shipline.slitem and illgcode = :ras_Lang ) ctranslate,
		shiphead.shdate shipdate,
		shiphead.shgroweight shipweight ,
		0 As sccost,
		salhead.shcurr As shcurr,
		currencies.cuconv As cuconv,
		items.itwistat itemwistat,
		salline.slorval saleorval,
		salline.slstdval salemodval,
		adresses.adristcust as discount,
		salhead.shcode,
		items.itum as itum,
		salhead.shshiptocmnt											As	shiptocmnt	,
		salline.slsalghost											As Ghost			,
		salline.slprintghost											As printghost  ,
		(Select first count(*) 
			From salline as sals 
			Where sals.slcode = salhead.shcode And 
				sals.slsalghost = salline.slline) 				As kit			,
		(Select parameters.pmcval From parameters Where parameters.pmcode = 'SHOWKIT') as showkit,
			
```

## Colonnes
| Colonne |
|---------|
| shiphead_clineid |
| salhead_salheadcustref |
| salhead_custid |
| shipline_shipitemid |
| shipline_shipqty |
| shipline_salorder |
| shipline_salline |
| salline_sallinecustref |
| salline_salum |
| salline_saldatreq |
| salline_saluomconv |
| shipline_shipitemname |
| items_itemname |
| shipline_shiplinecmnt |
| items_itemdefaultlot |
| items_itemconvumusr |
| items_itemumusr |
| items_itemdesc2 |
| lkadref |
| lkadref2 |
| items_itemweight |
| ctranslate |
| shiphead_shipdate |
| shiphead_shipweight |
| shiphead_sccost |
| shcurr |
| currencies_cuconv |
| items_itemwistat |
| salline_saleorval |
| salline_salemodval |
| adresses_discount |
| salhead_shcode |
| items_itum |
| salhead_shiptocmnt |
| salline_ghost |
| salline_printghost |
| ckit |
| cshowkit |
| ccust |

