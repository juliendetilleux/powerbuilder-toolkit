# d_cal_day_super

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
with recursive days( hour, usersaction ) as
			(
			select dateadd(hour,-(hour(:adt_date)),:adt_date) as hour,
			        (select list(aarespons) from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'EC' )

			UNION ALL 
			
			select 	dateadd(hour, 1, days.hour),
                     (select list(aarespons) from adrsactions where dateadd(hour, 1, days.hour) between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'EC')
            from days
			where dateadd(hour, 1, days.hour) < dateadd(day, 1, dateadd(hour,-(hour(:adt_date)),:adt_date))
			)
			select * from days;
```

## Colonnes
| Colonne |
|---------|
| hour |
| usersaction |

