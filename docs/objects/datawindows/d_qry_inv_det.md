# d_qry_inv_det

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slcode,   
         shipline.slline,   
         shiphead.shdate,
         shipline.slqty, 
         salline.slcode,
         salline.slline,
         salline.slqtyreq qty ,
         (if isnull(salline.slvalsddisc,0) <> 0 then /*os1658*/
			salline.slvalsddisc 
		else 
			salline.slstdval
		endif)  as slstdval,
         salline.slsalval netval,
         salhead.shdatreq,
         shipto.stdesc,
			truckline.tlcode,
			shipline.sllot,
			shipline.slitem,
			items.itdefaultlot
    FROM shiphead,   
         shipline,
         shipto,
         salhead,
         salline,
			invoiceline,
			items,
			truckline right outer join shipline on truckline.tlshiphead = shipline.slcode and truckline.tlshipline = shipline.slline
   WHERE ( shipline.slcode = shiphead.shcode ) And  
         ( shipline.slsalorder = salline.slcode ) And  
         ( shipline.slsalline = salline.slline ) And
         ( shiphead.shshipto = shipto.stseq ) And
         ( shiphead.shcust = shipto.stcode ) And
         ( invoiceline.ilshiporder = shipline.slcode ) And
         ( invoiceline.ilshipline = shipline.slline ) And 
         ( invoiceline.ilcode = :al_invhead ) And
         ( invoiceline.illine = :al_invline ) And 
         ( salhead.shcode = salline.slcode ) And
			( Items.itcode = shipline.slitem )
		
Union all
	
	SELECT 0,
			0,
			null,
			0,
			salline.slcode,
         salline.slline,
         salline.slqtyreq qty ,
         (if isnull(salline.slvalsddisc,0) <> 0 then /*os1658*/
			salline.slvalsddisc 
		else 
			salline.slstdval
		endif)  as slstdval,
         salline.slsalval netval,
         salhead.shdatreq,
			'',
			0,
			'',
			'',
			''
		FROM Invoiceline,
			salhead,
			salline
		WHERE salline.slcode = salhead.shcode And 
         invoiceline.ilcode = :al_invhead And 
         invoiceline.illine = :al_invline And 
			Invoiceline.ilsalorder = salline.slcode And  
			Invoiceline.ilsalline = salline.sl
```

## Colonnes
| Colonne |
|---------|
| shipline_slcode |
| shipline_slline |
| shiphead_shdate |
| shipline_slqty |
| slcode |
| slline |
| qty |
| slstdval |
| netval |
| shdatreq |
| shipto_stdesc |
| truckline_tlcode |
| sllot |
| slitem |
| itdefaultlot |

