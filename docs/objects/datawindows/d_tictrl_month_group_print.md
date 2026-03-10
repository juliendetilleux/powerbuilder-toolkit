# d_tictrl_month_group_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT distinct
			workers.wkgroup, 
		   choiceline.clname, 
         workers.wkname,

         (select sum(workline2.wlwrktime) 
				from workoper , workline as workline2 
				where workline2.wlopid = workoper.woopid AND  
						workline2.wltyp = workoper.wotyp and
						workline2.wlwcid = workoper.wowcid and 
						workers.wkcode = workline2.wlwkcode  AND  
						workline2.wldat = date(:date_start) AND  
						workline2.wltyp <> 3 ) 										as j1 ,

         (select first workline2.wlopid 
 				from workline as workline2 , workoper as workoper2 
				where workline2.wldat = days(date(:date_start),0) and 
						workline2.wlwkcode = workline.wlwkcode  and
						workline2.wlopid = workoper2.woopid  and
						workline2.wltyp = workoper2.wotyp  and
						workoper2.wowrgroup = -4  and
						workline2.wltyp = '3' )													as	jc1 ,


         (select sum(workline2.wlwrktime) 
				from workoper , workline as workline2 
				where workline2.wlopid = workoper.woopid AND  
						workline2.wltyp = workoper.wotyp and
						workline2.wlwcid = workoper.wowcid and 
						workers.wkcode = workline2.wlwkcode  AND  
						workline2.wldat = days(date(:date_start),1) AND  
						workline2.wltyp <> 3 ) 										as j2 ,

         (select first workline2.wlopid 
 				from workline as workline2 , workoper as workoper2 
				where workline2.wldat = days(date(:date_start),1) and 
						workline2.wlwkcode = workline.wlwkcode  and
						workline2.wlopid = workoper2.woopid  and
						workline2.wltyp = workoper2.wotyp  and
						workoper2.wowrgroup = -4  and
						workline2.wltyp = '3' )													as	jc2, 


         (select sum(workline2.wlwrktime) 
				from workoper , workline as workline2 
				where workline2.wlopid = workoper.woopid AND  
						workline2.wltyp = workoper.wotyp and
						workline2.wlwcid = workoper.wowcid and 
						workers.wkcode = workline2.wlwkcode  AND  
						workline2.wldat = days(date(:date_start),2) AND  
					
```

## Colonnes
| Colonne |
|---------|
| workers_wkgroup |
| choiceline_clname |
| workers_wkname |
| cj1 |
| cjc1 |
| cj2 |
| cjc2 |
| cj3 |
| cjc3 |
| cj4 |
| cjc4 |
| cj5 |
| cjc5 |
| cj6 |
| cjc6 |
| cj7 |
| cjc7 |
| cj8 |
| cjc8 |
| cj9 |
| cjc9 |
| cj10 |
| cjc10 |
| cj11 |
| cjc11 |
| cj12 |
| cjc12 |
| cj13 |
| cjc13 |
| cj14 |
| cjc14 |
| cj15 |
| cjc15 |
| cj16 |
| cjc16 |
| cj17 |
| cjc17 |
| cj18 |
| cjc18 |
| cj19 |
| cjc19 |
| cj20 |
| cjc20 |
| cj21 |
| cjc21 |
| cj22 |
| cjc22 |
| cj23 |
| cjc23 |
| cj24 |
| cjc24 |
| cj25 |
| cjc25 |
| cj26 |
| cjc26 |
| cj27 |
| cjc27 |
| cj28 |
| cjc28 |
| cj29 |
| cjc29 |
| cj30 |
| cjc30 |
| cj31 |
| cjc31 |

