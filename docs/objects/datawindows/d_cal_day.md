# d_cal_day

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
with recursive days( hour, PMIGEST_ua_1, PMIGEST_ua_1_code, PMIGEST_ua_2, PMIGEST_ua_2_code, DV_ua_1, DV_ua_1_code, DT_ua_1, DT_ua_1_code, DT_ua_2, DT_ua_2_code) as 
			(
			select dateadd(hour,-(hour(:adt_date)),:adt_date) as hour,
					(select (select adname from adresses where adcode = aaadrid)+ ' : '+ aadesc from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 25852, 25855) ),
					(select aacode from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 25852, 25855) ),
					(select (select adname from adresses where adcode = aaadrid)+ ' : '+ aadesc from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 25853, 25854) ),
					(select aacode from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 25853, 25854) ),
					(select (select adname from adresses where adcode = aaadrid)+ ' : '+ aadesc from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'DV' and aacode in ( 0) ),
					(select aacode from adrsactions where hour between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'DV' and aacode in ( 0) ),
					(select (select adname from adresses where adcode = aaadrid)+ ' : 
```

## Colonnes
| Colonne |
|---------|
| hour |
| pmigest_ua_1 |
| pmigest_ua_1_code |
| pmigest_ua_2 |
| pmigest_ua_2_code |
| dv_ua_1 |
| dv_ua_1_code |
| dt_ua_1 |
| dt_ua_1_code |
| dt_ua_2 |
| dt_ua_2_code |

