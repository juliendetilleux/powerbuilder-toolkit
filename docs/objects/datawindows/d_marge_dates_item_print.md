# d_marge_dates_item_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT item_code,
		item_name,
		invoice_number,
		customer_code + ', ' + customer_name as cust_info,
		if invoiceline_type = 'R' then 0 else invoiced_qty endif as qty_invoiced,
		invoiced_value,
		if (isnull(lotbasecost,0) + isnull(loxtrcost,0)) = 0 then isnull(cost,0) else (isnull(lotbasecost,0) + isnull(loxtrcost,0)) end if * qty_invoiced as purval,
		invoiced_value - purval as marge,
		round(if purval <> 0 then marge/purval else 0 end if * 100, 2) as per_marge
    FROM yq_sales
   WHERE date(invoice_date) >= :date_start and 
         date(invoice_date) <= :date_stop and 
         invoiced_qty <> 0 and invoiceline_type in (  'I' , 'C', 'R')
ORDER BY item_code,
		invoice_id
```

## Colonnes
| Colonne |
|---------|
| item_code |
| item_name |
| invoice_number |
| cust_info |
| qty_invoiced |
| invoiced_value |
| purval |
| marge |
| per_marge |

