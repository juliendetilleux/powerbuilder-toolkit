# d_invoice_prepdet_ne

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slcode,   
         count(distinct shipline.slline) as slline,   
         shiphead.shdate,   
         list(distinct shipline.slitem) as slitem,   

	     sum(IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN 
				isnull(shipline.slcustpc, shipline.slqty)
			ELSE
				shipline.slqty 
			ENDIF) as slqty,   

         '' as itum,   

         list(distinct shipline.slsalorder) as slsalorder,   
         list(distinct shipline.slsalline) as slsalline,   
         list(distinct items.itname) as itname,   
         list(distinct shipline.slitcustnam) as slitcustnam,   
         list(distinct salhead.shcustref) as shcustref,   
         list(distinct salhead.shcustpay) as shcustpay,   
         list(distinct salhead.shcust) as shcust,
         '1' as qt ,
         list(distinct salhead.shdlvt) as shdlvt,
         list(distinct salhead.shdlvtplace) as shdlvtplace,
         shiphead.shshipto,
         shipto.stdesc,
			list(distinct salhead.shcurr) as shcurr,   
         list(distinct shipline.slline) as linesort,
			shiphead.shcust,
		max( (select max(salline.sldatship) from salline where salline.slcode = salhead.shcode and salline.slstatus < '9' ) ) as datship
    FROM salhead,   
         shiphead,   
         shipline,   
         items, 
         shipto  
   WHERE ( shipline.slcode = shiphead.shcode ) and  
         ( shipline.slsalorder = salhead.shcode ) and  
         ( shiphead.shcust = shipto.stcode ) and  
         ( shiphead.shshipto = shipto.stseq ) and  
         ( items.itcode = shipline.slitem ) and  
         ( ( shipline.slinv = 'N' ) AND  
         ( salhead.shcust = :Selected_cust OR (salhead.shcust IN (SELECT adcode 
																					FROM adresses 
																					WHERE adinvadid = :Selected_cust ) and
														isnull((select ppvalue from progparam where ppcode = 'ADINVTO' ),'') = '1') ) AND  
    
```

## Colonnes
| Colonne |
|---------|
| shipline_slcode |
| shipline_slline |
| shiphead_shdate |
| shipline_slitem |
| shipline_slqty |
| items_itum |
| shipline_slsalorder |
| shipline_slsalline |
| items_itname |
| shipline_slitcustnam |
| salhead_shcustref |
| salhead_shcustpay |
| salhead_shcust |
| qt |
| salhead_shdlvt |
| salhead_shdlvtplace |
| shiphead_shshipto |
| shipto_stdesc |
| salhead_shcurr |
| shipline_linesort |
| shiphead_shcust |
| datship |

