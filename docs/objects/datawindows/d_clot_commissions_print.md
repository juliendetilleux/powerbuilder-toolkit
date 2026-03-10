# d_clot_commissions_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
   SELECT invoicehead.ihcptper,
			salesman.smname,
			isnull((SELECT items.itcommission
						FROM items
						WHERE items.itcode = invoiceline.ilitem),0) 
			 * isnull(salesman.smcommission,0) * isnull(adresses.adcommission,0) as commission,
			sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as ilsalval
     FROM adresses,
			invoicehead,
			invoiceline, 
			salhead, 
			salesman
  WHERE adresses.adcode = invoicehead.ihcust AND
		invoicehead.ihcode = invoiceline.ilcode AND
		invoiceline.ilsalorder = salhead.shcode AND
		salhead.shsalesman = salesman.smcode AND
		invoicehead.ihcptper >= :period1 AND
		invoicehead.ihcptper <= :period2 	 
 GROUP BY invoicehead.ihcptper,
		salesman.smname,
		commission  
 ORDER BY invoicehead.ihcptper,
		salesman.smname
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcptper |
| salesman_smname |
| ccommission |
| invoiceline_ilsalval |

