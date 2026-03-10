# d_qry_commissions_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql

   SELECT salesman.smcode,
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
			salesman
  WHERE adresses.adcode = invoicehead.ihcust AND
			invoicehead.ihcode = invoiceline.ilcode AND
			invoiceline.ilitem = items.itcode AND
			invoicehead.ihdate >= :Datestart AND
			invoicehead.ihdate <= :DateStop 	AND 
			if invoiceline.iltype in ( 'I', 'A' ) and isnull(invoiceline.ilsalorder, 0 ) > 0 then
						( select sh2.shsalesman from salhead as sh2 where sh2.shcode = invoiceline.ilsalorder ) 
				else
						( select ad2.adsalesman from adresses as ad2 where ad2.adcode = invoicehead.ihcust ) 
			endif = salesman.smcode   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
 GROUP BY salesman.smcode,
			salesman.smname,
			invoiceline.ilitem,
			items.itname,
			invoicehead.ihcust,
			comm_it,
			comm_sa,
			comm_ad
 ORDER BY salesman.smname,
			items.itname,
			adname


```

## Colonnes
| Colonne |
|---------|
| salesman_smcode |
| salesman_smname |
| invoiceline_ilitem |
| items_itname |
| cadname |
| ccomm_it |
| ccomm_sa |
| ccomm_ad |
| csaleval |

