# d_hourly_day_int_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT hiid,   
		histart ,
		histop,
		hihourly_day
    FROM hourly_day_int
  WHERE hihourly_day = :al_hdid
ORDER BY hiid 

```

## Colonnes
| Colonne |
|---------|
| hiid |
| histart |
| histop |
| hihourly_day |

