# zmod_shipnotice_le_kit_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT 1 clineid, 
		salhead.shcustref salheadcustref,
		salhead.shcust custid ,
		shipline.slline shipline,   
		shipline.slitem shipitemid,   
		if trim(isnull( (select loorgcode from lots where locode = shipline.sllot) ,'')) = '' then shipline.sllot else (select loorgcode from lots where locode = shipline.sllot) endif	 as shiplot,   
		shipline.slqty shipqty,   
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
					( yv_linkitad.lkadcode = shiphead.shcust ) And
					( yv_linkitad.lkactiv  = 'Y'             )     ) As lkadref,
		( Select yv_linkitad.lkadref2 
			From yv_linkitad 
			Where ( yv_linkitad.lktyp    = 'S'             ) And 
					( yv_linkitad.lkitem   = items.itcode    ) And
					( yv_linkitad.lkadcode = shiphead.shcust ) And
					( yv_linkitad.lkactiv  = 'Y'             )     ) As lkadref2,
		items.itweight itemweight, 
		( select ildesc from itemlang where ilitcode = shipline.slitem and illgcode = :ras_Lang ) ctranslate,
		lots.loexpdat lotexpiry,
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
		salhead.shshiptocmnt											As	shiptocmnt	,
		salline.slsalghost											As Ghost			,
		salline.slprintghost											As printghost  ,

```

## Colonnes
| Colonne |
|---------|
| shiphead_clineid |
| salhead_salheadcustref |
| salhead_custid |
| shipline_shipline |
| shipline_shipitemid |
| shipline_shiplot |
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
| lots_lotexpiry |
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
| salhead_shiptocmnt |
| salline_ghost |
| salline_printghost |
| ckit |
| cshowkit |

