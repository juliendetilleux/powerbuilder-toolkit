# d_hourly

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT hyid,   
         hyname,   
		hyactif, 
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdhourly = hourly.hyid and hdtyp = 'H' and hddaynum = 2 ),0) as monday,
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdhourly = hourly.hyid and hdtyp = 'H' and hddaynum = 3 ),0) as tuesday,
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdhourly = hourly.hyid and hdtyp = 'H' and hddaynum = 4 ),0) as wednesday,
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdhourly = hourly.hyid and hdtyp = 'H' and hddaynum = 5 ),0) as thursday,
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdhourly = hourly.hyid and hdtyp = 'H' and hddaynum = 6 ),0) as friday,
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdhourly = hourly.hyid and hdtyp = 'H' and hddaynum = 7 ),0) as saturday,
         isnull(( select minutes( hdstart , hdstop ) - isnull(( select sum(minutes( histart , histop )) from hourly_day_int where hourly_day_int.hihourly_day = hourly_day.hdid ),0) from hourly_day where hourly_day.hdh
```

## Colonnes
| Colonne |
|---------|
| hyid |
| hyname |
| hyactif |
| monday |
| tuesday |
| wednesday |
| thursday |
| friday |
| saturday |
| sunday |

