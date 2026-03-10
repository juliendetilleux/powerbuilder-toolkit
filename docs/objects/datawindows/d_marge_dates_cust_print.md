# d_marge_dates_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
   SELECT item_code,
		item_name,
		customer_code,
		customer_name,
		invoice_number,
		invoice_id,
		invoicer_id,
		invoiceline_type,
		document_type,
		invoice_currency,
		invoice_date,
		if invoiceline_type = 'R' then 0 else invoiced_qty endif as qty_invoiced,
		isnull(lotbasecost,0) as lotbasecost,
		isnull(loxtrcost,0) as loxtrcost,
		isnull(cost,0) as cost,
		isnull(theorical_cost,0) as theorical_cost,
		invoiced_value_currency,
		invoiced_value,
		item_group_id,
		item_subgroup_id,
		customer_group,
		salesman
    FROM yq_sales
   WHERE invoice_date >= :date_start and 
         invoice_date <= :date_stop and 
         invoiced_qty <> 0 and invoiceline_type in (  'I' , 'C', 'R' ) 
ORDER BY customer_code,
		invoice_id
```

## Colonnes
| Colonne |
|---------|
| item_code |
| item_name |
| customer_code |
| customer_name |
| invoice_number |
| invoice_id |
| invoicer_id |
| invoiceline_type |
| document_type |
| invoice_currency |
| invoice_date |
| qty_invoiced |
| lotbasecost |
| loxtrcost |
| cost |
| theorical_cost |
| invoiced_value_currency |
| invoiced_value |
| item_group_id |
| item_subgroup_id |
| customer_group |
| salesman |

