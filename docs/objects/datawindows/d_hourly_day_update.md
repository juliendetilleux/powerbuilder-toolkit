# d_hourly_day_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT hdid, 
		hddaynum  ,
		hdstart ,
		hdstop,
		isnull(( select sum(minutes( histart, histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) as interrupt
    FROM hourly_day
  WHERE hdhourly = :al_hyid AND
	hdtyp = 'H' 
ORDER BY IF hddaynum = 1 THEN 7 ELSE hddaynum - 1 ENDIF
 
```

## Colonnes
| Colonne |
|---------|
| hdid |
| hddaynum |
| hdstart |
| hdstop |
| interrupt |

