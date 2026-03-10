# zd_fil_act_project_graph_subprint

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
	      ( activities.accode = adrsactions.aaaction ) and 
	      (  adrsactions.aafileref = :fileref ) and
			( adrsactions.aastatus < '4' )
GROUP BY adrsactions.aaaction,
	      activities.acdesc 
order by timing desc

```

## Colonnes
| Colonne |
|---------|
| activities_acdesc |
| ctiming |

