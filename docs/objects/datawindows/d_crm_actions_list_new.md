# d_crm_actions_list_new

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
         adrsactions.aalimitdate,   
         adrsactions.aatiming,   
         adrsactions.aaparcode,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aaprojet,   
         adrsactions.aaread,   
         adrsactions.aareaddate,
  			adresses.adname,
         adrsactions.aamoddat,
         adrsactions.aamoduser,
			adrsactions.aapriority
    FROM adrsactions, adresses, activities  
   WHERE adrsactions.aaadrid = adresses.adcode and adrsactions.aaaction <> - 3 and adrsactions.aaaction <> - 4  AND
		( adrsactions.aaaction = activities.accode ) AND 
		( isnull(activities.acrh,0) >= 0 )    
order by aaactiondate, adrsactions.aacode
       

```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| contactid |
| contact |
| ccontactfirstname |
| cttel |
| adtel |
| aaaction |
| aacreator |
| aarespons |
| aaactiondate |
| aalimitdate |
| aatiming |
| aaparcode |
| aastatus |
| aacomment |
| aadesc |
| aacreadate |
| aaprojet |
| aaread |
| aareaddate |
| adresses_adname |
| adrsactions_aamoddat |
| adrsactions_aamoduser |
| adrsactions_aapriority |

