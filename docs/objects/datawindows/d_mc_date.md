# d_mc_date

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
with recursive calendar( week, year, monday, tuesday, wednesday, thursday, friday, saturday, sunday) as
			(
			select  if dow(dateadd(day,-(day(:adt_date)-1),:adt_date)) = 1 then
                        (datepart(week, dateadd(day,-(day(:adt_date)-1),:adt_date)) - 1 )
                    else 
                        datepart(week, dateadd(day,-(day(:adt_date)-1),:adt_date))
                    end if as week,
			        year (:adt_date) as year,
                    (select f_get_date_from_week_and_day( year , week , 2)),
                    (select f_get_date_from_week_and_day( year , week , 3)),
                    (select f_get_date_from_week_and_day( year , week , 4)),
                    (select f_get_date_from_week_and_day( year , week , 5)),
                    (select f_get_date_from_week_and_day( year , week , 6)),
                    (select f_get_date_from_week_and_day( year , week , 7)),
                    (select f_get_date_from_week_and_day( year , week+1 , 1))
			UNION ALL 
			
			select 	calendar.week + 1,
                    calendar.year,
                    (select f_get_date_from_week_and_day( year , week+1 , 2)),
                    (select f_get_date_from_week_and_day( year , week+1 , 3)),
                    (select f_get_date_from_week_and_day( year , week+1 , 4)),
                    (select f_get_date_from_week_and_day( year , week+1 , 5)),
                    (select f_get_date_from_week_and_day( year , week+1 , 6)),
                    (select f_get_date_from_week_and_day( year , week+1 , 7)),
                    (select f_get_date_from_week_and_day( year , week+2 , 1))
            from calendar
			where calendar.week + 1 <= datepart( week, dateadd(day,-(day(DATEADD(month, 1, :adt_date))+1),DATEADD(month, 1, :adt_date)))
			)
			select * from calendar;
```

## Colonnes
| Colonne |
|---------|
| week |
| year |
| monday |
| tuesday |
| wednesday |
| thursday |
| friday |
| saturday |
| sunday |

