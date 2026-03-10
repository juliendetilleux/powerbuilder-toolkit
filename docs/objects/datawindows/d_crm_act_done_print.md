# d_crm_act_done_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         (select contacts.ctline from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contactid,
         (select contacts.ctname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contact,
         (select contacts.ctfirstname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contactfirstname,
   		(select contacts.cttel from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as cttel,
         (select adresses.adtel from adresses where adrsactions.aaadrid = adresses.adcode) as adtel,
			adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aamoddat,   
         adrsactions.aamoduser,   
         adrsactions.aatiming,   
         adrsactions.aaparcode,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aastatus,
         (select users.usname from users where users.uscode = adrsactions.aarespons) as users,
         (select adresses.adname from adresses where adrsactions.aaadrid = adresses.adcode) as adname
    FROM adrsactions  
   WHERE ( aarespons like :a_user ) AND
			( aamoddat BETWEEN :a_startdate and :a_stopdate  )
order by users, adrsactions.aamoddat desc
       

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
| users |
| adname |

