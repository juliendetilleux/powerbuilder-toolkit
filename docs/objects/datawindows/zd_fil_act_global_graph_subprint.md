# zd_fil_act_global_graph_subprint

- **Type**: DataWindow
- **Style**: Group
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
 SELECT  activities.acdesc, 
			sum(adrsactions.aatiming ) timing
    FROM adrsactions,
		   activities
   WHERE ( adrsactions.aaactiondate between :Start_date and :End_date ) and  
         ( adrsactions.aatiming <> 0 ) and
	      ( activities.accode = adrsactions.aaaction ) 
GROUP BY adrsactions.aaaction,
	      activities.acdesc 

```

## Colonnes
| Colonne |
|---------|
| activities_acdesc |
| ctiming |

