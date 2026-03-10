# d_calls_ad

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT 
         callhead.chid,   
         callhead.chadid,   
         callhead.chctid,   
         callhead.chstatus,   
         callhead.chfixend,   
         callhead.chdesc,   
         callhead.chfixenddat,   
         callhead.chcreadat,   
         callhead.chmanagedusr,   
         callhead.chhandlusr,   
         callhead.chpriority,
		callhead.chfilehead,
		callhead.chfileline,
		(select adresses.adname from adresses where adresses.adcode=callhead.chadid) as adname_customer,
		(select contacts.ctname from contacts where contacts.ctadcode=callhead.chadid and contacts.ctline=callhead.chctid) as ctname_contact,
		(select choiceline.clname from choiceline where choiceline.clcode='CAST' and choiceline.clline=callhead.chstatus) as clname_status,
		(select choiceline.clname from choiceline where choiceline.clcode='CAPR' and choiceline.clline=callhead.chpriority) as clname_priority,
		(select choiceline.clname from choiceline where choiceline.clcode='CACG' and choiceline.clline=callhead.chcateg) as clname_categ ,
		cast(left(callhead.chstatus/100,1)as integer) as hyperstatus    

	
   FROM callhead 
WHERE callhead.chadid = :as_adid and 
		callhead.chcreadat between :ad_startdate and :ad_enddate 
order by hyperstatus asc, callhead.chcreadat 
```

## Colonnes
| Colonne |
|---------|
| callhead_chid |
| callhead_chadid |
| callhead_chctid |
| callhead_chstatus |
| callhead_chfixend |
| chdesc |
| callhead_chfixenddat |
| callhead_chcreadat |
| callhead_chmanagedusr |
| callhead_chhandlusr |
| callhead_chpriority |
| callhead_chfilehead |
| callhead_chfileline |
| adname_customer |
| ctname_contact |
| clname_status |
| clname_priority |
| clname_categ |
| hyperstatus |

