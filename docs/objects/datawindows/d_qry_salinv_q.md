# d_qry_salinv_q

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
          invoiceline.ilqty  *  invoicehead.ihfacnot as qty,   
         invoiceline.ilqty,   
         invoicehead.ihfacnot,   
         invoiceline.ilnetval,   
         invoicehead.ihdate,   
         invoicehead.ihcurconv,   
         adresses.adname,   
         invoicehead.ihcust,   
         adresses.adgrcust,   
		 invoiceline.ilnetval * invoicehead.ihfacnot as inv_val,



			invoiceline.illine,  
         invoicehead.ihmccode as mcdo,   
         invoicehead.ihcodemc

    FROM invoiceline,
         invoicehead,   
         adresses,	
		salhead
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoicehead.ihcust = adresses.adcode ) and  
		( invoiceline.ilsalorder = salhead.shcode ) and
         ( invoicehead.ihdate >= :alimit ) AND  
         ( invoicehead.ihdate <= :anow ) and
         ( invoiceline.iltype in ( 'A', 'I' ) and
         ( invoiceline.ilsalorder > 0 ) ) and
		 invoicehead.ihcust = salhead.shcust
 UNION ALL
 SELECT 'U',
         invoicehead.ihcurr,   
         invoicehead.ihcode,   
         invoicehead.ihtypinv,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
                      invoiceline.ilqty  *  invoicehead.ihfacnot as qty,
         invoiceline.ilqty,   
         invoicehead.ihfacnot,   
         invoiceline.ilnetval,   
         invoicehead.ihdate,   
         invoicehead.ihcurconv,   
         adresses.adname,   
         invoicehead.ihcust,   
         adresses.adgrcust,   
		 invoiceline.ilnetval * invoicehead.ihfacnot as inv_val,


			invoiceline.illine,  
         invoicehead.ihmccode as mcdo,   
         invoicehead.ihcodemc
    FROM invoiceline,
         salhead,
         salline, 
         invoicehead,   
         adresses,
         shipto
 WHERE ( invoic
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
| qty |
| invoiceline_ilqty |
| invoicehead_ihfacnot |
| invoiceline_ilnetval |
| invoicehead_ihdate |
| invoicehead_ihcurconv |
| adresses_adname |
| invoicehead_ihcust |
| adresses_adgrcust |
| inv_val |
| invoiceline_illine |
| cmcdo |
| invoicehead_ihcodemc |

