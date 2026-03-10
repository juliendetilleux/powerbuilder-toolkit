# ds_time_split

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
/* toutes sauf les groupées multiples */
 SELECT adrsactions.aaactiondate  ,  
	     adrsactions.aacode,   
		  adrsactions.aadesc,   
        adrsactions.aatiming,   
		  adrsactions.aaadrid,
		  adrsactions.aaaction,
		  adresses.adname  as adrsName,
		  activities.acdesc  as actionName,
		  adrsactions.aarespons,
		  adrsactions.aastatus, 
        adresses.adzip  as adZip, 
        adresses.adloc as adLoc,
		  isnull(adrsactions.aagroup, 0 ) as aagroup ,
		  isnull(adrsactions.aagrouptyp,'') as aagrouptyp

   
        FROM adrsactions , adresses , activities
  
        WHERE adrsactions.aaactiondate between  :startdate and :stopdate and 
		  adrsactions.aarespons = :curr_user and 
		  CONVERT( time, adrsactions.aaactiondate, 108 ) <> CONVERT( time, '00:00:00', 108 ) and 
		  adresses.adcode  = adrsactions.aaadrid and 
		  activities.accode = adrsactions.aaaction and 
		  adrsactions.aaaction NOT IN (-6, -7) AND  
        ( isnull(adrsactions.aagrouptyp,'') <> 'M' OR isnull(adrsactions.aagroup,0) = 0 )   AND
		(activities.acagenda = 'Y')  AND
		( isnull(activities.acrh,0) >= 0 )       
  
UNION ALL  
/* les groupées multiples */ 
 SELECT max(adrsactions.aaactiondate),  
	     max(adrsactions.aacode),   
		  max(adrsactions.aadesc),   
        max(adrsactions.aatiming),   
		  max(''),
		  max(adrsactions.aaaction),
		  if max(adresses.adname) = min(adresses.adname) then max(adresses.adname) else '+++' endif as adrsName,
		  max(activities.acdesc) as actionName,
		  max(adrsactions.aarespons),
		  max(adrsactions.aastatus), 
        max('') as adZip, 
        max('') as adLoc,
		  max(isnull(adrsactions.aagroup, 0)) as aagroup , 
		  'M'
   FROM adrsactions , adresses , activities
  WHERE adrsactions.aaactiondate between  :startdate and :stopdate and 
		  adrsactions.aarespons = :curr_user and 
		  CONVERT( time, adrsactions.aaactiondate, 108 ) <> CONVERT( time, '00:00:00', 108 ) and 
		  adresses.adcode  = adrsactio
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
| adrsname |
| actionname |
| aarespons |
| aastatus |
| adresses_adzip |
| adresses_adloc |
| caagroup |
| caagrouptyp |

