# d_workhead_open

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT workhead.whwkcode,   
         workhead.whdate,   
         workhead.whstdtime,   
         workhead.whwrktime,   
         workhead.whstatus,
		cast(  null as char(5)) as hourstdtime
    FROM workhead  
   WHERE workhead.whwkcode = :Selected_wk   
ORDER BY workhead.whdate ASC   

```

## Colonnes
| Colonne |
|---------|
| whwkcode |
| whdate |
| whstdtime |
| whwrktime |
| whstatus |
| hourstdtime |

