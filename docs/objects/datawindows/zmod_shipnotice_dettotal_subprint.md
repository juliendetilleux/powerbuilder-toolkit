# zmod_shipnotice_dettotal_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
	SELECT Sum(Salline.slstdval * Salline.slqtyord) as val,
			Salhead.shcurr
		FROM Salline,
			Salhead,
			Shipline
		WHERE Shipline.slcode = :an_shiphead
			AND Salhead.shcode = Shipline.slsalorder
			AND Salline.slcode = Salhead.shcode
			AND Salline.slline = Shipline.slsalline
		GROUP BY Salhead.shcurr
 UNION ALL
	SELECT Sum(Shipcost.scstdval * Shipcost.scqty),
			(SELECT Adresses.adcurr
				FROM Adresses
				WHERE Adcode = '##########')
		FROM Shipcost
		WHERE Shipcost.sccode = :an_shiphead
		GROUP BY Shipcost.sccode
 ORDER BY 2
```

## Colonnes
| Colonne |
|---------|
| cval |
| salhead_shcurr |

