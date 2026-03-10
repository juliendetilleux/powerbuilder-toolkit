# d_salline_kit

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slline, 
         '#',  
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
			(select chdesc from condhead where chcode = salline.slstdcondition and chlevel = 'L') as desc_slstdcondition,
			salline.slsalghost,
			salline.slprintghost,
			salline.slcode,
		salline.slfileref,
		salline.slfileline,
		salline.slstdcondition,
		salhead.shcust    
    FROM salline,
         salhead,   
         shipto,   
         items  
   WHERE ( items.itcode = salline.slitem ) and  
         ( salhead.shcode = salline.slcode ) and
         ( salhead.shcust = shipto.stcode ) and
         ( salline.slshipto = shipto.stseq ) and
         ( salline.slcode = :Selected_orders )  and
			( salline.slline = :slline )
 
 order by 1 desc

```

## Colonnes
| Colonne |
|---------|
| slline |
| sltyp |
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
| desc_slstdcondition |
| salline_slsalghost |
| salline_slprintghost |
| salline_slcode |
| salline_slfileref |
| salline_slfileline |
| salline_slstdcondition |
| salhead_shcust |

