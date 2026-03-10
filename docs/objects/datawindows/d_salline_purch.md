# d_salline_purch

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
SELECT Salline.slline,
		Salline.slitem,
		Salline.slqtyreq,
		Salline.sldatreq,
		Salline.slfileref,
		Salline.slfileline,
		Items.itname,
		Items.itum,
		items.itstdpur,
		(SELECT sum(Purline.plqtyreq)
			FROM Purline
			WHERE Purline.plsalhead = Salline.slcode
				AND Purline.plsalline = Salline.slline and purline.plstatus < '9' ) as sumplqty,
		ifnull(sumplqty,0,sumplqty) as plqty,
		Salline.slqtyreq - plqty as qtyreq,
		items.ittyp
	FROM Salline,
		Salhead,
		Items
	WHERE Salline.slcode = :an_salhead
		AND Salline.slcode = Salhead.shcode
		AND Items.itcode = Salline.slitem
		AND Salline.slstatus < '8' 
		AND plqty < Salline.slqtyreq
		AND (items.ittyp  in ('D', 'C', 'P'))
		AND (salhead.shtype <> 'C' OR isnull(Salline.slcontst,'') = 'C')
 ORDER BY salline.slline
```

## Colonnes
| Colonne |
|---------|
| salline_slline |
| salline_slitem |
| salline_slqtyreq |
| salline_sldatreq |
| salline_slfileref |
| salline_slfileline |
| items_itname |
| items_itum |
| items_itstdpur |
| csumplqty |
| plqty |
| qtyreq |
| items_ittyp |

