# ds_crm_outlook_1meeting

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
			isnull( adrsactions.aaifoutlook, '' ) as aaifoutlook, 
			isnull( adrsactions.aamoddat, adrsactions.aacreadate ) as  aamoddat ,
         adresses.adname,  
         ( select ctname from contacts where  ctadcode = adrsactions.aaadrid and ctline = adrsactions.aacontactid ) ctname ,
			( select acdesc from activities where accode = adrsactions.aaaction  ) as activity 
    FROM adrsactions,   
         adresses  
   WHERE ( adresses.adcode = adrsactions.aaadrid ) and  
         ( adrsactions.aacode = :curr_action )   and 
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
| caaifoutlook |
| adrsactions_aamoddat |
| adresses_adname |
| cctname |
| cactivity |

