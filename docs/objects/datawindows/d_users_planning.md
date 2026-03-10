# d_users_planning

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
SELECT users.uscode,
		users.usname,
	  (SELECT List( dateformat( cast(adrsactions.aaactiondate as time) , 'hh:mm' ) + ' ' + adresses.adname + char(13) + ' ' + adrsactions.aadesc + ' (' + string( floor( adrsactions.aatiming / 60 ) ) + 'h' + right( '0' + string( mod( adrsactions.aatiming, 60 )), 2)+ ')' , char(13) order by  adrsactions.aaactiondate) 
		 FROM adrsactions  , adresses, activities
		WHERE ( date(adrsactions.aaactiondate) = date(:adt_startdate) ) and
				( adrsactions.aarespons = users.uscode ) AND  
				( adrsactions.aaactiondate <> datetime(date(adrsactions.aaactiondate)) )   and
				( adresses.adcode = adrsactions.aaadrid ) and
				adrsactions.aaaction NOT IN (-6, -7) AND  
			(activities.accode = adrsactions.aaaction) AND
			(activities.acagenda = 'Y')  AND
			(activities.acrh >= 0)  ) as day1,
	  (SELECT List( dateformat( cast(adrsactions.aaactiondate as time) , 'hh:mm' ) + ' ' + adresses.adname + char(13) + ' ' + adrsactions.aadesc + ' (' + string( floor( adrsactions.aatiming / 60 ) ) + 'h' + right( '0' + string( mod( adrsactions.aatiming, 60 )), 2)+ ')' , char(13) order by  adrsactions.aaactiondate) 
		 FROM adrsactions  , adresses, activities
		WHERE ( date(adrsactions.aaactiondate) = date(:adt_startdate) +1 ) and
				( adrsactions.aarespons = users.uscode ) AND  
				( adrsactions.aaactiondate <> datetime(date(adrsactions.aaactiondate)) )   and
				( adresses.adcode = adrsactions.aaadrid ) and
				adrsactions.aaaction NOT IN (-6, -7) AND  
			(activities.accode = adrsactions.aaaction) AND
			(activities.acagenda = 'Y')  AND
			(activities.acrh >= 0)  ) as day2,
	  (SELECT List( dateformat( cast(adrsactions.aaactiondate as time) , 'hh:mm' ) + ' ' + adresses.adname + char(13) + ' ' + adrsactions.aadesc + ' (' + string( floor( adrsactions.aatiming / 60 ) ) + 'h' + right( '0' + string( mod( adrsactions.aatiming, 60 )), 2)+ ')' , char(13) order by  adrsactions.aaactiondate) 
		 FROM adrsactions  , adresses, activities
		WHERE (
```

## Colonnes
| Colonne |
|---------|
| uscode |
| usname |
| day1 |
| day2 |
| day3 |
| day4 |
| day5 |

