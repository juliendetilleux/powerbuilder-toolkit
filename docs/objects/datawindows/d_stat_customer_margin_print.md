# d_stat_customer_margin_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT
    sum(invoiced_value) as invoiced_value,
    sum(if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0
        then cost
        else isnull(lotbasecost,0) + isnull(loxtrcost,0)
        endif * invoiced_qty) as purchase_value,
	customer_code,
	customer_name,
	customer_location,
	customer_phone
FROM yq_sales
WHERE YEAR(invoice_date) = :ai_year  and invoiceline_type in (  'I', 'C', 'R' ) 
	AND if :customer_code = '*' then '*' else customer_code endif = if :customer_code = '*' then '*' else :customer_code endif
GROUP BY
	customer_code,
	customer_name,
	customer_location,
	customer_phone
ORDER BY
	customer_code
```

## Colonnes
| Colonne |
|---------|
| invoiced_value |
| purchase_value |
| customer_code |
| customer_name |
| customer_location |
| customer_phone |

