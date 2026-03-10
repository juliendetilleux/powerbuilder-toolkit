# dd_palet_label

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
select 'd_ship_pallet_print' as aralternate,
		'-' as arname
from altreport
union
  SELECT altreport.aralternate,
			altreport.arname  
    FROM altreport
	where altreport.aroriginal = 'd_ship_pallet_print'

```

## Colonnes
| Colonne |
|---------|
| aralternate |
| arname |

