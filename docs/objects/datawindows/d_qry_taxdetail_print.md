# d_qry_taxdetail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql

  SELECT sum(invoiceline.ilsalval) as val,
			choice_taxt.clname as choice_taxt,
			choice_faty.clname as choice_faty,
			adresses.adname,
			adresses.adcode
	 FROM choiceline as choice_faty,
			choiceline as choice_taxt,
			invoicehead,
			invoiceline,
			adresses
	WHERE invoicehead.ihdate >= :date_start AND 
			invoicehead.ihdate <= :date_end AND
			invoicehead.ihcode = invoiceline.ilcode AND
			invoicehead.ihcust = adresses.adcode AND
			choice_faty.clcode = 'FATY' AND
			choice_faty.clcval = 'TAXT' AND
			invoiceline.ilfatype = choice_faty.clline AND
			choice_faty.clival3 = choice_taxt.clline AND
			choice_taxt.clcode = 'TAXT'   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
			
GROUP BY choice_taxt,
			choice_faty,
			adresses.adname,
			adresses.adcode   
  
ORDER BY choice_taxt,
			choice_faty,
			adresses.adname,
			adresses.adcode
```

## Colonnes
| Colonne |
|---------|
| cval |
| choiceline_choice_taxt |
| choiceline_choice_faty |
| adresses_adname |
| adresses_adcode |

