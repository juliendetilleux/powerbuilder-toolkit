# zd_fil_act_worker_list_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
 SELECT  sum(adrsactions.aatiming) timing ,  
         adrsactions.aaaction,
	      activities.acdesc
    FROM adrsactions,
		   activities
   WHERE ( adrsactions.aaactiondate between :Start_date and :End_date ) and  
         ( adrsactions.aatiming <> 0 ) and
	      ( activities.accode = adrsactions.aaaction ) and 
	      ( adrsactions.aarespons like :worker )  and
			( adrsactions.aastatus = '3' )
group by adrsactions.aaaction, activities.acdesc 
order by timing desc 

```

## Colonnes
| Colonne |
|---------|
| ctiming |
| adrsactions_aaaction |
| activities_acdesc |

