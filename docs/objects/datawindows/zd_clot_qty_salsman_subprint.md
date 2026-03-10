# zd_clot_qty_salsman_subprint

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT salesman.smname,
			adresses.adname,
			items.itname,
			invoicehead.ihcptper,
			sum(invoiceline.ilqty * invoicehead.ihfacnot) as ilsalval
     FROM adresses,
			invoicehead, 
			invoiceline, 
			salhead, 
			salesman, 
			items
  WHERE adresses.adcode = invoicehead.ihcust AND
		invoicehead.ihcode = invoiceline.ilcode AND
		invoiceline.ilsalorder = salhead.shcode AND
		salhead.shsalesman = salesman.smcode AND
		invoiceline.ilitem = items.itcode AND
		invoicehead.ihcptper > :period1 AND
		invoicehead.ihcptper <= :period2 	 
 GROUP BY salesman.smname,
		adresses.adname,
		items.itname,
		invoicehead.ihcptper
 ORDER BY salesman.smname,
		adresses.adname,
		items.itname,
		invoicehead.ihcptper
```

## Colonnes
| Colonne |
|---------|
| smname |
| adname |
| itname |
| ilsalval |

