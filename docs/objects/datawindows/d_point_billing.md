# d_point_billing

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _devis
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline,   
         salline.slitem,   
         items.itname,   
         salline.slstdval,   
         salline.slsalval,   
         salline.sldatship,   
         salhead.shcode,   
         salline.slstatus,   
         salhead.shcurr,   
         salhead.shcust,   
         adresses.adname,   
         items.itum,   
         salline.slqtyreq,   
         salline.slqtyreal  as slqtyreal,   
         (salline.slqtyreq - (salline.slqtyreal - if invoiced is null then 0 else invoiced endif)) * (if isnull(salline.slvalsddisc,0) <> 0 then 
																													salline.slvalsddisc * salline.sluomconv 
																												else 
																													salline.slunitprice 
																												endif) solde_cost,   
         adresses.adgrcust,   
         salhead.shautho,
			items.itstat1,
			items.itstat2,
			items.itactiv,
			adresses.adgrcust,
 			salhead.shsalesman,
         salline.slcustref, 
         salline.slsample, 
         salline.slshipto, 
         shipto.stdesc,
			(if isnull(salline.slvalsddisc,0) <> 0 then 
				salline.slvalsddisc * salline.sluomconv 
			else 
				salline.slunitprice 
			endif) as slunitprice,
			salline.slcomment,
			(SELECT sum(invoiceline.ilqty)
				FROM invoiceline
				WHERE invoiceline.ilsalorder = salline.slcode
					AND invoiceline.ilsalline = salline.slline
					AND invoiceline.iltype = 'A') as qty_antinvoice,
			(SELECT sum(shipline.slqty)
				FROM shipline
				WHERE shipline.slsalorder = salline.slcode
					AND shipline.slsalline = salline.slline
					AND shipline.slinv = 'Y'
					AND (shipline.slinvno = 0 OR shipline.slinvno is null) ) as invoiced,
			salline.slsalghost,
			items.ittyp,
			salline.slqtyalloc as allocated ,
			salline.slprorig ,  
			IF isnull((select ppvalue from progparam where ppcode = 'MULTICO'), '') = '1' THEN /*os2573*/
				isnull(shmccode, '##########')
			ELSE
				isnull((select linkmcad.lkmccode FROM linkm
```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| salline_slitem |
| items_itname |
| salline_slstdval |
| salline_slsalval |
| salline_sldatship |
| salhead_shcode |
| salline_slstatus |
| salhead_shcurr |
| salhead_shcust |
| adresses_adname |
| items_itum |
| salline_slqtyreq |
| salline_slqtyreal |
| csolde_cost |
| adresses_adgrcust |
| salhead_shautho |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| adresses_adgrcust |
| salhead_shsalesman |
| salline_slcustref |
| salline_slsample |
| salline_slshipto |
| shipto_stdesc |
| salline_slunitprice |
| salline_slcomment |
| cqty_antinvoice |
| cinvoiced |
| salline_slsalghost |
| items_ittyp |
| salline_allocated |
| salline_slprorig |
| mcdo |
| shcons |
| salhead_shdatreq |

