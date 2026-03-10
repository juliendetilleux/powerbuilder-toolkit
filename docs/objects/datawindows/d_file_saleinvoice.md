# d_file_saleinvoice

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname 			as salcust,
			'F' 							as salfacnot, 
         invoiceline.ilcode		as salcode,   
         invoiceline.illine		as salline,     
         items.itname				as salitem,   
         invoiceline.ilqty			as salqty,   
         items.itum					as salitum,
			invoiceline.ilcomment	as salcomment,
			invoiceline.ilnetval		as salnetval,
			invoiceline.ilrist		as salrist,
			invoicehead.ihcurr		as salcurr,
			invoicehead.ihcurconv	as salcurconv
    FROM invoicehead,   
         invoiceline,   
         adresses,  
         items  
   WHERE ( invoicehead.ihcode = invoiceline.ilcode ) and
         ( invoicehead.ihcust = adresses.adcode ) and
         ( invoiceline.ilitem = items.itcode ) and
			( invoicehead.ihfacnot = 1 ) and
         ( invoiceline.ilsalorder = :ran_ordno ) and
         ( invoiceline.ilsalline = :ran_ordlin )

UNION all 

  SELECT adresses.adname,
			'N', 
         invoiceline.ilcode,   
         invoiceline.illine,    
         items.itname,   
         - invoiceline.ilqty,   
         items.itum,
			invoiceline.ilcomment,
			- invoiceline.ilnetval,
			invoiceline.ilrist,
			invoicehead.ihcurr,
			invoicehead.ihcurconv
    FROM invoicehead,   
         invoiceline,   
         adresses,   
         items  
   WHERE ( invoicehead.ihcode = invoiceline.ilcode ) and
         ( invoicehead.ihcust = adresses.adcode ) and
         ( invoiceline.ilitem = items.itcode ) and
			( invoicehead.ihfacnot = -1 ) and
         ( invoiceline.ilsalorder = :ran_ordno ) and
         ( invoiceline.ilsalline = :ran_ordlin )

order by 3, 4

```

## Colonnes
| Colonne |
|---------|
| adresses_salcust |
| csalfacnot |
| invoiceline_salcode |
| invoiceline_salline |
| items_salitem |
| invoiceline_salqty |
| items_salitum |
| invoiceline_salcomment |
| invoiceline_salnetval |
| invoiceline_salrist |
| invoicehead_salcurr |
| invoicehead_salcurconv |

