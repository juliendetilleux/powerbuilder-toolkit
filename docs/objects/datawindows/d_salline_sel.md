# d_salline_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT '10' as sort_criteria ,
			salline.slline, 
         '#' as sltyp,  
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
         0 devis_nr,
         0 version_nr,
         items.ittyp,
         items.itqtypal itqtypal,
         ( select lppackitem from linkitadpack where lptyp = 'S' and lpitem = salline.slitem and lpadcode = salhead.shcust ) lkqtypal,
         salline.slsalval,
			salline.slunitprice,
			salline.slcomment,
         (SELECT filehead.fhdesc FROM filehead WHERE filehead.fhcode = salline.slfileref) as fileref,
			(SELECT fileline.fldesc FROM fileline WHERE fileline.flline = salline.slfileline and fileline.flcode = salline.slfileref) as fileline,
			(select chdesc from condhead where chcode = salline.slstdcondition and chlevel = 'L') as slstdcondition,
			salline.slsalghost,
			salline.slprintghost,
			'' as sltype,
			(select first condhead.chparent from condhead where condhead.chcode = salline.slstdcondition ) as condition,
			salline.slsort,
			salline.slcode,
         salline.slprorig,
		isnull(salline.slvalsddisc, salline.slstdval) as slvalsddisc,
		salline.sluomconv,
		(select first shipline.slcode from shipline where  (salline.slcode = shipline.slsalorder) and (salline.slline=shipline.slsalline) and (salline.slitem=shipline.slitem)) as NoteEnvoie,
		(select first invoiceline.ilcode from invoiceline where  (salline.slcode = invoiceline.ilsalorder) and (salline.slline= invoiceline.ilsalline) and (salline.slitem=invoiceline.ilitem)  ) as Facture
    FROM salline,
         salhead,   
         shipto,   
      
```

## Colonnes
| Colonne |
|---------|
| csort_criteria |
| slline |
| csltyp |
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
| salline_devis_nr |
| salline_version_nr |
| items_ittyp |
| items_itqtypal |
| clkqtypal |
| salline_slsalval |
| salline_slunitprice |
| salline_slcomment |
| cfileref |
| cfileline |
| salline_slstdcondition |
| salline_slsalghost |
| salline_slprintghost |
| csltype |
| salline_condition |
| salline_slsort |
| salline_slcode |
| salline_slprorig |
| slvalsddisc |
| salline_sluomconv |
| noteenvoie |
| facture |

