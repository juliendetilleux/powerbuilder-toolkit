# d_salline_ship_prepare

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT 	salline.slline, 
		salline.slitem,   
        salline.slqtyreq,   
        items.itum,   
        salline.sldatreq,
        salline.sldatship,   
        items.itname,   
		items.itweight,
		items.itvol,
        salline.slqtyreal,   
        salline.slcustref,   
        salline.slstatus,
        shipto.stdesc,
        salline.slqtyalloc,
		salline.slstdval,
  		salline.slqtyres,
        salline.sldatcustreq,
        salline.slqtyord,
        items.ittyp,
        items.itqtypal itqtypal,
        salline.slsort,
		salline.slcode,
        salline.slprorig,
		salline.sluomconv,
		slqtyreq - isnull(slqtyalloc,0) - isnull(slqtyreal,0) as toprep,
		items.itloc,
		( Select Sum( stocks.stqty) - Sum( stocks.stalloc)
				 From stocks,
						lots			,
						locations
				Where locations.lccode = stocks.stloc 											And
						stocks.stitem = salline.slitem 											And
						lots.locode = stocks.stlot 												And
						lots.loitem = salline.slitem 												And
						lots.lostatus In ( 'A', 'P') 												And
						locations.lcexp = 'Y' AND						
						Date( lots.loexpdat) >= Date( Now())  				) As StockDispo,
	(select first lccode from stocks join locations on stocks.stloc = lccode join lots on stocks.stlot = lots.locode 
					where stitem = items.itcode and lcactiv = 'Y' and stocks.stqty - stocks.stalloc > 0  AND  lcexp = 'Y' and	 lots.lostatus in ('A', 'P')  AND lots.loexpdat > today()   
					ORDER BY lots.loexpdat ASC) as emplacement,
	(select lcdesc from locations where lccode = emplacement)  as emp_desc
    FROM 	salline 
			join salhead on salhead.shcode = salline.slcode
			join shipto on salline.slshipto = shipto.stseq and salhead.shcust = shipto.stcode
			join items on items.itcode = salline.slitem
    WHERE 	( salline.slprintghost <> 'N' or salline.slprintghost is null ) and
			salline.slcode = :Selected_orders and
			salline.slstatus < '5' and
			toprep > 0 
Order by emp_desc, emplacement, toprep
```

## Colonnes
| Colonne |
|---------|
| slline |
| salline_slitem |
| salline_slqtyreq |
| items_itum |
| salline_sldatreq |
| salline_sldatship |
| items_itname |
| items_itweight |
| items_itvol |
| salline_slqtyreal |
| salline_slcustref |
| salline_slstatus |
| shipto_stdesc |
| salline_slqtyalloc |
| salline_slstdval |
| salline_slqtyres |
| salline_sldatcustreq |
| salline_slqtyord |
| items_ittyp |
| items_itqtypal |
| salline_slsort |
| salline_slcode |
| salline_slprorig |
| salline_sluomconv |
| toprep |
| items_itloc |
| stockdispo |
| emplacement |
| emp_desc |

