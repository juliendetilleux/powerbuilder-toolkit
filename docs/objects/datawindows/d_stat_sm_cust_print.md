# d_stat_sm_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT
	sales1.salesman,
	sales1.customer_code,
	sales1.customer_name,
	sum(sales1.invoiced_value) as invoiced_value_current,
    (select sum(sales2.invoiced_value)
       from yq_sales as sales2
      where sales2.customer_code = sales1.customer_code
        and year(sales2.invoice_date) = :ai_year -1 
        and if :as_salesman = '*' then '*' else sales2.salesman endif = if :as_salesman = '*' then '*' else :as_salesman endif) as invoiced_value_past_year
FROM yq_sales as sales1
WHERE year(sales1.invoice_date) = :ai_year  and
			invoiceline_type in (  'I', 'C', 'R' )  	AND
			 if :as_salesman = '*' then '*' else sales1.salesman endif = if :as_salesman = '*' then '*' else :as_salesman endif
GROUP BY
	sales1.salesman,
	sales1.customer_code,
	sales1.customer_name
ORDER BY
	sales1.salesman,
	sales1.customer_code

```

## Colonnes
| Colonne |
|---------|
| salesman |
| yq_sales_customer_code |
| yq_sales_customer_name |
| invoiced_value_current |
| invoiced_value_past_year |

