# d_salline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT  salline.slcode ,
           salline.slline ,
           salline.slitem ,
           salline.slqtyord ,
           salline.slqtyreq ,
           salline.sluomord  ,
           salline.sldatreq ,
           salline.sldatship ,
           salline.slstdval ,
           salline.slsalval ,
           salline.slqtyreal ,
           salline.slstatus ,
           salline.sldatplan ,
           salline.slqtyalloc ,
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
			  items.ittyp ,
			  ( select condhead.chparent from condhead where salline.slstdcondition = condhead.chcode and condhead.chactiv = 'Y' ) as sale_condition, 
           salline.slpricetype,
			  salline.slfileref,
			  salline.slfileline,
			  salline.slunitprice,
			  salline.slbaseprice,
			  '' AS itemname,
			  salline.slsalghost,
			  items.itsalghost,
			  salline.slprintghost,
			  salline.slfinalprice,
			  salline.slorigval,
		isnull(slvalsddisc, slstdval) as slvalsddisc,
		salline.slratehead 
	,salline.slgetriscde AS slgetriscde
	,salline.slsumcde AS slsumcde
      FROM salline,
		     items
     WHERE salline.slitem = items.itcode and
			  salline.slcode = :Selected_order and
           salline.slline = :Selected_line
```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| slitem |
| slqtyord |
| slqtyreq |
| sluomord |
| sldatreq |
| sldatship |
| slstdval |
| slsalval |
| slqtyreal |
| slstatus |
| sldatplan |
| slqtyalloc |
| sldatreal |
| sldatcrea |
| slpallocseq |
| slcustref |
| slshipto |
| slctrl |
| slorval |
| slrist |
| slprorig |
| slexfrcst |
| sluomconv |
| slqtyinv |
| slpreinv |
| slsample |
| slqtyres |
| slcomment |
| sldatcustreq |
| slstdcondition |
| items_ittyp |
| sale_condition |
| salline_slpricetype |
| salline_slfileref |
| salline_slfileline |
| salline_slunitprice |
| salline_slbaseprice |
| citemname |
| salline_slsalghost |
| items_itsalghost |
| salline_slprintghost |
| salline_slfinalprice |
| salline_slorigval |
| slvalsddisc |
| salline_slratehead |
| salline_slgetriscde |
| salline_slsumcde |

