# d_call_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  	SELECT callhead.chid,   
         callhead.chadid,   
         callhead.chctid,   
         callhead.chdesc,   
         callhead.chadcmnt,   
         callhead.chcmnt,   
         callhead.chorigin,   
         callhead.chstatus,   
         callhead.chfixend,   
         callhead.chfixenddat,    
         callhead.chcontracttyp,   
         callhead.chwebvisible,   
         callhead.chpriority,   
         callhead.chfilehead,   
         callhead.chfileline,   
         callhead.chcreadat,   
         callhead.chcreausr,   
         callhead.chmanageddat,   
         callhead.chmanagedusr,   
         callhead.chhandldat,   
         callhead.chhandlusr,   
         callhead.chpreclotdat,   
         callhead.chclotdat,
         callhead.chcateg,
		callhead.chpreclotusr,
		callhead.chclotusr, 
		callhead.chmccode,
		(select adresses.adtel from adresses where adresses.adcode = callhead.chadid) as soc_tel1,
		(select adresses.adtel2 from adresses where adresses.adcode = callhead.chadid) as soc_tel2,
		(select adresses.admail from adresses where adresses.adcode = callhead.chadid) as soc_mail,
		(select adresses.adfax from adresses where adresses.adcode = callhead.chadid) as soc_fax,
		(select contacts.cttel from contacts where contacts.ctline = callhead.chctid and contacts.ctadcode = callhead.chadid) as cont_tel,
		(select contacts.ctgsm from contacts where contacts.ctline = callhead.chctid and  contacts.ctadcode = callhead.chadid) as cont_gsm,
		(select contacts.ctmail from contacts where contacts.ctline = callhead.chctid and  contacts.ctadcode = callhead.chadid) as cont_mail,
		(select contacts.ctfax from contacts where contacts.ctline = callhead.chctid and  contacts.ctadcode = callhead.chadid) as cont_fax,
		callhead.chitem,
		callhead.chlot,
		callhead.chqt,
		isnull((select itname from items where itcode = callhead.chitem), '') as itname,
		isnull((select loorgcode from lots where locode = callhead.chlot), '') as loorg
```

## Colonnes
| Colonne |
|---------|
| chid |
| chadid |
| chctid |
| chdesc |
| chadcmnt |
| chcmnt |
| chorigin |
| chstatus |
| chfixend |
| chfixenddat |
| chcontracttyp |
| chwebvisible |
| chpriority |
| chfilehead |
| chfileline |
| chcreadat |
| chcreausr |
| chmanageddat |
| chmanagedusr |
| chhandldat |
| chhandlusr |
| chpreclotdat |
| chclotdat |
| chcateg |
| chpreclotusr |
| chclotusr |
| chmccode |
| soc_tel1 |
| soc_tel2 |
| soc_mail |
| soc_fax |
| cont_tel |
| cont_gsm |
| cont_mail |
| cont_fax |
| chitem |
| chlot |
| chqt |
| itname |
| loorgcode |
| chne |
| chline |
| chreturn |
| chrecepdat |
| chreturnprice |
| chihmcdoseq |

