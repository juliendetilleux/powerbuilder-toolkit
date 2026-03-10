# d_invoice_prepdet

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

	     IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN /*os1437*/
			isnull(shipline.slcustpc, shipline.slqty)
		ELSE
			shipline.slqty 
		ENDIF as slqty,   

         IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN /*os1437*/
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
			salhead.shcurr,   
         shipline.slline as linesort,
			shiphead.shcust,
		shiphead.shclot,
		(select max( salline.sldatship ) from salline where salline.slcode = shipline.slsalorder and salline.slline = shipline.slsalline ) as datship,
(if salhead.shapbinvoice is null then salhead.shcust else (select adcode from adresses where salhead.shapbinvoice = adresses.adapbcode) endif) as shyolo //PHBO0098 end if -> endif sybase 10 compatibility issue
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
         ( shyolo = :Selected_cust OR (salhead.shcust IN (SELECT adcode 
																					FROM adresses 
																					WHERE adinvadid = :Selected_cust ) a
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
| shipline_linesort |
| shiphead_shcust |
| shiphead_shclot |
| datship |
| shyolo |

