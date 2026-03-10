# d_invoice_prepdirect

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shipline.slcode,   
         shipline.slline,   
         shiphead.shdate,   
         shipline.slitem,   
      
		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN /*os1438*/
			isnull(shipline.slcustpc, shipline.slqty)
		ELSE
			shipline.slqty 
		ENDIF as slqty,   

         IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN /*os1438*/
			isnull(items.itumtarif, items.itum)
		ELSE
			items.itum 
		ENDIF as itum,   

         shipline.slsalorder,   
         shipline.slsalline,   
         items.itname,   
         shipline.slitcustnam,   
         salhead.shcustref,   
         salhead.shcustpay,   
         salhead.shcust,
         '1'  ,
         salhead.shdlvt,
         salhead.shdlvtplace,
         shiphead.shshipto,
         shipto.stdesc,
			salhead.shcurr
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
         ( shipline.slinv = 'N' ) AND  
         ( salhead.shcust = :Selected_cust ) AND  
         ( salhead.shcurr = :Selected_curr ) AND
         ( shipline.slcode = :Selected_shipline )

Union all 

  Select shipcost.sccode,
         shipcost.scline,
         shiphead.shdate,
         shipcost.scdesc,
         shipcost.scqty,
         shipcost.scum,   
         shipcost.scsalorder,   
         shipcost.scsalline,
         '',
         shipcost.scdesc,
         '',
         '',
         shiphead.shcust,
         '2',
         '',
         '',
         shiphead.shshipto,
         shipto.stdesc,
			'' 
    From ship
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
| line_type |
| salhead_shdlvt |
| salhead_shdlvtplace |
| shiphead_shshipto |
| shipto_stdesc |
| salhead_shcurr |

