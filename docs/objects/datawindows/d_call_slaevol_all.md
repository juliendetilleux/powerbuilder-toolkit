# d_call_slaevol_all

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
select date(cldate) as caldate ,

( select count( callhead.chid ) from callhead where date(callhead.chcreadat) = caldate and chstatus < 900  ) as call_open ,   

( select count( callhead.chid ) from callhead where date(callhead.chpreclotdat) = caldate and chstatus > 499 ) as call_ended ,  

(select count( callhead.chid ) from callhead where  chstatus < 500  )  as call_today ,

if  (select isnull(pmnval,0) from parameters where pmcode = 'CALLS02')  = 0 then 10 else (select pmnval from parameters where pmcode = 'CALLS02')  endif as graphdays 




 from calline
 where clcode = '#CRM#' and 

cldate between :ad_startdate and :ad_enddate

 order by 1 desc
```

## Colonnes
| Colonne |
|---------|
| caldate |
| call_open |
| call_ended |
| call_today |
| graphdays |

