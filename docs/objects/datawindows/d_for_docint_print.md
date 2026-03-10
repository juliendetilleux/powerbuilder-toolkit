# d_for_docint_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
select adresses.adname as cli_nom,
		 adresses.adadr1 as cli_ad01,
		 adresses.adadr2 as cli_ad02,
		 adresses.adzip as cli_zip,
		 adresses.adloc as cli_loc,
		 adresses.adtel as cli_tel,
		 contacts.ctname as cli_contact,
		 contacts.cttel as cli_conttel,
		 contacts.ctfax as cli_contfax,
		 contacts.ctmail as cli_contmail,
		 adrsactions.aadesc as descr,
		 '' as comments,
		 adrsactions.aaactiondate as date_action,
		 adrsactions.aatiming,
		adrsactions.aacode
from adrsactions,
	   adresses,
	   contacts
where adrsactions.aaadrid = adresses.adcode and 
		 adrsactions.aaadrid = contacts.ctadcode and
		 adrsactions.aacontactid = contacts.ctline and
		 adrsactions.aacode = :an_aacode
```

## Colonnes
| Colonne |
|---------|
| cli_nom |
| cli_ad01 |
| cli_ad02 |
| cli_zip |
| cli_loc |
| cli_tel |
| cli_contact |
| cli_conttel |
| cli_contfax |
| cli_contmail |
| descr |
| comments |
| adrsactions_date_action |
| adrsactions_aatiming |
| adrsactions_aacode |

