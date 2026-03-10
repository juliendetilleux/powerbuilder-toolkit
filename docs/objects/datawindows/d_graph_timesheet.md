# d_graph_timesheet

- **Type**: DataWindow
- **Style**: Group
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,  
		sum(adrsactions.aatiming) as aatiming
    FROM activities,   
         adrsactions,
		choiceline  
   WHERE ( adrsactions.aaaction = activities.accode ) AND
		choiceline.clline = activities.acrh AND
		choiceline.clcode = 'ACRH'  AND
		isnull(activities.acrh,0) >= 0  AND
		adrsactions.aaactiondate between :adt_start and :adt_stop  
GROUP BY choiceline.clname;   

```

## Colonnes
| Colonne |
|---------|
| choiceline_clname |
| aatiming |

