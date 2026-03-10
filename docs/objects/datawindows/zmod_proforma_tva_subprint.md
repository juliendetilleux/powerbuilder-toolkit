# zmod_proforma_tva_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT Profotva.ptbasetva as val,
		Profotva.pttva AS tva,
		profotva.pttvaval as tvaval,
		Profohead.phcurr
	FROM Profohead,
		Profotva
	WHERE Profohead.phcode = :an_profohead
		AND Profohead.phcode = Profotva.ptcode
	ORDER BY tva

```

## Colonnes
| Colonne |
|---------|
| val |
| tva |
| tvaval |
| profohead_phcurr |

