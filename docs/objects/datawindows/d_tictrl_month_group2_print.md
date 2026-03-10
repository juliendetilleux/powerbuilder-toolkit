# d_tictrl_month_group2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT distinct
			workers.wkgroup as codegroupe, 
		   choiceline.clname as groupe, 
         workers.wkname as name,
         workers.wkcode as code,
			wldat as date_start,

         (select min(workline2.wlstart)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = workline.wldat)								as HD1 ,
         (select max(workline2.wlend)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = workline.wldat)								as HF1 ,
			0.05 	as pause1 ,

         (select first workline2.wlopid 
 				from workline as workline2 , workoper as workoper2 
				where workline2.wldat = days(workline.wldat,0) and 
						workline2.wlwkcode = workline.wlwkcode  and
						workline2.wlopid = workoper2.woopid  and
						workline2.wltyp = workoper2.wotyp  and
						workoper2.wowrgroup = -4  and
						workline2.wltyp = '3' )													as	absence1 ,


         (select min(workline2.wlstart)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = days(workline.wldat,1))						as HD2 ,
         (select max(workline2.wlend)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = days(workline.wldat,1))						as HF2 ,
			0.00 	as pause2 ,

         (select first workline2.wlopid 
 				from workline as workline2 , workoper as workoper2 
				where workline2.wldat = days(workline.wldat,1) and 
						workline2.wlwkcode = workline.wlwkcode  and
						workline2.wlopid = workoper2.woopid  and
						workline2.wltyp = workoper2.wotyp  and
						workoper2.wowrgroup = -4  and
						workline2.wltyp = '3' )													as	absence2, 


         (select min(workline2.wlstart)
				from workline as workline2
				where workline2.wlwkcode = workers.wkcode and 
						workline2.wldat = days(workline.wldat,2)) 										as HD3 ,
         (select max(workline2.wlend)

```

## Colonnes
| Colonne |
|---------|
| codegroupe |
| groupe |
| workers_name |
| workers_code |
| workline_date_start |
| hd1 |
| hf1 |
| pause1 |
| absence1 |
| hd2 |
| hf2 |
| pause2 |
| absence2 |
| hd3 |
| hf3 |
| pause3 |
| absence3 |
| hd4 |
| hf4 |
| pause4 |
| absence4 |
| hd5 |
| hf5 |
| pause5 |
| absence5 |
| hd6 |
| hf6 |
| pause6 |
| absence6 |
| hd7 |
| hf7 |
| pause7 |
| absence7 |
| hd8 |
| hf8 |
| pause8 |
| absence8 |
| hd9 |
| hf9 |
| pause9 |
| absence9 |
| hd10 |
| hf10 |
| pause10 |
| absence10 |
| hd11 |
| hf11 |
| pause11 |
| absence11 |
| hd12 |
| hf12 |
| pause12 |
| absence12 |
| hd13 |
| hf13 |
| pause13 |
| absence13 |
| hd14 |
| hf14 |
| pause14 |
| absence14 |
| hd15 |
| hf15 |
| pause15 |
| absence15 |
| hd16 |
| hf16 |
| pause16 |
| absence16 |
| hd17 |
| hf17 |
| pause17 |
| absence17 |
| hd18 |
| hf18 |
| pause18 |
| absence18 |
| hd19 |
| hf19 |
| pause19 |
| absence19 |
| hd20 |
| hf20 |
| pause20 |
| absence20 |
| hd21 |
| hf21 |
| pause21 |
| absence21 |
| hd22 |
| hf22 |
| pause22 |
| absence22 |
| hd23 |
| hf23 |
| pause23 |
| absence23 |
| hd24 |
| hf24 |
| pause24 |
| absence24 |
| hd25 |
| hf25 |
| pause25 |
| absence25 |
| hd26 |
| hf26 |
| pause26 |
| absence26 |
| hd27 |
| hf27 |
| pause27 |
| absence27 |
| hd28 |
| hf28 |
| hdp28 |
| absence28 |
| hd29 |
| hf29 |
| hdp29 |
| absence29 |
| hd30 |
| hf30 |
| hdp30 |
| absence30 |
| hd31 |
| hf31 |
| hdp31 |
| absence31 |

