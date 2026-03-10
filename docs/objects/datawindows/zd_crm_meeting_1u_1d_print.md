# zd_crm_meeting_1u_1d_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aadesc,   
         adrsactions.aatiming,   
         adrsactions.aaactiondate,   
         activities.acdesc,   
         adresses.adname,
			adresses.adcountrid,
			adresses.adloc,
         adresses.adcode,
			DayName(aaactiondate) as ActionDayName,
			Date(aaactiondate) as ActionDateJMA
    FROM adrsactions,   
         activities,   
         adresses  
   WHERE ( activities.accode = adrsactions.aaaction ) and  
         ( adresses.adcode = adrsactions.aaadrid ) and  
         ( ( adrsactions.aarespons = :Sel_user ) AND  
         ( adrsactions.aaactiondate > :Start_date ) AND  
         ( adrsactions.aaactiondate < :Stop_date ) )    

```

## Colonnes
| Colonne |
|---------|
| aadesc |
| aatiming |
| aaactiondate |
| activities_acdesc |
| adresses_adname |
| adresses_adcountrid |
| adresses_adloc |
| adresses_adcode |
| actiondayname |
| actiondatejma |

