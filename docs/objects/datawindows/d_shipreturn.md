# d_shipreturn

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slline,   
         shipline.slitem,   
         shipline.sllot,   
         shipline.slqty,   
		lots.loexpdat,
		lots.locode,
         items.itum,   
         shiphead.shdate,   
         shiphead.shcode,   
         items.itname,   
         salline.slcustref,   
         shipline.slsalorder,   
         salline.slqtyord,   
         salline.slqtyreq,   
         salline.slsalval,   
         shipline.slinv,   
         shiphead.shcust,   
         adresses.adname,   
         adresses.adgrcust,   
         items.itstat1,   
         items.itstat2,   
		items.itqc,
		items.itloc,
         salhead.shsalesman,   
         shiphead.shshipto,   
         shipline.slinvno,   
		adresses.adcurr,   
		adresses.adcustpay, 
		adresses.adtva, 
		adresses.adtvatyp, 
		 items.itstdpur, 
		items.itactiv,
         shipto.stdesc,   
		         ( select first truckline.tlcode 
					from truckline
				  where shipline.slline = truckline.tlshipline
					 AND shipline.slcode = truckline.tlshiphead) as truckcode ,   
         shipline.slsalline,   
         salline.slunitprice,   
         salline.slcomment,
			(SELECT sum(invoiceline.ilqty)
				FROM invoiceline
				WHERE invoiceline.ilsalorder = salline.slcode
					AND invoiceline.ilsalline = salline.slline
					AND invoiceline.iltype = 'A') as qty_antinvoice,
			(select count(*) 
				from shipline as ship 
				where ship.slsalorder = shipline.slsalorder 
					and ship.slsalline = shipline.slsalline) as nb_antinvoice ,
			salline.slsalghost,
			items.ittyp ,  
			isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = shiphead.shcust),'##########') as mcdo ,
	         shipline.slcode,
			items.itdefaultlot,
			 (select invoicehead.ihcodemc from invoicehead where invoicehead.ihcode = shipline.slinvno )

    FROM shipline,
         lots,   
         items,   
         shiphead,   
         salline,   
         salhead,   
         adresse
```

## Colonnes
| Colonne |
|---------|
| slline |
| slitem |
| sllot |
| slqty |
| lots_loexpdat |
| lots_locode |
| items_itum |
| shiphead_shdate |
| shiphead_shcode |
| items_itname |
| salline_slcustref |
| shipline_slsalorder |
| salline_slqtyord |
| salline_slqtyreq |
| salline_slsalval |
| shipline_slinv |
| shiphead_shcust |
| adresses_adname |
| adresses_adgrcust |
| items_itstat1 |
| items_itstat2 |
| items_itqc |
| items_itloc |
| salhead_shsalesman |
| shiphead_shshipto |
| shipline_slinvno |
| adresses_adcurr |
| adresses_adcustpay |
| adresses_adtva |
| adresses_adtvatyp |
| items_itstdpur |
| items_itactiv |
| shipto_stdesc |
| ctruckcode |
| shipline_slsalline |
| salline_slunitprice |
| salline_slcomment |
| cqty_antinvoice |
| cnb_antinvoice |
| salline_slsalghost |
| items_ittyp |
| cmcdo |
| shipline_slcode |
| items_itdefaultlot |
| ihcodemc |

