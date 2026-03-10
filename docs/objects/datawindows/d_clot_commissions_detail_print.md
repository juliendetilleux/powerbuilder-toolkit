# d_clot_commissions_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
   SELECT invoicehead.ihcptper,
			salesman.smname,
			invoiceline.ilitem,
			items.itname,
			( select adname from adresses where adcode = invoicehead.ihcust) as adname ,
			isnull(items.itcommission, 0 ) as comm_it,
			isnull(salesman.smcommission,0) as comm_sa,
			isnull(adresses.adcommission,0) as comm_ad,
			sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as saleval
     FROM adresses,
			invoicehead,
			invoiceline, 
			items,
			salhead, 
			salesman
  WHERE adresses.adcode = invoicehead.ihcust AND
			invoicehead.ihcode = invoiceline.ilcode AND
			invoiceline.ilsalorder = salhead.shcode AND
			invoiceline.ilitem = items.itcode AND
			salhead.shsalesman = salesman.smcode AND
			invoicehead.ihcptper >= :period1 AND
			invoicehead.ihcptper <= :period2 AND
			comm_it + comm_sa + comm_ad > 0 
 GROUP BY invoicehead.ihcptper,
			salesman.smname,
			invoiceline.ilitem,
			items.itname,
			invoicehead.ihcust,
			comm_it,
			comm_sa,
			comm_ad
 ORDER BY invoicehead.ihcptper,
			salesman.smname,
			items.itname,
			adname
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcptper |
| salesman_smname |
| invoiceline_ilitem |
| items_itname |
| cadname |
| ccomm_it |
| ccomm_sa |
| ccomm_ad |
| csaleval |

