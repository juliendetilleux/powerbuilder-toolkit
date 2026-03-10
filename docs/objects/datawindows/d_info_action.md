# d_info_action

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _agenda
- **Table principale**: 0

## SQL
```sql
SELECT	dateformat(aaactiondate, 'HH:MM') as starttime,
		dateformat(dateadd( minute, aatiming, aaactiondate), 'HH:MM' ) as endtime,
		(select usname from users where uscode = aarespons) as respons,
		(select adname from adresses where adcode = aaadrid) as adresse,
		(select isnull(ctfirstname, '' ) + ' ' + ctname from contacts where ctadcode = aaadrid and ctline = aacontactid) as contact,
		aadesc,
		aacomment
    FROM adrsactions
	WHERE aacode = :as_aacode
```

## Colonnes
| Colonne |
|---------|
| starttime |
| endtime |
| respons |
| adresse |
| contact |
| aadesc |
| aacomment |

