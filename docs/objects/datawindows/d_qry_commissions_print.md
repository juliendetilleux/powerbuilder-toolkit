# d_qry_commissions_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* jm012 Ajout argument MultiCo */
   SELECT salesman.smcode,
			salesman.smname,
			isnull(items.itcommission,0) * isnull(salesman.smcommission,0) * isnull(adresses.adcommission,0) as commission,
			sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as ilsalval
     FROM adresses,
			invoicehead,
			invoiceline, 
			salesman,
			items 
  WHERE adresses.adcode = invoicehead.ihcust AND
		invoicehead.ihcode = invoiceline.ilcode AND
		invoiceline.ilitem = items.itcode and
		invoicehead.ihdate >= :Datestart AND
		invoicehead.ihdate <= :DateStop 	AND 
		isnull(invoiceline.ilitem, '' )  <> '' and 
		if invoiceline.iltype in ( 'I', 'A' ) then
					( select sh2.shsalesman from salhead as sh2 where sh2.shcode = invoiceline.ilsalorder ) 
			else
					( select ad2.adsalesman from adresses as ad2 where ad2.adcode = invoicehead.ihcust ) 
		endif = salesman.smcode   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */

 GROUP BY salesman.smcode,
		salesman.smname,
		commission  
 ORDER BY salesman.smname //S7559
```

## Colonnes
| Colonne |
|---------|
| salesman_smcode |
| salesman_smname |
| ccommission |
| invoiceline_ilsalval |

