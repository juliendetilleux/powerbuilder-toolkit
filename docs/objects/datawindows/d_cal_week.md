# d_cal_week

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
with recursive days( hour, PMIGEST_ua_1_mon, PMIGEST_ua_1_mon_code, PMIGEST_ua_1_tue, PMIGEST_ua_1_tue_code, PMIGEST_ua_2_tue, PMIGEST_ua_2_tue_code, PMIGEST_ua_1_wen, PMIGEST_ua_1_wen_code, PMIGEST_ua_1_thu, PMIGEST_ua_1_thu_code, PMIGEST_ua_1_fri, PMIGEST_ua_1_fri_code, PMIGEST_ua_1_sat, PMIGEST_ua_1_sat_code, PMIGEST_ua_1_sun, PMIGEST_ua_1_sun_code) as 
			(
			select dateadd(hour,-(hour(:adt_date)),:adt_date) as hour,
					(select (select adname from adresses where adcode = aaadrid)+ ' : '+ aadesc from adrsactions where dateadd(day, 0, hour) between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 26450) ),
					(select aacode from adrsactions where dateadd(day, 0, hour) between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 26450) ),
					(select (select adname from adresses where adcode = aaadrid)+ ' : '+ aadesc from adrsactions where dateadd(day, 1, hour) between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 26452, 26454) ),
					(select aacode from adrsactions where dateadd(day, 1, hour) between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 26452, 26454) ),
					(select (select adname from adresses where adcode = aaadrid)+ ' : '+ aadesc from adrsactions where dateadd(day, 1, hour) between dateadd(minute,-(minute(aaactiondate)),aaactiondate) and dateadd(minute, if aatiming > 0 then aatiming-1 else aatiming end if, aaactiondate) and aarespons = 'PMIGEST' and aacode in ( 26455) ),
					(select aacode from adrsactions wh
```

## Colonnes
| Colonne |
|---------|
| hour |
| pmigest_ua_1_mon |
| pmigest_ua_1_mon_code |
| pmigest_ua_1_tue |
| pmigest_ua_1_tue_code |
| pmigest_ua_2_tue |
| pmigest_ua_2_tue_code |
| pmigest_ua_1_wen |
| pmigest_ua_1_wen_code |
| pmigest_ua_1_thu |
| pmigest_ua_1_thu_code |
| pmigest_ua_1_fri |
| pmigest_ua_1_fri_code |
| pmigest_ua_1_sat |
| pmigest_ua_1_sat_code |
| pmigest_ua_1_sun |
| pmigest_ua_1_sun_code |

