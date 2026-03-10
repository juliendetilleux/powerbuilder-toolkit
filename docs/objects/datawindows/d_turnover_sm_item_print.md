# d_turnover_sm_item_print

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
		item_code = yq.item_code AND
		item_name = yq.item_name AND
		isnull(salesman, '########') = yqsalesman  and
			invoiceline_type in (  'I', 'C', 'R')) as invoiced_value,

   (select sum(if isnull(lotbasecost,0) + isnull(loxtrcost,0) = 0
					  then cost
					  else isnull(lotbasecost,0) + isnull(loxtrcost,0)
					  endif * invoiced_qty) 
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year AND
		item_code = yq.item_code AND
		item_name = yq.item_name AND
		isnull(salesman, '########') = yqsalesman  and
			invoiceline_type in (  'I', 'C' )) as purchase_value,

	(select sum(invoiced_qty)
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year AND
		item_code = yq.item_code AND
		item_name = yq.item_name AND
		isnull(salesman, '########') = yqsalesman and
			invoiceline_type in (  'I', 'C' )) as invoiced_qty_um,

	(select sum(if is_um_tarif = 'Y' then invoiced_qty_pc else null endif)
		from yq_sales
 	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year AND
		item_code = yq.item_code AND
		item_name = yq.item_name AND
		isnull(salesman, '########') = yqsalesman and
			invoiceline_type in (  'I', 'C' ))  as invoiced_qty_pc,


   monthnum.num accounting_period2,

    (select sum(invoiced_value)
		from yq_sales
	where MONTH(invoice_date) = monthnum.num AND
		YEAR(invoice_date) = :ai_year - 1
```

## Colonnes
| Colonne |
|---------|
| accounting_period |
| invoiced_value |
| purchase_value |
| invoiced_qty_um |
| invoiced_qty_pc |
| accounting_period2 |
| invoiced_value2 |
| purchase_value2 |
| invoiced_qty_um2 |
| invoiced_qty_pc2 |
| item_unit |
| item_code |
| item_name |
| yqsalesman |
| smname |

