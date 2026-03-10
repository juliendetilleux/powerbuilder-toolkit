# d_claims_chgmtgrp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
 SELECT items.itname as art_nom,
			items.itcode as art_code,
			(select lkitcl.liccheck from lkitcl where lkitcl.licitcode = art_code and lkitcl.licclid = 5 ),
			(select lkitcl.liccheck from lkitcl where lkitcl.licitcode = art_code and lkitcl.licclid = 7 )
	from items
	where itcode not like '####%' and itactiv = 'Y'
	order by items.itcode;

```

## Colonnes
| Colonne |
|---------|
| art_nom |
| art_code |
| liccheck |
| liccheck |

