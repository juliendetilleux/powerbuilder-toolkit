# d_qry_calls_open

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  	SELECT 
         callhead.chid,   
         callhead.chadid,   
         callhead.chctid,   
         callhead.chstatus,   
         callhead.chfixend,   
         callhead.chfixenddat,   
         callhead.chcreadat,
		callhead.chcreausr,   
         callhead.chmanagedusr,   
         callhead.chhandlusr,   
         callhead.chpriority,
		callhead.chfilehead,
		callhead.chfileline,
		callhead.chcateg ,
		callhead.chdesc, 
		callhead.chcontracttyp,
		(select adresses.adname from adresses where adresses.adcode=callhead.chadid) as adname_customer,
		(select contacts.ctname from contacts where contacts.ctadcode=callhead.chadid and contacts.ctline=callhead.chctid) as ctname_contact,
		(select choiceline.clname from choiceline where choiceline.clcode='CAST' and choiceline.clline=callhead.chstatus) as clname_status,
		(select choiceline.clname from choiceline where choiceline.clcode='CAPR' and choiceline.clline=callhead.chpriority) as clname_priority,
		(select choiceline.clname from choiceline where choiceline.clcode='CACG' and choiceline.clline=callhead.chcateg) as clname_categ,
		(select choiceline.clname from choiceline where choiceline.clcode='CACT' and choiceline.clline=callhead.chcontracttyp) as clname_contract,
		adresses.adgrcust,
		callhead.chitem,
		callhead.chlot,
		isnull((select itname from items where itcode = callhead.chitem), '') as itname,
		isnull((select loorgcode from lots where locode = callhead.chlot), '') as loorgcode  
	
   	FROM callhead, adresses

	WHERE chstatus < 800
	AND callhead.chadid = adresses.adcode 
```

## Colonnes
| Colonne |
|---------|
| callhead_chid |
| callhead_chadid |
| callhead_chctid |
| callhead_chstatus |
| callhead_chfixend |
| callhead_chfixenddat |
| callhead_chcreadat |
| callhead_chcreausr |
| callhead_chmanagedusr |
| callhead_chhandlusr |
| callhead_chpriority |
| callhead_chfilehead |
| callhead_chfileline |
| callhead_chcateg |
| callhead_chdesc |
| callhead_chcontracttyp |
| adname_customer |
| ctname_contact |
| clname_status |
| clname_priority |
| clname_categ |
| clname_contract |
| adresses_adgrcust |
| callhead_chitem |
| callhead_chlot |
| itname |
| loorgcode |

