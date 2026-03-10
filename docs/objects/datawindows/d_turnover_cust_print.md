# d_turnover_cust_print

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
		customer_code = adresses.adcode   AND
			invoiceline_type in (  'I'  , 'C', 'R') AND
		if :as_salesman = '%' then '%' else yq_sales.salesman endif = if :as_salesman = '%' then '%' else :as_salesman endif ) as invoiced_value,

   (select sum(if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0
					  then cost
					  else isnull(lotbasecost,0) + isnull(loxtrcost,0)
					  endif * invoiced_qty) 
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year AND
		customer_code = adresses.adcode AND
			invoiceline_type in (  'I' , 'C' ) AND 
		if :as_salesman = '%' then '%' else yq_sales.salesman endif = if :as_salesman = '%' then '%' else :as_salesman endif ) as purchase_value,


   monthnum.num accounting_period2,

    (select sum(invoiced_value)
		from yq_sales
	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year - 1 AND
		customer_code = adresses.adcode  AND
			invoiceline_type in (  'I', 'C', 'R' ) AND
		if :as_salesman = '%' then '%' else yq_sales.salesman endif = if :as_salesman = '%' then '%' else :as_salesman endif ) as invoiced_value2,

    (select sum(if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0
					  then cost
					  else isnull(lotbasecost,0) + isnull(loxtrcost,0)
					  endif * invoiced_qty) 
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year - 1 AND
		customer_code = adresses.adco
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
| adcode |
| adname |

