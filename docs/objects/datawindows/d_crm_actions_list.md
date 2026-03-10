# d_crm_actions_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         contacts.ctline as contactid,
         contacts.ctname as contact,
         contacts.ctfirstname as contactfirstname,
   		contacts.cttel as cttel,
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
			adrsactions.aapriority,
			contacts.ctfunction,
			contacts.ctservice,
			contacts.ctlangue,
			contacts.ctactiv,
			contacts.ctmain,
			contacts.ctcrmuf01,
			contacts.ctcrmuf02,
			contacts.ctcrmuf03,
			contacts.ctcrmuf04,
			contacts.ctcrmuf05,
			contacts.ctcrmuf06,
			contacts.ctcrmuf07,
			contacts.ctcrmuf08,
			contacts.ctcrmuf09,
			contacts.ctcrmuf10,
			contacts.ctcrmuf11,
			contacts.ctcrmuf12,
			contacts.ctcrmuf13,
			contacts.ctcrmuf14,
			contacts.ctcrmuf15,
         (select adresses.adname from adresses where adrsactions.aaadrid = adresses.adcode) as adname
    FROM adrsactions left outer join contacts on adrsactions.aaadrid = contacts.ctadcode and adrsactions.aacontactid = contacts.ctline, 
			adresses,
			activities  
   WHERE adrsactions.aaadrid = adresses.adcode and
			adrsactions.aaaction NOT IN (-3, -4, -6, -7)  AND
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
| ctfunction |
| ctservice |
| ctlangue |
| ctactiv |
| ctmain |
| ctcrmuf01 |
| ctcrmuf02 |
| ctcrmuf03 |
| ctcrmuf04 |
| ctcrmuf05 |
| ctcrmuf06 |
| ctcrmuf07 |
| ctcrmuf08 |
| ctcrmuf09 |
| ctcrmuf10 |
| ctcrmuf11 |
| ctcrmuf12 |
| ctcrmuf13 |
| ctcrmuf14 |
| ctcrmuf15 |
| adname |

