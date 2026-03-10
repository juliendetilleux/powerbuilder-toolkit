# ds_crm_outlook_meetings

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaactiondate,   
         adrsactions.aatiming,   
         adrsactions.aadesc,   
         adrsactions.aacomment, 
         adresses.adname,
			isnull( adrsactions.aaifoutlook, '' ) as aaifoutlook, 
			isnull( adrsactions.aamoddat, adrsactions.aacreadate ) as  aamoddat ,
         ( select ctname from contacts where  ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) ctname ,
			( select acdesc from activities where accode = adrsactions.aaaction  ) as activity 
    FROM adrsactions,   
         adresses  
   WHERE ( adresses.adcode = adrsactions.aaadrid ) and  
         ( adrsactions.aarespons = :curr_user ) AND  
	   ( adrsactions.aaaction not in ( -5, -6, -7) ) and 
         ( adrsactions.aaactiondate >= :start_date )   and 
			( dateformat(adrsactions.aaactiondate, 'hh:mm:ss') <> '00:00:00' )     

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaactiondate |
| aatiming |
| aadesc |
| aacomment |
| adresses_adname |
| caaifoutlook |
| adrsactions_aamoddat |
| cctname |
| cactivity |

