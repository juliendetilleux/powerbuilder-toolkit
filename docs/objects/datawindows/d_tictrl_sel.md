# d_tictrl_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT workhead.whdate,   
	    workers.wkname, 
         workhead.whwrktime ,
         workhead.whwkcode
    FROM workhead,   
         workers   
    where workhead.whwkcode = workers.wkcode AND
        workhead.whwrktime is not null AND
        workhead.whdate >= :datstart AND
        workhead.whdate <= :datend
   ORDER BY workhead.whdate
```

## Colonnes
| Colonne |
|---------|
| workhead_whdate |
| workers_wkname |
| workhead_whwrktime |
| workhead_whwkcode |

