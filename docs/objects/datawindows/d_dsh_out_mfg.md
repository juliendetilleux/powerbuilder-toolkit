# d_dsh_out_mfg

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _dashboard
- **Table principale**: 0

## SQL
```sql
select 
    mhcode,
    mhreqqty,
    mhrelqty,
    mhmfgqty,
    mhreqqty - mhmfgqty,
    mhclosdat,
	mlpallocqty as allocqty,
	(select min (itstock - mllallocqty) from mfglallocs, items where mlitem=itcode and mlcode= mfghead.mhcode ) as qtystock,
	mhstatus
from mfghead JOIN mfglallocs ON mfglallocs.mlcode = mfghead.mhcode
where mfglallocs.mlitem = :as_itcode





```

## Colonnes
| Colonne |
|---------|
| mhcode |
| mhreqqty |
| mhrelqty |
| mhmfgqty |
| compute_0005 |
| mhclosdat |
| allocqty |
| qtystock |
| mfghead_mhstatus |

