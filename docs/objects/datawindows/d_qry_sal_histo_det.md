# d_qry_sal_histo_det

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
        invoicehead.ihcodemc,
         invoiceline.ilqty * invoicehead.ihfacnot qty ,
         invoiceline.ilstdval,
         invoiceline.ilnetval * invoicehead.ihfacnot netval,
         invoicehead.ihdate,
         shipto.stdesc,
			truckline.tlcode,
			shipline.sllot,
			shipline.slitem,
			items.itdefaultlot ,
		invoicehead.ihcode 
    FROM shiphead,   
         shipline,
         shipto,
         invoicehead,
         invoiceline,
			items,
			truckline right outer join shipline on truckline.tlshiphead = shipline.slcode and truckline.tlshipline = shipline.slline
   WHERE ( shipline.slcode = shiphead.shcode ) And  
         ( shipline.slsalorder = :ran_salorder ) And  
         ( shipline.slsalline = :ran_salline ) And
         ( shiphead.shshipto = shipto.stseq ) And
         ( shiphead.shcust = shipto.stcode ) And
         ( invoiceline.ilshiporder = shipline.slcode ) And
         ( invoiceline.ilshipline = shipline.slline ) And 
         ( Invoicehead.ihcode = invoiceline.ilcode ) AND
			( Items.itcode = shipline.slitem )
	
Union all 

  SELECT shipline.slcode,   
         shipline.slline,   
         shiphead.shdate,
         shipline.slqty, 
         0,
         0,
         0,
         0,
         shiphead.shdate,
         shipto.stdesc,
			truckline.tlcode,
			'',
			'',
			'' ,
		0 
    FROM shiphead,   
         shipline,
         shipto,
			truckline right outer join shipline on truckline.tlshiphead = shipline.slcode and truckline.tlshipline = shipline.slline
   WHERE ( shipline.slcode = shiphead.shcode ) And  
         ( shipline.slsalorder = :ran_salorder ) And  
         ( shipline.slsalline = :ran_salline ) And
         ( shiphead.shshipto = shipto.stseq ) And
         ( shiphead.shcust = shipto.stcode ) and
         ( shipline.slinvno = 0 )
	
Union all
	
	SELECT 0,
			0,
			null
```

## Colonnes
| Colonne |
|---------|
| shipline_slcode |
| shipline_slline |
| shiphead_shdate |
| shipline_slqty |
| invoicehead_ihcodemc |
| qty |
| cilstdval |
| netval |
| cihdate |
| shipto_stdesc |
| truckline_tlcode |
| sllot |
| slitem |
| itdefaultlot |
| invoicehead_ihcode |

