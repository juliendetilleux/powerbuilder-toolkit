# d_clot_fab_lab_var_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
	SELECT workcenters.wccode,
			workcenters.wcname,
			sum(mcqreal) AS mo_reel,
			0 AS ma_reel,
			sum(mcqalloc) AS mo_std,
			0 AS ma_std,
			mo_std - mo_reel AS mo_diff,
			0 AS ma_diff
		FROM mfghead,
			workcenters,
			mfgcosts
		WHERE mfgcosts.mccode = mfghead.mhcode
			AND mfgcosts.mcitem = workcenters.wccode
			AND mfgcosts.mctype IN ('L')
			AND mfghead.mhclosdat BETWEEN :Start_date AND :Stop_date
		GROUP BY workcenters.wcname,workcenters.wccode
 UNION all 
	SELECT workcenters.wccode,
			workcenters.wcname,
			0 AS mo_reel,
			sum(mcqreal) AS ma_reel,
			0 AS mo_std,
			sum(mcqalloc) AS ma_std,
			0 AS mo_diff,
			ma_std - ma_reel AS ma_diff
		FROM mfghead,
			workcenters,
			mfgcosts
		WHERE mfgcosts.mccode = mfghead.mhcode
			AND mfgcosts.mcitem = workcenters.wccode
			AND mfgcosts.mctype IN ('E')
			AND mfghead.mhclosdat BETWEEN :Start_date AND :Stop_date
		GROUP BY workcenters.wcname,workcenters.wccode
 ORDER BY 1
```

## Colonnes
| Colonne |
|---------|
| workcenters_wccode |
| workcenters_wcname |
| cmo_reel |
| mfghead_ma_reel |
| cmo_std |
| mfghead_ma_std |
| cmo_diff |
| mfghead_ma_diff |

