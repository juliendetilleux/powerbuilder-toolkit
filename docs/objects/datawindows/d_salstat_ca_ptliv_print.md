# d_salstat_ca_ptliv_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         adresses.adname,
         adresses.adloc,
         items.itcode,   
         isnull(items.itname, invoiceline.ilitcustnam) as itname,   
         items.itum,   
         items.itumusr,   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv ) netval,   
         sum(  invoiceline.ilqty * invoicehead.ihfacnot) pmixqty,
         invoicehead.ihcust,
		shiphead.shshipto,
		shipto.stdesc,
		1 as sort,
		shipto.stzip,
		shipto.stloc,
		shipto.stcountr,
		( select salhead.shsalesman from salhead where salhead.shcode = invoiceline.ilsalorder ) as shsalesman,
		adresses.adgrcust 
    FROM adresses,   
         invoicehead,   
         invoiceline LEFT OUTER JOIN items ON ( invoiceline.ilitem = items.itcode ),
  	    shiphead,
		shipto  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( invoiceline.ilshiporder = shiphead.shcode ) and  
         ( invoicehead.ihdate >= :Start_date ) AND  
         ( invoicehead.ihdate <= :Stop_date ) AND 
	    ( shipto.stcode = shiphead.shcust ) AND 
	    ( shipto.stseq = shiphead.shshipto ) AND
         ( isnull(invoiceline.ilshipto,0) = 0 )   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY  adresses.adcode,   
         adresses.adname,
         adresses.adloc,
         items.itcode,   
         itname,   
         items.itum,   
         items.itumusr,   
         invoicehead.ihcust,
		shiphead.shshipto,
		stdesc,
		sort,
		shipto.stzip,
		shipto.stloc,
		shipto.stcountr,
		shsalesman,
		adresses.adgrcust 
    
UNION ALL 
   /*os2029*/
     SELECT adresses.adcode,   
         adresses.adname,
         adresses.adloc,
         items.itcode,   
         isnull(items.itname, invoiceline.ilitcustnam) as itname,   
         items.itum,   
         items.itumusr,   
         sum(invoiceline.ilnetval * invoicehead
```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| adresses_adname |
| adresses_adloc |
| items_itcode |
| items_itname |
| items_itum |
| items_itumusr |
| cnetval |
| cpmixqty |
| invoicehead_ihcust |
| shiphead_shshipto |
| stdesc |
| sort |
| shipto_stzip |
| shipto_stloc |
| shipto_stcountr |
| salhead_shsalesman |
| adresses_adgrcust |

