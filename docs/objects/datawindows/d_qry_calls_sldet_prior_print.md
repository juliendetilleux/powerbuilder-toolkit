# d_qry_calls_sldet_prior_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT 
         callhead.chid,   
         callhead.chadid,      
         callhead.chstatus,      
         callhead.chpreclotdat,   
         callhead.chcreadat,   
         callhead.chmanagedusr,   
         callhead.chhandlusr,
         callhead.chpriority, 
	    callhead.chcateg ,
		adresses.adname as adname_customer,
		(select contacts.ctname from contacts where contacts.ctadcode=callhead.chadid and contacts.ctline=callhead.chctid) as ctname_contact,
		minutes(callhead.chpreclotdat) as clot_minut,
		minutes(callhead.chcreadat) as crea_minut,
		adresses.adgrcust,
		callhead.chdesc,
		adresses.adloc

FROM callhead, adresses
	
WHERE callhead.chpreclotdat between :date_begin and :date_end
	AND callhead.chstatus = 800 
	AND callhead.chadid = adresses.adcode

ORDER BY chpriority, adname_customer




```

## Colonnes
| Colonne |
|---------|
| callhead_chid |
| callhead_chadid |
| callhead_chstatus |
| callhead_chpreclotdat |
| callhead_chcreadat |
| callhead_chmanagedusr |
| callhead_chhandlusr |
| callhead_chpriority |
| callhead_chcateg |
| adname_customer |
| ctname_contact |
| clot_minut |
| crea_minut |
| adresses_adgrcust |
| callhead_chdesc |
| adresses_adloc |

