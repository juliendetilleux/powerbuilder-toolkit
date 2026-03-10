# d_calls_wtcmnt_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
         callhead.chmanagedusr,    
         callhead.chhandlusr,   
         callhead.chpriority,
		(select adresses.adname from adresses where adresses.adcode=callhead.chadid) as adname_customer,
		(select contacts.ctname from contacts where contacts.ctadcode=callhead.chadid and contacts.ctline=callhead.chctid) as ctname_contact,
		(select choiceline.clname from choiceline where choiceline.clcode='CAST' and choiceline.clline=callhead.chstatus) as clname_status,
		(select choiceline.clname from choiceline where choiceline.clcode='CAPR' and choiceline.clline=callhead.chpriority) as clname_priority ,
		(select choiceline.clname from choiceline where choiceline.clcode='CACG' and choiceline.clline=callhead.chcateg) as clname_category ,
		callhead.chdesc ,
		callhead.chadcmnt,
		callhead.chcmnt
	
   FROM callhead 
where  callhead.chid in ( :al_tickets )
```

## Colonnes
| Colonne |
|---------|
| chid |
| chadid |
| chctid |
| chstatus |
| chfixend |
| chfixenddat |
| chcreadat |
| chmanagedusr |
| chhandlusr |
| chpriority |
| adname_customer |
| ctname_contact |
| clname_status |
| clname_priority |
| clname_category |
| chdesc |
| chadcmnt |
| chcmnt |

