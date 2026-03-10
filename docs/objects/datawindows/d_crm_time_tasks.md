# d_crm_time_tasks

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
 SELECT adrsactions.aacode,
         adrsactions.aadesc,   
         adrsactions.aaadrid,
		   adrsactions.aaaction,
         (select adresses.adname from adresses where adresses.adcode  = adrsactions.aaadrid) as adrsName,
		   (select activities.acdesc from activities where activities.accode = adrsactions.aaaction) as actionName,
		   adrsactions.aarespons,
		   adrsactions.aastatus,
         adrsactions.aaactiondate,
		adrsactions.aalimitdate
    FROM adrsactions, activities    
	WHERE adrsactions.aarespons = :curr_user 
		AND 
		(	(date ( adrsactions.aaactiondate) <= date (:day) AND 
			CONVERT( time, adrsactions.aaactiondate, 108 ) = CONVERT( time, '00:00:00', 108 ) AND  
		    adrsactions.aastatus < '3' ) OR 

		(	(date ( adrsactions.aalimitdate) <= date ( :day) AND 
		    adrsactions.aastatus < '3') ) OR 

		(	(date ( adrsactions.aaactiondate) < date (:day) AND 
		    adrsactions.aastatus < '3') ) ) AND
      ( isnull(adrsactions.aagrouptyp,'') <> 'M' OR isnull(adrsactions.aagroup,0) = 0 )  AND
		( adrsactions.aaaction = activities.accode ) AND 
		( activities.acrh >= 0 )     
   
UNION ALL 
   
  SELECT max(adrsactions.aacode),
         max(adrsactions.aadesc),   
         max(adrsactions.aaadrid),
		   max(adrsactions.aaaction),
         list(adrsactions.aaadrid) as adrsName,
		   max((select activities.acdesc from activities where activities.accode = adrsactions.aaaction)) as actionName,
		   max(adrsactions.aarespons),
		   max(adrsactions.aastatus),
         max(adrsactions.aaactiondate),
			max(adrsactions.aalimitdate)
    FROM adrsactions, activities   
	WHERE adrsactions.aarespons = :curr_user 
		AND 
		(	(date ( adrsactions.aaactiondate) <= date (:day) AND 
			CONVERT( time, adrsactions.aaactiondate, 108 ) = CONVERT( time, '00:00:00', 108 ) AND  
		    adrsactions.aastatus < '3' ) OR 

		(	(date ( adrsactions.aalimitdate) <= date ( :day) AND 
		    adrsactions.aastatus < '3') ) OR 

		(	(date ( adrsactio
```

## Colonnes
| Colonne |
|---------|
| aacode |
| aadesc |
| aaadrid |
| aaaction |
| adrsname |
| actionname |
| aarespons |
| aastatus |
| aaactiondate |
| aalimitdate |

