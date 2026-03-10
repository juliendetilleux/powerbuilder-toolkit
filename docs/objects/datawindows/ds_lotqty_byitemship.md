# ds_lotqty_byitemship

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,
		lots.loexpdat,
		lots.loorgcode,
		sum(shipline.slqty) as sumqty,
		cast(0 as numeric( 12, 3 ) ) as qtyuse
    FROM lots, 
		shipline
  WHERE shipline.sllot = lots.locode AND
	shipline.slcode = :al_shiphead AND
	shipline.slitem = :as_item 
GROUP BY lots.locode,
	lots.loexpdat,
	lots.loorgcode 
```

## Colonnes
| Colonne |
|---------|
| locode |
| loexpdat |
| loorgcode |
| sumqty |
| qtyuse |

