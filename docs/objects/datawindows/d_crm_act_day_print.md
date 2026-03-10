# d_crm_act_day_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT 
    (select contacts.ctname from contacts where adrsactions.aaadrid = contacts.ctadcode 
														and adrsactions.aacontactid = contacts.ctline) as contact,
     (select contacts.ctfirstname from contacts where adrsactions.aaadrid = contacts.ctadcode 
														and adrsactions.aacontactid = contacts.ctline) as contactfirstname,
	adrsactions.aaactiondate,   
	adrsactions.aatiming,   
	adrsactions.aadesc,
	aamoddat,
	aarespons ,
   ( If   adrsactions.aaactiondate  = datetime(date(adrsactions.aaactiondate))   then 	2 else 1 endif ) as tri 
FROM adrsactions  
WHERE ( aarespons like :a_user ) AND
		( date(adrsactions.aaactiondate) = date(:a_date)  )
order by tri, adrsactions.aaactiondate asc
```

## Colonnes
| Colonne |
|---------|
| contact |
| contactfirstname |
| aaactiondate |
| aatiming |
| aadesc |
| aamoddat |
| aarespons |
| tri |

