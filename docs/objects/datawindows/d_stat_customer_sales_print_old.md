# d_stat_customer_sales_print_old

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT
    sum(invoiced_value) as invoiced_value,
    sum(if lotbasecost+loxtrcost = 0
        then cost
        else lotbasecost + loxtrcost
        endif * invoiced_qty) as purchase_value,
	item_code,
	item_name,
	sum(if is_um_tarif = 'Y' then invoiced_qty else null endif) as invoiced_qty_um,
	if is_um_tarif = 'Y' then item_unit else null endif as item_unit,
	sum(invoiced_qty_pc) as invoiced_qty_pc,
	customer_code,
	customer_name,
	customer_adres1,
	customer_adres2,
	customer_zip,
	customer_location,
	customer_phone,
	invoice_number,
	invoice_date,
	invoiced_value /invoiced_qty_um as unit_sale_price
FROM yq_sales
WHERE invoice_date BETWEEN :date_start AND :date_stop
	AND if :customer_code = '*' then '*' else customer_code endif = if :customer_code = '*' then '*' else :customer_code endif
GROUP BY
	item_code,
	item_name,
	item_unit,
	customer_code,
	customer_name,
	customer_adres1,
	customer_adres2,
	customer_zip,
	customer_location,
	customer_phone,
	invoice_number,
	invoice_date
ORDER BY
	item_code,
	customer_code,
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
| customer_adres1 |
| customer_adres2 |
| customer_zip |
| customer_location |
| customer_phone |
| invoice_number |
| invoice_date |
| unit_sale_price |

