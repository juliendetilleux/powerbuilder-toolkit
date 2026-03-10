# ds_domino2

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT 'template',
			items.itname,
			items.itean,
			lots.loorgcode,
			lots.loexpdat,
			items.itcode,
			lots.locode
    FROM items, 
			lots,
			mfghead
 where 	mfghead.mhitem = items.itcode and
			lots.loitem=mfghead.mhitem and
			lots.loorder=mfghead.mhcode and 
			items.itcode = :arg_itcode and  
			mfghead.mhcode = :arg_mhcode

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| itname |
| itean |
| lots_loorgcode |
| lots_loexpdat |
| itcode |
| lots_locode |

