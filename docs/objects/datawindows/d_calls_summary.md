# d_calls_summary

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT DISTINCT 
		cast((callhead.chstatus/100)as integer) as hyperstatus,   

         (select clname from choiceline where clcode = 'CAST' and clline = hyperstatus * 100) as status_name,   

         (select count(callhead.chid) from callhead where callhead.chpriority = 1 and cast((callhead.chstatus/100)as integer) = hyperstatus ) as total_prior1,   

         (select count(callhead.chid) from callhead where callhead.chpriority = 2 and cast((callhead.chstatus/100)as integer) = hyperstatus ) as total_prior2,   

         (select count(callhead.chid) from callhead where callhead.chpriority = -1 and cast((callhead.chstatus/100)as integer) = hyperstatus ) as total_prior_next, 

		0 as selection
		

   FROM callhead  

   WHERE callhead.chstatus < 800 ORDER BY 1 ASC

```

## Colonnes
| Colonne |
|---------|
| hyperstatus |
| status_name |
| total_prior1 |
| total_prior2 |
| total_prior_next |
| selection |

