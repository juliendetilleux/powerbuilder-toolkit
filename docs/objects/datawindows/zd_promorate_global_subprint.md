# zd_promorate_global_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT distinct promohead.phname, 
		promohead.phstartdate, 
		promohead.phstopdate 
    FROM promohead 
   WHERE promohead.phrateid = :ran_code AND 
     	promohead.phactiv = 'Y'  
  ORDER BY promohead.phstartdate, promohead.phname  

```

## Colonnes
| Colonne |
|---------|
| promohead_phname |
| phstartdate |
| phstopdate |

