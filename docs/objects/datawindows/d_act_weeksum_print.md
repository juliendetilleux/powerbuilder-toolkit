# d_act_weeksum_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT users.usname,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date) ) as monday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date)+1 ) as tuesday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date)+2 ) as wednesday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date)+3 ) as thursday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date)+4 ) as friday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date)+5 ) as saturday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) = date(:adat_date)+6 ) as sunday,
			(SELECT isnull(sum(isnull(adrsactions.aarealtiming,0)),0) / 60
				FROM adrsactions
				WHERE adrsactions.aarespons = users.uscode AND
					date(adrsactions.aaactiondate) >= date(:adat_date) AND
					date(adrsactions.aaactiondate) <= date(:adat_date)+6 ) as totweek
    FROM users  
	WHERE users.usactiv = 'Y' and uscode not in ( 'PMIGEST', 'PRIME', '########' )
ORDER BY users.usname

```

## Colonnes
| Colonne |
|---------|
| usname |
| monday |
| tuesday |
| wednesday |
| thursday |
| friday |
| saturday |
| sunday |
| totweek |

