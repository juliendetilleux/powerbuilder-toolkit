# d_marge_period_item_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
   SELECT item_code,
		item_name,
		sum(if accounting_period = :Sel_period then invoiced_qty else 0 endif) as invoiced_qty_p1,
		sum(if accounting_period = :Sel_period then invoiced_value else 0 endif) as invoiced_value_p1,

		sum(	if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0 then
					isnull(cost,0)
				else
					isnull(lotbasecost,0) + isnull(loxtrcost,0)
				endif
			* if accounting_period = :Sel_period then isnull(invoiced_qty,0) else 0 endif ) as purchase_value_p1,

		isnull((select sum(yq_2.invoiced_qty)
					 from yq_sales as yq_2
				where yq_2.item_code = yq_sales.item_code and
					yq_2.accounting_period = :Sel_period2 and yq_2.invoiceline_type in (  'I', 'C' ) ),0) as p2invoiced_qty,

		isnull((select sum(yq_2.invoiced_value)
					 from yq_sales as yq_2
				where yq_2.item_code = yq_sales.item_code and
					yq_2.accounting_period = :Sel_period2 and yq_2.invoiceline_type in (  'I' ,'C', 'R' ) ),0) as p2invoiced_value,

		isnull((select sum(	if isnull(yq_2.lotbasecost,0) + isnull(yq_2.loxtrcost,0) = 0 then
									isnull(yq_2.cost,0)
								else
									isnull(yq_2.lotbasecost,0) + isnull(yq_2.loxtrcost,0)
								endif
							* yq_2.invoiced_qty  )
					 from yq_sales as yq_2
				where yq_2.item_code = yq_sales.item_code and
					yq_2.accounting_period = :Sel_period2 and yq_2.invoiceline_type in (  'I', 'C' ) ),0) as p2purchase_value

    FROM yq_sales
   WHERE ( accounting_period = :Sel_period OR
			accounting_period = :Sel_period2 ) and invoiceline_type in (  'I' , 'C' )
GROUP BY item_code,
		item_name
ORDER BY item_code
```

## Colonnes
| Colonne |
|---------|
| item_code |
| item_name |
| invoiced_qty_p1 |
| invoiced_value_p1 |
| purchase_value_p1 |
| p2invoiced_qty |
| p2invoiced_value |
| p2purchase_value |

