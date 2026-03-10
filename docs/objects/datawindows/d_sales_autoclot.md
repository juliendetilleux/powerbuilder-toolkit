# d_sales_autoclot

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT 100 * ( (Salline.slqtyreq - Salline.slqtyreal) / (isnull(Salline.slqtyreq, 1)) ) as shipedprocent
		,Salline.slcode
		,Salline.slline
		,Items.itcode
		,Items.itname
		,Items.itum
		,(Salline.slqtyreq ) as qtytot
		,(Salline.slqtyreal ) as qtyshiped
		,Salline.sldatreq as reqdate
		,((Salline.slqtyreq - Salline.slqtyreal) ) as qtyleft
		,'Y' as selected
	FROM Salhead
		,Salline
		,Items
	WHERE Salhead.shcode = Salline.slcode
		AND Salline.slstatus < '6'
		AND shipedprocent <= :an_shiped_tol
		AND Items.itcode = Salline.slitem
		AND Salline.sldatreq <= :adt_datreq
		AND Salline.slqtyreq > 0 
	ORDER BY Salline.slcode
		,Salline.slline
```

## Colonnes
| Colonne |
|---------|
| cshipedprocent |
| salline_slcode |
| salline_slline |
| items_itcode |
| items_itname |
| items_itum |
| cqtytot |
| cqtyshiped |
| salline_reqdate |
| cqtyleft |
| cselected |

