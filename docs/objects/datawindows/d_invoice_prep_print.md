# d_invoice_prep_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT shiphead.shcust,   
         adresses.adname,   
         shipline.slcode,   
         shipline.slline,   
         shipline.slitem,   
         items.itname,   
         shiphead.shdate,   
         shipline.slqty,   
         items.itum,
		IF salline.slqtyreq > 0 THEN
			abs(salline.slsalval / salline.slqtyreq)
		ELSE
			  salline.slunitprice
		ENDIF * shipline.slqty as line_val
    FROM shiphead
         JOIN shipline ON shipline.slcode = shiphead.shcode 
         JOIN adresses ON shiphead.shcust = adresses.adcode 
         JOIN items ON shipline.slitem = items.itcode
		JOIN salline ON salline.slcode = shipline.slsalorder and
						salline.slline = shipline.slsalline
   WHERE shipline.slinv = 'N'  
ORDER BY shiphead.shcust ASC,   
         shipline.slcode ASC,   
         shipline.slline ASC   

```

## Colonnes
| Colonne |
|---------|
| shiphead_shcust |
| adresses_adname |
| shipline_slcode |
| shipline_slline |
| shipline_slitem |
| items_itname |
| shiphead_shdate |
| shipline_slqty |
| items_itum |
| line_val |

