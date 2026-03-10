# d_crm_act_2do_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,
         adrsactions.aacontactid contactid,
         (select contacts.ctname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contact,
         (select contacts.ctfirstname from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as contactfirstname,
   		(select contacts.cttel from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as cttel,
         (select contacts.ctgsm from contacts where adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline) as ctgsm,
         (select adresses.adtel from adresses where adrsactions.aaadrid = adresses.adcode) as adtel,
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
         adrsactions.aamoddat,
         adrsactions.aamoduser,
         (select users.usname from users where users.uscode = adrsactions.aarespons)  as users,
         adrsactions.aapriority as adrsactions_aapriority,
         (select adresses.adname from adresses where adrsactions.aaadrid = adresses.adcode) as adname
    FROM adrsactions  
   WHERE ( aarespons like :a_user ) AND
			( aastatus < 2) AND 
			(( aaactiondate BETWEEN :a_startdate and :a_stopdate  ) OR
		 	( aalimitdate BETWEEN :a_startdate and :a_stopdate  ))

order by users, aaactiondate, adrsactions.aacode
       

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
| ctgsm |
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
| aamoddat |
| aamoduser |
| users |
| adrsactions_aapriority |
| adname |

