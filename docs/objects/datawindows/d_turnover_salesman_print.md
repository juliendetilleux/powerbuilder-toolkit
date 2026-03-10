# d_turnover_salesman_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
WITH
	monthnum as (select 1 as num from dummy UNION select 2 from dummy UNION select 3 from dummy UNION select 4 from dummy UNION select 5 from dummy UNION select 6 from dummy 
				UNION select 7 from dummy UNION select 8 from dummy UNION select 9 from dummy UNION select 10 from dummy UNION select 11 from dummy UNION select 12 from dummy
				order by num)


SELECT
   monthnum.num accounting_period,

    (select sum(invoiced_value)
		from yq_sales
	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year AND
		isnull(salesman, '########') = yssalesman  and
			invoiceline_type in (  'I' , 'C', 'R' )) as invoiced_value,

   (select sum(if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0
					  then cost
					  else isnull(lotbasecost,0) + isnull(loxtrcost,0)
					  endif * invoiced_qty) 
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year AND
		isnull(salesman, '########') = yssalesman  and
			invoiceline_type in (  'I', 'C' ) ) as purchase_value,


   monthnum.num accounting_period2,

    (select sum(invoiced_value)
		from yq_sales
	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year - 1 AND
		isnull(salesman, '########') = yssalesman  and
			invoiceline_type in (  'I' , 'C', 'R') ) as invoiced_value2,

    (select sum(if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0
					  then cost
					  else isnull(lotbasecost,0) + isnull(loxtrcost,0)
					  endif * invoiced_qty) 
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year - 1 AND
		isnull(salesman, '########') = yssalesman  and
			invoiceline_type in (  'I' , 'C')) as purchase_value2,

	isnull(yq.salesman, '########') as yssalesman,
	(select smname from salesman where smcode = yssalesman) as smname
 
   FROM monthnum,
		yq_sales as yq

  WHERE if :as_salesman = '*' then '*' else yq.salesman endif = if :as_salesman = '*' then '*' else :as_sa
```

## Colonnes
| Colonne |
|---------|
| accounting_period |
| invoiced_value |
| purchase_value |
| accounting_period2 |
| invoiced_value2 |
| purchase_value2 |
| yssalesman |
| smname |

