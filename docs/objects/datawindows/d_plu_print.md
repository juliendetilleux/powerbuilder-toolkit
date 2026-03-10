# d_plu_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_food
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itstat1,   
         salline.slitem,   
         salline.slqtyreal,   
         salline.sldatreal ,
		itstat1.imcode,
		itstat1.imdesc,
		itstat1.im_orderby
    FROM salline left outer join items on salline.slitem = items.itcode left outer join itstat1 on  items.itstat1 = itstat1.imcode
	where salline.sldatreal >= :radt_Start and salline.sldatreal <= :radt_Stop
	ORDER BY im_orderby, itcode

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itstat1 |
| salline_slitem |
| salline_slqtyreal |
| salline_sldatreal |
| itstat1_imcode |
| itstat1_imdesc |
| itstat1_im_orderby |

