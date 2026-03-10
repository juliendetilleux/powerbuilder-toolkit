# d_salline_lacks

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline, 
        items.itname,  
        items.itum,
        salline.slqtyreq - salline.slqtyreal as qtyreq,
        salline.slqtyalloc,
        qtyreq - salline.slqtyalloc sold2prep ,
        (select choices.chname 
			from choices 
			where choices.chcode = salline.slstatus AND	choices.chtype = 'CUSS') as shipstate,
        shipto.stdesc,
        salline.sldatship,
        (select choices.chname 
			from choices 
			where choices.chcode = if salline.slstate is null then 0 else salline.slstate endif AND
 				choices.chtype = 'LACK') as state,
        salline.slstate,
        salline.slcode,
        salline.slitem ,
        salline.slqtyord ,
        salline.slqtyreq ,
        salline.sluomord  ,
        salline.sldatreq ,
        salline.slstdval ,
        salline.slsalval ,
        salline.slqtyreal ,
        salline.slstatus ,
        salline.sldatplan ,
        salline.sldatreal ,
        salline.sldatcrea ,
        salline.slpallocseq ,
        salline.slcustref ,
        salline.slshipto ,
        salline.slctrl ,
        salline.slorval ,
        salline.slrist ,
        salline.slprorig ,
        salline.slexfrcst ,
        salline.sluomconv ,
        salline.slqtyinv ,
        salline.slpreinv ,
		  salline.slsample,
		  salline.slqtyres,
		  salline.slcomment,
		  salline.sldatcustreq, 
		  salline.slstdcondition,
		  salline.slpricetype,
		  salline.slfileref,
		  salline.slfileline,
		  salline.slunitprice,
		  salline.slbaseprice,
		  salline.slsalorder,
		  salline.slsalline,
		(items.itstock - items.italloc) as availstock, 
		items.itcat ,
			  salline.slsalghost,
			  items.itsalghost,
			  salline.slprintghost,
			  salline.slfinalprice,
			  salline.slorigval,
		isnull(slvalsddisc, slstdval) as slvalsddisc,
		salline.slratehead,
		salline.slcustalloc,
		items.itumtarif 
    FROM salline, items, shipto, salhead
   WHERE salline.slcode = :al_shcode AND
        salhead.s
```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| items_itname |
| itum2 |
| cqtyreq |
| salline_slqtyalloc |
| csold2prep |
| cshipstate |
| shipto_stdesc |
| salline_sldatship |
| cstate |
| salline_slstate |
| salline_slcode |
| salline_slitem |
| salline_slqtyord |
| salline_slqtyreq |
| salline_sluomord |
| salline_sldatreq |
| salline_slstdval |
| salline_slsalval |
| salline_slqtyreal |
| salline_slstatus |
| salline_sldatplan |
| salline_sldatreal |
| salline_sldatcrea |
| salline_slpallocseq |
| salline_slcustref |
| salline_slshipto |
| salline_slctrl |
| salline_slorval |
| salline_slrist |
| salline_slprorig |
| salline_slexfrcst |
| salline_sluomconv |
| salline_slqtyinv |
| salline_slpreinv |
| salline_slsample |
| salline_slqtyres |
| salline_slcomment |
| salline_sldatcustreq |
| salline_slstdcondition |
| salline_slpricetype |
| salline_slfileref |
| salline_slfileline |
| salline_slunitprice |
| salline_slbaseprice |
| salline_slsalorder |
| salline_slsalline |
| availstock |
| items_itcat |
| salline_slsalghost |
| items_itsalghost |
| salline_slprintghost |
| salline_slfinalprice |
| salline_slorigval |
| slvalsddisc |
| salline_slratehead |
| salline_slcustalloc |
| items_itumtarif |

