# d_stat_customer_sales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT
    sum(invoiced_value) as invoiced_value,
    sum(if isnull(lotbasecost, 0) +isnull(loxtrcost,0 )  = 0
        then cost
        else isnull(lotbasecost, 0)  + isnull(loxtrcost, 0)
        endif * invoiced_qty) as purchase_value,
	item_code,
	item_name,
	sum(invoiced_qty) as invoiced_qty_um,
	if is_um_tarif = 'Y' then 'KG' else item_unit endif as item_unit,
	sum(if is_um_tarif = 'Y' then invoiced_qty_pc else null endif) as invoiced_qty_pc,
	customer_code,
	customer_name,
	invoice_number,
	invoice_date,
	if invoiced_qty_um <> 0 then invoiced_value / invoiced_qty_um else null endif as unit_sale_price
FROM yq_sales
WHERE invoice_date BETWEEN :date_start AND :date_stop   and 	invoiceline_type in (  'I' ,'C', 'R' )  
	AND  if :as_customer_code = '*' then '*' else customer_code endif = if :as_customer_code = '*' then '*' else :as_customer_code endif 
GROUP BY
	item_code,
	item_name,
	item_unit,
	customer_code,
	customer_name,
	invoice_number,
	invoice_date
ORDER BY
	customer_code,
	item_code,
	invoice_date
```

## Colonnes
| Colonne |
|---------|
| invoiced_value |
| purchase_value |
| item_code |
| item_name |
| invoiced_qty_um |
| item_unit |
| invoiced_qty_pc |
| customer_code |
| customer_name |
| invoice_number |
| invoice_date |
| unit_sale_price |

