# d_tictrl_week_xtrnl_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT distinct
			if workers.wkinout = 'O' then workers.wkadid else '##########'   endif as adressid ,
			if workers.wkinout = 'O' then 'Société Externe' else 'Société Interne'   endif as title ,
			if workers.wkinout = 'O' then ( select adresses.adname from adresses where adcode = workers.wkadid)
				else ( select adresses.adname from adresses where adcode = '##########') endif  as adressename,   
         workers.wkgroup,
         workers.wkname,

         (select min(workline2.wlstart)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = date(:date_start)) 					as	entry_monday ,   

         (select max(workline2.wlend)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = date(:date_start)) 					as	exit_monday ,   

         (select sum(workline2.wlwrktime) 
				from workoper , workline AS workline2 
				where workline2.wlopid = workoper.woopid AND  
						workline2.wltyp = workoper.wotyp and
						workline2.wlwcid = workoper.wowcid and 
						workers.wkcode = workline2.wlwkcode AND  
						workline2.wldat = date(:date_start) AND  
						workoper.wowrgroup = -3) 									as	lunch_monday ,  

         (select sum(workline2.wlwrktime) 
				from workoper , workline as workline2 
				where workline2.wlopid = workoper.woopid AND  
						workline2.wltyp = workoper.wotyp and
						workline2.wlwcid = workoper.wowcid and 
						workers.wkcode = workline2.wlwkcode  AND  
						workline2.wldat = date(:date_start) AND  
						workline2.wltyp <> 3 ) 										as total_monday ,

         (select first workline2.wlopid 
 				from workline as workline2 , workoper as workoper2 
				where workline2.wldat = days(date(:date_start),0) and 
						workline2.wlwkcode = workline.wlwkcode  and
						workline2.wlopid = workoper2.woopid  and
						workline2.wltyp = workoper2.wotyp  and
						workoper2.wowrgroup = -4  and
						workline2.wltyp 
```

## Colonnes
| Colonne |
|---------|
| cadressid |
| ctitle |
| cadressename |
| workers_wkgroup |
| workers_wkname |
| centry_monday |
| cexit_monday |
| clunch_monday |
| ctotal_monday |
| ccode_monday |
| centry_tuesday |
| cexit_tuesday |
| clunch_tuesday |
| ctotal_tuesday |
| ccode_tuesday |
| centry_wednesday |
| cexit_wednesday |
| clunch_wednesday |
| ctotal_wednesday |
| ccode_wednesday |
| centry_thirsday |
| cexit_thirsday |
| clunch_thirsday |
| ctotal_thirsday |
| ccode_thirsday |
| centry_friday |
| cexit_friday |
| clunch_friday |
| ctotal_friday |
| ccode_friday |
| centry_saturday |
| cexit_saturday |
| clunch_saturday |
| ctotal_saturday |
| ccode_saturday |
| centry_sunday |
| cexit_sunday |
| clunch_sunday |
| ctotal_sunday |
| ccode_sunday |

