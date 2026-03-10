# d_for_inttech_print

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
		 contacts.ctfirstname as cli_ctctprenom,
		 ( Select choices.chname 
			From choices
			Where choices.chtype = 'CIV1' And
					choices.chcode = contacts.ctciv1 ) as cli_ctctciv,
		 adrsactions.aadesc as descr,
		 '' as comments, 
		 users.usname as userlogin,
		 adrsactions.aaactiondate,
		 users.uscode
from adrsactions,
	   adresses,
	   contacts,
	   users
where adrsactions.aaadrid = adresses.adcode and 
		 adrsactions.aaadrid = contacts.ctadcode and
		 adrsactions.aacontactid = contacts.ctline and
		 adrsactions.aarespons = users.uscode and
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
| contacts_cli_ctctprenom |
| cli_ctctciv |
| descr |
| comments |
| userlogin |
| adrsactions_aaactiondate |
| users_uscode |

