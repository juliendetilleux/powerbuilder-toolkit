# d_qry_salinv

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
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
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         salhead.shsalesman, 
		/*début os2029*/
		IF isnull(invoiceline.ilshipto, 0) = 0 then
			salline.slshipto
		ELSE
			invoiceline.ilshipto
		ENDIF /*fin os2029*/ as slshipto,
         shipto.stdesc,
         ( Select first truckline.tlcode
             From truckline
            Where truckline.tlsalhead  = invoiceline.ilsalorder  And
                  truckline.tlsalline  = invoiceline.ilsalline   And
                  truckline.tlshiphead = invoiceline.ilshiporder And
                  truckline.tlshipline = invoiceline.ilshipline order by 1 desc ) As Truck,
			salline.slcomment,
			invoiceline.ilcomment,
			invoiceline.illine,  
         invoicehead.ihmccode as mcdo,   
         invoicehead.ihcodemc,
		isnull(invoicehead.ihprint,'N') as printed     
    FROM invoiceline join invoicehead on invoiceline.ilcode = invoicehead.ihcode
          join salhead on invoiceline.ilsalorder = salhead.shcode and invoicehead.ihcust = salhead.shcust
          join salline on salline.slcode = invoiceline.ilsalorder and salline.slline = invoiceline.ilsalline
          join items on invoiceline.ilitem = items.itcode 
         join adresses on invoicehead.ihcust = adresses.adcode
          join shipto on shipto.stcode = invoicehead.ihcust and shipto.stseq = salline.slshipto
   WHERE ( invoicehead.ihdate between :alimit and :anow )
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
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| salhead_shsalesman |
| salline_slshipto |
| shipto_stdesc |
| truck |
| salline_slcomment |
| invoiceline_ilcomment |
| invoiceline_illine |
| cmcdo |
| invoicehead_ihcodemc |
| printed |

