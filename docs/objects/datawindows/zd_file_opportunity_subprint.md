# zd_file_opportunity_subprint

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT isnull(adrsactions.aapersuccess, 0) as aapersuccess,   
         isnull(adrsactions.aaquoteval, 0) as aaquoteval,
			if date( adrsactions.aaactiondate ) < today() then
				' Antérieur'
			else
				dateformat(adrsactions.aaactiondate, 'YYYY/MM')
			endif as month
    FROM adrsactions  
   WHERE adrsactions.aaaction = -2 AND
			(adrsactions.aauserddlb = if :al_userddlb = -1 then adrsactions.aauserddlb else :al_userddlb endif OR
			1 = if :al_userddlb = -1 then 1 else 2 endif) AND
			(adrsactions.aarespons like :as_sal OR :as_sal = '%' ) 

```

## Colonnes
| Colonne |
|---------|
| aapersuccess |
| aaquoteval |

