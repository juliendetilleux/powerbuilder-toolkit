# d_qry_salinv_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT 'A',
         invoicehead.ihcurr,   
         invoicehead.ihcode,   
         invoicehead.ihtypinv,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
         items.itname,   
         invoiceline.ilqty,   
         invoicehead.ihfacnot,   
         invoiceline.ilnetval,   
         invoicehead.ihdate,   
         invoicehead.ihcurconv,   
         adresses.adname,   
         invoicehead.ihcust,   
         adresses.adgrcust,   
         items.itstat1,   
         items.itstat2,   
         items.itactiv, 
         items.itum,      
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         salhead.shsalesman  ,
         adresses.adcountrid,
		/*début os2029*/
		IF isnull(invoiceline.ilshipto, 0) = 0 then
			salline.slshipto
		ELSE
			invoiceline.ilshipto
		ENDIF /*fin os2029*/ as slshipto,
         shipto.stdesc ,  
         invoicehead.ihmccode as mcdo,   
         invoicehead.ihcodemc , 
         adressesmcdo.adname          ,  
         invoicehead.ihmccode as cmcdo   
    FROM invoiceline,
         salhead,
         salline, 
         invoicehead,   
         items,   
         adresses,
         shipto ,
         adresses as adressesmcdo       
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoiceline.ilsalorder = salhead.shcode ) and   
         ( invoicehead.ihcust = adresses.adcode ) and  
         ( salline.slline = invoiceline.ilsalline ) and   
         ( salline.slcode = invoiceline.ilsalorder ) and   
         ( shipto.stcode = invoicehead.ihcust ) and   
         ( shipto.stseq = slshipto ) and   
         ( invoicehead.ihdate >= :alimit ) AND  
         ( invoicehead.ihdate <= :anow ) and
         ( invoiceline.iltype in ( 'A', 'I' ) and
         ( invoiceline.ilsalorder > 0 ) )  AND
		invoicehead.ihcust = salhead.shcust 
     AND adressesmcdo.adcode = mcdo
 UNION ALL
	
```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| invoicehead_ihcurr |
| invoicehead_ihcode |
| invoicehead_ihtypinv |
| invoiceline_iltype |
| invoiceline_ilitem |
| items_itname |
| invoiceline_ilqty |
| invoicehead_ihfacnot |
| invoiceline_ilnetval |
| invoicehead_ihdate |
| invoicehead_ihcurconv |
| adresses_adname |
| invoicehead_ihcust |
| adresses_adgrcust |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| items_itum |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| salhead_shsalesman |
| adresses_adcountrid |
| salline_slshipto |
| shipto_stdesc |
| invoicehead_mcdo |
| invoicehead_ihcodemc |
| adresses_adname |
| cmcdo |

