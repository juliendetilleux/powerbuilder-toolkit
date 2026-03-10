# d_ca_glob_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT salesman,
			customer_group,   
         customer_group_name,  
         customer_code,   
         customer_name,

			invoice_date,
			shipto_id,
			shipto_name,
			shipping_date,

			invoice_id,
			invoiceline_type,
			invoice_line,
			shipping_id,
			shipping_line,
			sale_order_id,
			sale_order_line,
			accounting_period,

         item_code,   
         item_name,
         item_unit,  
			item_group_id,
			item_group_name,
			item_subgroup_id,
			item_subgroup_name,

			orderprice,
			invoicebaseprice,
			invoicediscprice,
			invoicenetprice,
         invoiced_value as netval,			
         invoiced_qty as pmixqty,
			vat_level,
			(select smname from salesman where smcode = yq_sales.salesman) as smname
    FROM yq_sales
   WHERE invoice_date between :Start_date AND :Stop_date 

 ORDER BY salesman, 
			customer_group_name,
			customer_name,
			shipto_name,
			item_name,
			invoice_id,
			invoice_line

```

## Colonnes
| Colonne |
|---------|
| salesman |
| customer_group |
| customer_group_name |
| customer_code |
| customer_name |
| invoice_date |
| shipto_id |
| shipto_name |
| shipping_date |
| invoice_id |
| invoiceline_type |
| invoice_line |
| shipping_id |
| shipping_line |
| sale_order_id |
| sale_order_line |
| accounting_period |
| item_code |
| item_name |
| item_unit |
| item_group_id |
| item_group_name |
| item_subgroup_id |
| item_subgroup_name |
| orderprice |
| invoicebaseprice |
| invoicediscprice |
| invoicenetprice |
| cnetval |
| cpmixqty |
| vat_level |
| smname |

