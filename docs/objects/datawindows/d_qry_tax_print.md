# d_qry_tax_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql

  SELECT sum(invoiceline.ilsalval) as val,
			choice_taxt.clname
	 FROM choiceline as choice_faty,
			choiceline as choice_taxt,
			invoicehead,
			invoiceline
	WHERE invoicehead.ihdate >= :date_start AND 
			invoicehead.ihdate <= :date_end AND
			invoicehead.ihcode = invoiceline.ilcode AND
			choice_faty.clcode = 'FATY' AND
			choice_faty.clcval = 'TAXT' AND
			invoiceline.ilfatype = choice_faty.clline AND
			choice_faty.clival3 = choice_taxt.clline AND
			choice_taxt.clcode = 'TAXT'  AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
			
GROUP BY choice_taxt.clname  
  
ORDER BY choice_taxt.clname
```

## Colonnes
| Colonne |
|---------|
| cval |
| choiceline_clname |

