# d_crm_activities_show

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT activities.acdesc,   
         activities.accmnt,   
         activities.accode,
	    activities.acdesc as sort  ,
			'' as item,
			0  as qty,
			0  as timing,
			0  as link
    FROM activities  
   WHERE activities.acactiv = 'Y'    AND
		( isnull(activities.acrh,0) >= 0 )    
 
UNION ALL
  
  SELECT linkactivities.ladesc,   
         activities.accmnt,   
         activities.accode,  
    		activities.acdesc + linkactivities.ladesc as sort,
			linkactivities.laitem,
			linkactivities.laquoteval,
			linkactivities.latiming,
			linkactivities.lacode  
    FROM linkactivities, 
			activities  
   WHERE activities.acactiv = 'Y' AND
			activities.accode = linkactivities.laaacode AND
			isnull((SELECT pfobjet.poavailable
						FROM pfobjet
					  WHERE pfobjet.poid = 136 ),'') = 'Y'   AND
		( isnull(activities.acrh,0) >= 0 )    
    
ORDER BY 4 ASC      



```

## Colonnes
| Colonne |
|---------|
| acdesc |
| accmnt |
| accode |
| sort |
| item |
| qty |
| timing |
| link |

