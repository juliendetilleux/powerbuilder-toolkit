# d_crm_quotes_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT (select contacts.ctname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contact,   
         (select contacts.ctfirstname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contactfirstname,   
         (select adresses.adname from adresses where adrsactions.aaadrid = adresses.adcode ) as adname,   
         (select users.usname from users where adrsactions.aarespons = users.uscode ) as users,   
         adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aacontactid,   
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
         adrsactions.aastsdat,   
         adrsactions.aamoddat,   
         adrsactions.aamoduser,   
         adrsactions.aafileref,   
         adrsactions.aawccost,   
         adrsactions.aauscost,   
         adrsactions.aarealcost,   
         adrsactions.aainvstatus,   
         adrsactions.aafileline,   
         adrsactions.aarealtiming,   
         adrsactions.aaextratiming,   
         adrsactions.aasalorder,   
         adrsactions.aasalline,   
         adrsactions.aainvoicehead,   
         adrsactions.aainvoiceline,   
         adrsactions.aawfhead,   
         adrsactions.aawfline,   
         adrsactions.aawfsuccess,   
         adrsactions.aawffinish,   
         adrsactions.aagroup,   
         adrsactions.aaquoteval  
    FROM adrsactions  
   WHERE ( aaactiondate BETWEEN :a_startdate and :a_stopdate 
   
```

## Colonnes
| Colonne |
|---------|
| contact |
| contactfirstname |
| adname |
| users |
| aacode |
| aaadrid |
| aacontactid |
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
| aastsdat |
| aamoddat |
| aamoduser |
| aafileref |
| aawccost |
| aauscost |
| aarealcost |
| aainvstatus |
| aafileline |
| aarealtiming |
| aaextratiming |
| aasalorder |
| aasalline |
| aainvoicehead |
| aainvoiceline |
| aawfhead |
| aawfline |
| aawfsuccess |
| aawffinish |
| aagroup |
| aaquoteval |

