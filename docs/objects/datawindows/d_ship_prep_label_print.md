# d_ship_prep_label_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT first Shipto.stdesc,
		Shipto.stloc,
		Salline.sldatreq,
		( select turnhead.thdesc from turnhead where salhead.shturnid = turnhead.thid ) as turn 
	FROM Shipto,
		Salhead,
		Salline
	WHERE Salhead.shcode = :an_shcode
		AND Salhead.shcode = Salline.slcode
		AND Salhead.shcust = Shipto.stcode
		AND Shipto.stseq = Salline.slshipto
		
```

## Colonnes
| Colonne |
|---------|
| shipto_stdesc |
| shipto_stloc |
| salline_sldatreq |
| cturn |

