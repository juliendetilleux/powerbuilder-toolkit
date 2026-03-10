# d_time_taches

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT CONVERT( time, adrsactions.aaactiondate, 108 )  ,  
		   adrsactions.aacode,
         adrsactions.aadesc,   
         adrsactions.aatiming,   
		   adrsactions.aaadrid,
		   adrsactions.aaaction,
         date ( adrsactions.aaactiondate),
		   (select adresses.adname from adresses where adresses.adcode  = adrsactions.aaadrid) as adrsName,
		   (select activities.acdesc from activities where activities.accode = adrsactions.aaaction) as actionName,
		   adrsactions.aarespons,
		   adrsactions.aastatus
    FROM adrsactions   
	WHERE date ( adrsactions.aaactiondate) = date ( :day) and 
			adrsactions.aarespons = :curr_user 
			and CONVERT( time, adrsactions.aaactiondate, 108 ) = CONVERT( time, '00:00:00', 108 )
	ORDER BY adrsName ASC 

```

## Colonnes
| Colonne |
|---------|
| aaactiondate |
| aacode |
| aadesc |
| aatiming |
| aaadrid |
| aaaction |
| compute_0007 |
| adrsname |
| actionname |
| aarespons |
| aastatus |

