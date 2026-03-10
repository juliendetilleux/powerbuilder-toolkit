# zmod_mfg_histograph2_subprint

- **Type**: DataWindow
- **Style**: Group
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT mh2.mhmfgdat,   
		mh2.mhmfgcost,   
		mh2.mhcode  
	FROM mfghead mh2  
	WHERE mh2.mhitem = :as_item
		AND mh2.mhstatus = '8'
		AND mh2.mhclosdat >= :adt_lastof
		AND mh2.mhmfgqtyqty <> 0
	ORDER BY mh2.mhcode ASC   

```

## Colonnes
| Colonne |
|---------|
| mhmfgdat |
| mhmfgcost |
| mhcode |

