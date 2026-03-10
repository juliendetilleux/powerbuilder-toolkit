# zd_call_cmnt_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  	SELECT callhead.chid,   
         callhead.chadid,   
         (select contacts.ctname from contacts where contacts.ctline = callhead.chctid and contacts.ctadcode = callhead.chadid),
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
         (select fileline.fldesc from fileline where fileline.flline = callhead.chfileline and fileline.flcode = callhead.chfilehead), 
         callhead.chcreadat,   
         callhead.chcreausr,   
         callhead.chmanageddat,   
         callhead.chmanagedusr,   
         callhead.chhandldat,   
         callhead.chhandlusr,   
         callhead.chpreclotdat,   
         callhead.chclotdat,
		(select adresses.adname from adresses where adresses.adcode = callhead.chadid) as soc_name,
		(select isnull(adresses.adadr1, '') from adresses where adresses.adcode = callhead.chadid) as soc_ad1,
		(select isnull(adresses.adzip, '') from adresses where adresses.adcode = callhead.chadid) as soc_zip,
		(select isnull(adresses.adloc, '') from adresses where adresses.adcode = callhead.chadid) as soc_loc,
		(select adresses.adtel from adresses where adresses.adcode = callhead.chadid) as soc_tel1,
		(select adresses.adtel2 from adresses where adresses.adcode = callhead.chadid) as soc_tel2,
		(select adresses.admail from adresses where adresses.adcode = callhead.chadid) as soc_mail,
		(select adresses.adfax from adresses where adresses.adcode = callhead.chadid) as soc_fax,
		(select contacts.cttel from contacts where contacts.ctline = callhead.chctid and contacts.ctadcode = callhead.chadid) as cont_tel,
		(select contacts.ctgsm from contacts where contacts.ctline = callhead.chctid and  contacts.ctadcode = callhead.ch
```

## Colonnes
| Colonne |
|---------|
| callhead_chid |
| chadid |
| ctname |
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
| fldesc |
| callhead_chcreadat |
| chcreausr |
| chmanageddat |
| chmanagedusr |
| chhandldat |
| chhandlusr |
| chpreclotdat |
| chclotdat |
| soc_name |
| soc_ad1 |
| soc_zip |
| soc_loc |
| soc_tel1 |
| soc_tel2 |
| soc_mail |
| soc_fax |
| cont_tel |
| cont_gsm |
| cont_mail |
| cont_fax |
| category |
| projects |

