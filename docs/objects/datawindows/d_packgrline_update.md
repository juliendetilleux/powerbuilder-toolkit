# d_packgrline_update

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT packgrline.plphcode,
			packgrline.plpkcode,
			packings.pkname,
			packgrline.plnum
    FROM packgrline,
			packings
	Where packgrline.plphcode = :as_phcode and
				packgrline.plpkcode = packings.pkcode

```

## Colonnes
| Colonne |
|---------|
| packgrline_plphcode |
| packgrline_plpkcode |
| packings_pkname |
| packgrline_plnum |

