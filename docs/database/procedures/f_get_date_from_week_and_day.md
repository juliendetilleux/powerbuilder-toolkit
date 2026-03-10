# Function: f_get_date_from_week_and_day

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| ai_year | integer | IN |
| ai_week | integer | IN |
| ai_day | integer | IN |

## Retourne
`datetime`

## Source
```sql
create FUNCTION DBA."f_get_date_from_week_and_day"( in ai_year integer, in ai_week integer, in ai_day integer)
		returns datetime
		begin
		  declare ldt_date datetime;
		  declare ldt_firstdayofyear datetime;
		  declare ldt_firstdayoffirstweekofyear datetime;
		  declare ldt_firstdayofdateweek datetime;
		
		  set ldt_firstdayofyear = YMD ( ai_year, 01, 01 );
		  set ldt_firstdayoffirstweekofyear = dateadd(day, -1*datepart(weekday, ldt_firstdayofyear), ldt_firstdayofyear);
		  set ldt_firstdayofdateweek = dateadd( week, ai_week-1, ldt_firstdayoffirstweekofyear);
		  set ldt_date = dateadd( day, ai_day , ldt_firstdayofdateweek);
		
		  return ldt_date;
		end
```
