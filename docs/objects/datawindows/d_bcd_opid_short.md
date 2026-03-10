# d_bcd_opid_short

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT woopid,
		woopdesc
    FROM workoper  
   WHERE wotyp = '1' and
	wowcid = :as_wcid
   
ORDER BY 1 ASC   

```

## Colonnes
| Colonne |
|---------|
| woopid |
| woopdesc |

