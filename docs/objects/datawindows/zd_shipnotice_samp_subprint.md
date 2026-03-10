# zd_shipnotice_samp_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT 1 clineid, 
		'' as salheadcustref,
		shiphead.shcust custid ,
		shipline.slitem shipitemid,   

		sum(
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			shipline.slcustpc
		ELSE
			shipline.slqty
		ENDIF ) as  shipqty,   

		shipline.slsalorder salorder,   
		shipline.slsalline salline,   
		shipline.sllot as lotref,   

		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			items.itumtarif
		ELSE
			items.itum
		ENDIF as salum,   

		shiphead.shdate saldatreq,
		1 saluomconv,  
		shipline.slitcustnam shipitemname,  
		items.itname itemname,   
		shipline.slcomment shiplinecmnt,   
		items.itdefaultlot itemdefaultlot,   
		items.itconvusr itemconvumusr,   
		items.itumusr itemumusr,   
		items.itdesc2 itemdesc2,
		( Select linkitad.lkadref 
			From linkitad 
			Where ( linkitad.lktyp    = 'S'             ) And 
					( linkitad.lkitem   = items.itcode    ) And
					( linkitad.lkadcode = cust ) And
					( linkitad.lkactiv  = 'Y'             )     ) As lkadref,
		( Select linkitad.lkadref2 
			From linkitad 
			Where ( linkitad.lktyp    = 'S'             ) And 
					( linkitad.lkitem   = items.itcode    ) And
					( linkitad.lkadcode = cust ) And
					( linkitad.lkactiv  = 'Y'             )     ) As lkadref2,
		items.itweight itemweight, 
		( select ildesc from itemlang where ilitcode = shipline.slitem and illgcode = :ras_Lang ) ctranslate,
		shiphead.shdate shipdate,
		shiphead.shgroweight shipweight ,
		0 As sccost,
		currencies.cucode As shcurr,
		currencies.cuconv As cuconv,
		items.itwistat itemwistat,
		0 saleorval,
		0 salemodval,
		adresses.adristcust as discount,
		0 as shcode,
		''											As	shiptocmnt	,
		null											As Ghost			,
		'Y'										As printghost  ,
		0 				As kit			,
		'' as showkit,
			if isnull((SELECT pr
```

## Colonnes
| Colonne |
|---------|
| shiphead_clineid |
| salhead_salheadcustref |
| shiphead_custid |
| shipline_shipitemid |
| shipline_shipqty |
| shipline_salorder |
| shipline_salline |
| shipline_lotref |
| salline_salum |
| shiphead_saldatreq |
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
| currencies_shcurr |
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
| ccust |

