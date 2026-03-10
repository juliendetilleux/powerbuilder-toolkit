# zmod_shipnotice_le_subprint

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
  
		 if trim( isnull( (select loorgcode from lots where locode = shipline.sllot) , '') ) = '' then
			shipline.sllot
		else
			(select loorgcode from lots where locode = shipline.sllot)
		endif  												As shiplot			,

		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			shipline.slcustpc
		ELSE
			shipline.slqty
		ENDIF as shipqty,   

		shipline.slsalorder salorder,   
		shipline.slsalline salline,   
		salline.slcustref sallinecustref,   

		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			items.itumtarif
		ELSE
			salline.sluomord
		ENDIF as salum,   

		salline.sldatreq saldatreq,
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			1
		ELSE
			salline.sluomconv 
		ENDIF as saluomconv,  
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
		( select ildesc from itemlang 
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
| ccust |
| calcdluo |
| lkcalcdluo |
| salline_sldatship |
| lkremval |
| remref |

