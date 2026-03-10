# d_qry_calls_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
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
		callhead.chcateg , 
		callhead.chdesc ,
		(select adresses.adname from adresses where adresses.adcode=callhead.chadid) as adname_customer,
		(select contacts.ctname from contacts where contacts.ctadcode=callhead.chadid and contacts.ctline=callhead.chctid) as ctname_contact,
		(select choiceline.clname from choiceline where choiceline.clcode='CAST' and choiceline.clline=callhead.chstatus) as clname_status,
		(select choiceline.clname from choiceline where choiceline.clcode='CAPR' and choiceline.clline=callhead.chpriority) as clname_priority, 
		(select choiceline.clname from choiceline where choiceline.clcode='CACG' and choiceline.clline=callhead.chcateg) as clname_categ, 

		adresses.adgrcust,
		callhead.chpreclotdat,
		callhead.chclotdat ,
		callhead.chpreclotusr,
		callhead.chclotusr,
         
		callhead.chitem,
		callhead.chlot,
		isnull((select itname from items where itcode = callhead.chitem), '') as itname,
		isnull((select loorgcode from lots where locode = callhead.chlot), '') as loorgcode, 
		isnull((select progparam.ppvalue from progparam where progparam.ppcode = 'CALLITEML' ), '') as CALLITEML,
		callhead.chcontracttyp,
		isnull(callhead.chadcmnt, '') as chadcmnt,
		isnull(callhead.chcmnt, '') as chcmnt

	
   	FROM callhead, adresses

WHERE callhead.chcreadat /*os224 chpreclotdat*/ between :date_begin and :date_end
	/*os2224 AND callhead.chstatus = 800 */
	AND callhead.chadid = adresses.adcode 
```

## Colonnes
| Colonne |
|---------|
| chid |
| chadid |
| chctid |
| chstatus |
| callhead_chfixend |
| chfixenddat |
| chcreadat |
| callhead_chcreausr |
| chmanagedusr |
| chhandlusr |
| callhead_chpriority |
| callhead_chcateg |
| callhead_chdesc |
| adname_customer |
| ctname_contact |
| clname_status |
| clname_priority |
| clname_categ |
| adresses_adgrcust |
| callhead_chpreclotdat |
| callhead_chclotdat |
| callhead_chpreclotusr |
| callhead_chclotusr |
| callhead_chitem |
| callhead_chlot |
| itname |
| loorgcode |
| calliteml |
| callhead_chcontracttyp |
| chadcmnt |
| chcmnt |

