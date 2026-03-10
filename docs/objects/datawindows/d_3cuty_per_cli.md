# d_3cuty_per_cli

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
SELECT 
	CLNAME,
	LAC_ISORNOT,
	CHNAME,
	lac_id
FROM
	linkadch,
	choiceline,
	choicehead
WHERE
	lac_chcode = clcode AND
	lac_clline = clline AND
	clactiv = 'Y' AND
	clcode = 'CUTY'  AND
	clcode = chcode AND
	lac_adcode = :as_adcode
	
ORDER BY
	CHNAME, CLSORT
```

## Colonnes
| Colonne |
|---------|
| choiceline_clname |
| linkadch_lac_isornot |
| choicehead_chname |
| linkadch_lac_id |

