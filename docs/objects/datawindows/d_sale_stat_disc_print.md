# d_sale_stat_disc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.ilitem,   
         items.itname,   
         sum (invoiceline.ilorval * invoiceline.ilqty * invoicehead.ihfacnot / invoicehead.ihcurconv) as orvalline,   
         sum( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as valline,   
         sum( if invoiceline.iltype <> 'R' then ilqty * invoicehead.ihfacnot else 0 endif) as qtyline,   
         items.itum,   
         invoicehead.ihcust,   
         salhead.shsalesman,
			adresses.adname,
			adresses.adgrcust  
    FROM invoiceline,   
         invoicehead,   
         items,   
         salhead,
			adresses   
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( ( ihdate between :Sel_start and :sel_end ) )   and
         ( invoiceline.ilsalorder = salhead.shcode ) and  
	    	( salhead.shcust = invoicehead.ihcust ) and 
	    	( adresses.adcode = invoicehead.ihcust ) and 
			( invoiceline.iltype in ( 'A', 'I' ) )    AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
GROUP BY invoiceline.ilitem,   
         items.itname,   
         items.itum,
	    	invoicehead.ihcust,   
         salhead.shsalesman,
			adresses.adname,
			adresses.adgrcust   
UNION ALL 
  SELECT invoiceline.ilitem,   
         items.itname,   
         sum( invoiceline.ilorval * invoiceline.ilqty * invoicehead.ihfacnot / invoicehead.ihcurconv  ) as orvalline,   
         sum ( invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as valline,   
         sum(if invoiceline.iltype <> 'R' then ilqty * invoicehead.ihfacnot else 0 endif) as qtyline,   
         items.itum,   
         invoicehead.ihcust,   
         adresses.adsalesman,
			adresses.adname,
			adresses.adgrcust   
    FROM invoiceline,   
         invoicehead,   
         items,
			adresses    
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.
```

## Colonnes
| Colonne |
|---------|
| invoiceline_ilitem |
| items_itname |
| corvalline |
| cvalline |
| cqtyline |
| items_itum |
| invoicehead_ihcust |
| salhead_shsalesman |
| adresses_adname |
| adresses_adgrcust |

