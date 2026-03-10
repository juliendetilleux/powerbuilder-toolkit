# d_ratelines_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT rateline.rlitem,   
         items.itname,   
         IF isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' THEN 
			items.itumtarif
	    ELSE
			items.itum 
	    ENDIF as itum,    
         rateline.rlcode,   
         rateline.rlval,   
		rateline.rlvalold,   
         items.itstat1,   
         items.itstat2,   
         rateline.rlstroke,   
         ratehead.rhtyp,
		isnull(items.itdesc2, '') as itdesc2,
		items.itactiv,
		items.itmccode  ,
		items.itean
    FROM  items join rateline on rateline.rlitem = items.itcode join ratehead  on ratehead.rhcode = rateline.rlcode
   WHERE ( rateline.rlcode = :Selected_rate ) AND  
         	( items.itactiv = 'Y' )  AND 
			( ( ittyp = 'F' and itsalghost <> 'N' ) or (ittyp <> 'F') ) 
ORDER BY rateline.rlitem ASC   

```

## Colonnes
| Colonne |
|---------|
| rateline_rlitem |
| items_itname |
| items_itum |
| rateline_rlcode |
| rateline_rlval |
| rateline_rlvalold |
| items_itstat1 |
| items_itstat2 |
| rateline_rlstroke |
| ratehead_rhtyp |
| itdesc2 |
| items_itactiv |
| items_itmccode |
| items_itean |

