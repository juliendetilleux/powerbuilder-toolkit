# Procedure: sp_nbweekinmonth

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| datein | datetime | IN |
| nbweek | numeric(1 | OUT |
| 0 |  | IN |

## Source
```sql
create procedure DBA."sp_nbweekinmonth"(in datein datetime, out nbweek numeric(1,0))
	
	BEGIN
		with recursive calendar( week) as
			(
			select  if dow(dateadd(day,-(day(datein)-1),datein)) = 1 then
                        (datepart(week, dateadd(day,-(day(datein)-1),datein)) - 1 )
                    else
                        datepart(week, dateadd(day,-(day(datein)-1),datein))
                    end if as week
			UNION ALL
			
			select 	calendar.week + 1
            from calendar
			where calendar.week + 1 <= datepart( week, dateadd(day,-(day(DATEADD(month, 1, datein))+1),DATEADD(month, 1, datein)))
			)
			select count(week) from calendar;
	END
```
