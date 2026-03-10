# d_purcost_price

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itleadtime,   
         items.itactiv,   
         items.ittyp,   
         items.itsale,
			items.itstat1,
			items.itstat2,
			items.itdesc2,
			items.itcat,

			IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' THEN 
				items.itumtarif	
			ELSE	
				items.itum 	 
			ENDIF as itum,   /*os1436*/

			items.itlot,
			isnull((select first lkadcode
						 from linkitad
					 where lktyp = 'P' and
							lkitem = items.itcode and
							lkactiv = 'Y' and
							lkmain = 'Y' ), '') as lkadcode,
			isnull((select adname from adresses where adcode = lkadcode),'') as adname,
			itupdpurcost,
			itdateupdpurcost,
			isnull((select first lkadref
						 from linkitad
					 where lktyp = 'P' and
							lkitem = items.itcode and
							lkactiv = 'Y' and
							lkmain = 'Y' ), '') as lkadref,
			(if isnull ( (select max (qoprice) from quotes where qocode = (select first lkcode from linkitad where lktyp = 'P' and lkitem = items.itcode and lkactiv = 'Y' and lkmain = 'Y' order by 1 )), '' ) <> '' then
				(select max (qoprice) from quotes where qocode = (select first lkcode from linkitad where lktyp = 'P' and lkitem = items.itcode and lkactiv = 'Y' and lkmain = 'Y' order by 1))
			else
				if isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' then //EC0251
					itumtbascost
				else		
					items.itbascost /*HA2435*/
				endif //EC0256
			endif) as coutactuel
    FROM items  
   WHERE (items.ittyp IN ( 'P', 'C', 'D')) AND 
		items.itcode not in ('###########M','###########P','###########R','###########S')
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itleadtime |
| itactiv |
| ittyp |
| itsale |
| itstat1 |
| itstat2 |
| itdesc2 |
| itcat |
| itum |
| itlot |
| lkadcode |
| adname |
| itupdpurcost |
| itdateupdpurcost |
| lkadref |
| coutactuel |

