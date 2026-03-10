# d_qry_calls_stat_cacg_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT 
	minutes(callhead.chpreclotdat) as clot_minut,
	minutes(callhead.chcreadat) as crea_minut,
	callhead.chpriority,
	callhead.chcreausr,
	callhead.chmanagedusr,
	callhead.chhandlusr,
	callhead.chadid,
	adresses.adgrcust,
	callhead.chcateg

FROM callhead, adresses
	
WHERE callhead.chpreclotdat between :date_begin and :date_end
	AND callhead.chstatus = 800 
	AND callhead.chadid = adresses.adcode

ORDER BY chcateg
```

## Colonnes
| Colonne |
|---------|
| clot_minut |
| crea_minut |
| callhead_chpriority |
| callhead_chcreausr |
| callhead_chmanagedusr |
| callhead_chhandlusr |
| callhead_chadid |
| adresses_adgrcust |
| callhead_chcateg |

