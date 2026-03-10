# d_serv_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,
			salhead.shsalesman,
			salhead.shcurr,
			salesman.smname,
			salesman.smbegsess,
			items.itcode,
			items.itname,   
         	items.itstat1, 			 
         	salline.slitem,   
         	salline.slqtyreal,   
         	salline.sldatreal,
			salline.slcode,
			salline.slsalval,
			itstat1.imcode,
			itstat1.imdesc,
			itstat1.im_orderby
    FROM salesman join salhead on salesman.smcode = salhead.shsalesman
					left outer join salline on salhead.shcode = salline.slcode
					left outer join items on salline.slitem = items.itcode
					left outer join itstat1 on  items.itstat1 = itstat1.imcode
	where salhead.shsalesman = :ras_cursaleman and
			 salline.sldatreal >= salesman.smbegsess and 
			 salline.sldatreal <= :radt_Stop
	ORDER BY im_orderby, itcode

```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salhead_shsalesman |
| salhead_shcurr |
| salesman_smname |
| salesman_smbegsess |
| items_itcode |
| items_itname |
| items_itstat1 |
| salline_slitem |
| salline_slqtyreal |
| salline_sldatreal |
| salline_slcode |
| salline_slsalval |
| itstat1_imcode |
| itstat1_imdesc |
| itstat1_im_orderby |

