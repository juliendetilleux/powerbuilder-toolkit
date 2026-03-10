# d_tictrl_copy_to

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT :datecopy,   
         workers.wkname,   
         (select workhead.whwrktime 
			from workhead 
			where  workhead.whwkcode = workers.wkcode  and  
		          workhead.whdate = :datecopy   ) as whwrktime,   
         workers.wkcode  
    FROM workers
	WHERE	workers.wkactiv='Y'
ORDER BY workers.wkname ASC   

```

## Colonnes
| Colonne |
|---------|
| datecopy |
| workers_wkname |
| workhead_whwrktime |
| wkcode |

