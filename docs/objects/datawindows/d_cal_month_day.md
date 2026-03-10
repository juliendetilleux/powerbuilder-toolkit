# d_cal_month_day

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
SELECT	aaactiondate as heure,
		adname + ' : '+ aadesc as action
	FROM adrsactions join adresses on adcode = aaadrid
	WHERE date(aaactiondate) = date(:adt_date)
		AND aarespons in ( :as_user )
```

## Colonnes
| Colonne |
|---------|
| adrsactions_heure |
| action |

