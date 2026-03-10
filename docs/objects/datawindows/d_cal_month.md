# d_cal_month

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
with recursive calendar( week, year, monday, tuesday, wednesday, thursday, friday, saturday, sunday, actions_mon, actions_tue, actions_wen, actions_thu, actions_fri, actions_sat, actions_sun ) as
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
					(select f_get_date_from_week_and_day( year , week+1 , 1)),
                    (select replace(list( dateformat(aaactiondate, 'HH:MM') + ' ' +adname + char(13)), ',', '' ) from adrsactions join adresses on adcode = aaadrid where date(aaactiondate) = date((select f_get_date_from_week_and_day( year , week , 2)))),                    
                    (select replace(list( dateformat(aaactiondate, 'HH:MM') + ' ' +adname + char(13)), ',', '' ) from adrsactions join adresses on adcode = aaadrid where date(aaactiondate) = date((select f_get_date_from_week_and_day( year , week , 3)))),                    
                    (select replace(list( dateformat(aaactiondate, 'HH:MM') + ' ' +adname + char(13)), ',', '' ) from adrsactions join adresses on adcode = aaadrid where date(aaactiondate) = date((select f_get_date_from_week_and_day( year , week , 4)))),                    
                    (select replace(list( dateformat(aaactiondate, 'HH:MM') + ' ' +adname + char(13)), ',', '' ) from adrsactions join adresses on adcode = aaadri
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
| actions_mon |
| actions_tue |
| actions_wen |
| actions_thu |
| actions_fri |
| actions_sat |
| actions_sun |

