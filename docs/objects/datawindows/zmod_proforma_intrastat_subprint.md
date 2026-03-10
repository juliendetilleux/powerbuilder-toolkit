# zmod_proforma_intrastat_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT Items.itintrastat AS Intrastat,
		Items.itwistat AS Itwistat,
		Sum(Profoline.plqty) AS Qty,
		Sum(Profoline.plsalval) AS Salval
	FROM Items,
		Profoline,
		Profohead
	WHERE Profohead.phcode = :an_profohead
		AND Profohead.phcode = Profoline.plcode
		AND Profoline.plitem = Items.itcode
		AND Profohead.phtyptva IN ('3','4')
	GROUP BY Items.itintrastat,Items.itwistat
Order By Items.itintrastat
```

## Colonnes
| Colonne |
|---------|
| cintrastat |
| citwistat |
| cqty |
| csalval |

