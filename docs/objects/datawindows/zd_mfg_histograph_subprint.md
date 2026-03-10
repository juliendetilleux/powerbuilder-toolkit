# zd_mfg_histograph_subprint

- **Type**: DataWindow
- **Style**: Group
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT mh2.mhmfgdat,   
		(mh2.mhmreal + mh2.mhlreal + mh2.mhereal) / mh2.mhmfgqtyqty,   
		mh2.mhcode  
	FROM mfghead mh2  
	WHERE mh2.mhitem = :as_item
		AND mh2.mhstatus = '8'
		AND mh2.mhclosdat >= :adt_lastof
		AND mh2.mhmfgqty <> 0
	ORDER BY mh2.mhcode ASC   

```

## Colonnes
| Colonne |
|---------|
| mhmfgdat |
| compute_0002 |
| mhcode |

