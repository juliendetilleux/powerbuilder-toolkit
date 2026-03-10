# d_brf_mfg_ofmp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,
			mfglallocs.mlbomqty,
			mfglallocs.mllallocqty,
			mfglallocs.mlissuedqty
    FROM mfglallocs join items on mfglallocs.mlitem = items.itcode
	 where mlcode = :an_ofcode

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| mfglallocs_mlbomqty |
| mfglallocs_mllallocqty |
| mfglallocs_mlissuedqty |

