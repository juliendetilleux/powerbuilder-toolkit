# zd_fil_income_totcust_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT sum(salline.slsalval / currencies.cuconv) as sal_salval,	
			sum((select sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv)
				 from invoiceline, invoicehead
				 where invoicehead.ihcode = invoiceline.ilcode and
						 invoiceline.ilsalorder = salline.slcode and
						 invoiceline.ilsalline = salline.slline)) as sal_inv	
		FROM salhead,
			salline,
			items,
			choices,
			currencies,
              filehead
		WHERE salline.slcode = salhead.shcode
			AND items.itcode = salline.slitem
			AND choices.chcode = salline.slstatus
			AND currencies.cucode = salhead.shcurr
			AND salline.slfileref = filehead.fhcode
			AND choices.chtype = 'CUSS'
			AND salline.slstatus < '9' 
             AND filehead.fhstatus < '8'
			AND filehead.fhadid = :as_cust
 UNION ALL
	SELECT sum(salpline.slsalval / currencies.cuconv / salpline.slqtyreq) as sal_salval,
			sum((select sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) from invoiceline, invoicehead where invoicehead.ihcode = invoiceline.ilcode and invoiceline.ilsalorder = salpline.slcode and invoiceline.ilsalline = salpline.slline)) 
		FROM salhead,
			salpline,
			items,
			choices,
			currencies,
              filehead
		WHERE salpline.slcode = salhead.shcode
			AND items.itcode = salpline.slitem
			AND choices.chcode = salpline.slstatus
			AND currencies.cucode = salhead.shcurr
			AND salpline.slfileref = filehead.fhcode
			AND choices.chtype = 'CUSS'
             AND filehead.fhstatus < '8'
			AND filehead.fhadid = :as_cust
 UNION ALL
	SELECT 0,
        		sum(invoiceline.ilnetval * invoicehead.ihfacnot  / invoicehead.ihcurconv)
		FROM invoicehead,
			invoiceline,
			choices,
              filehead
		WHERE invoicehead.ihcode = invoiceline.ilcode
			AND invoiceline.ilfileref = filehead.fhcode
			AND choices.chcode = invoicehead.ihstatus
			AND invoicehead.ihfacnot = 1
			AND invoiceline.iltype NOT IN('A','I','Y','Z')
			AND invoice
```

## Colonnes
| Colonne |
|---------|
| csal_salval |
| csal_inv |

