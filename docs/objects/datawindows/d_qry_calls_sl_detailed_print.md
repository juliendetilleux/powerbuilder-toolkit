# d_qry_calls_sl_detailed_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT 
         callhead.chid,   
         callhead.chadid,      
		(select adresses.adname from adresses where adresses.adcode=callhead.chadid) as adname_customer,
		adresses.adgrcust, 
		(select contacts.ctname from contacts where contacts.ctadcode=callhead.chadid and contacts.ctline=callhead.chctid) as ctname_contact,
         callhead.chcreadat,   
         callhead.chpreclotdat,   
         callhead.chmanagedusr,   
         callhead.chhandlusr,
         callhead.chpriority, 
		(select choiceline.clname from choiceline where choiceline.clcode='CAPR' and choiceline.clline=callhead.chpriority) as clname_prior,
	    callhead.chcateg ,
		(select choiceline.clname from choiceline where choiceline.clcode='CACG' and choiceline.clline=callhead.chcateg) as clname_categ,
	    callhead.chcontracttyp ,
		(select choiceline.clname from choiceline where choiceline.clcode='CACT' and choiceline.clline=callhead.chcontracttyp) as clname_contract,
		minutes(callhead.chcreadat ,callhead.chpreclotdat) as spent_minutes ,
		callhead.chdesc as description
FROM callhead, adresses 
WHERE callhead.chclotdat between :date_begin and :date_end
	AND callhead.chstatus = 800 
	AND callhead.chadid = adresses.adcode


```

## Colonnes
| Colonne |
|---------|
| callhead_chid |
| callhead_chadid |
| adname_customer |
| adresses_adgrcust |
| ctname_contact |
| callhead_chcreadat |
| callhead_chpreclotdat |
| callhead_chmanagedusr |
| callhead_chhandlusr |
| callhead_chpriority |
| clname_prior |
| callhead_chcateg |
| clname_categ |
| callhead_chcontracttyp |
| clname_contract |
| spent_minutes |
| callhead_description |

