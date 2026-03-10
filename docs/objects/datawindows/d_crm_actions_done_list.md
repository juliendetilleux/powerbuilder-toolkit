# d_crm_actions_done_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         (select contacts.ctline from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contactid,
         (select contacts.ctname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contact,
         (select contacts.ctfirstname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contactfirstname,
   		(select contacts.cttel from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as cttel,
         adresses.adtel as adtel,
			adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         isnull(adrsactions.aamoddat,adrsactions.aastsdat) as aamoddat ,   
         adrsactions.aamoduser,   
         adrsactions.aatiming,   
         adrsactions.aaparcode,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aastatus,
			adrsactions.aalimitdate,
         adresses.adname 
    FROM adrsactions, 
			adresses,
			activities    
   WHERE adrsactions.aaadrid = adresses.adcode   AND
		( adrsactions.aaaction = activities.accode ) AND 
		( isnull(activities.acrh,0) >= 0 )    
  
order by aamoddat desc 

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| contactid |
| contact |
| contactfirstname |
| cttel |
| adtel |
| aaaction |
| aacreator |
| aarespons |
| aaactiondate |
| aamoddat |
| aamoduser |
| aatiming |
| aaparcode |
| aastatus |
| aacomment |
| aadesc |
| aacreadate |
| aastatus |
| aalimitdate |
| adname |

