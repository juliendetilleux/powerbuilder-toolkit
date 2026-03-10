# d_fileworkers

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
SELECT 'U' as status,
      Workers.wkcode,
		Workers.wkname,
		sum(wlwrktime) as tottime,
		(tottime * Workers.wkcost) as totcost,
		Workline.wlfileline,
		Workers.wkcost
	FROM Workline,
		Workers,
		workhead
	WHERE Workline.wlwkcode = Workers.wkcode
		AND workhead.whwkcode = workline.wlwkcode 
		AND workhead.whdate = workline.wldat 
		AND Workline.wltyp = '4'
		AND Workhead.whstatus < '2'
		AND Wlmfgid = :an_file
	GROUP BY wkcode,wkname,wkcost,wlfileline 
UNION ALL 
SELECT 'A',
      Workers.wkcode,
		Workers.wkname,
		sum(wlwrktime) as tottime,
		(tottime * Workers.wkcost) as totcost,
		Workline.wlfileline,
		Workers.wkcost
	FROM Workline,
		Workers,
		workhead
	WHERE Workline.wlwkcode = Workers.wkcode
		AND workhead.whwkcode = workline.wlwkcode 
		AND workhead.whdate = workline.wldat 
		AND Workline.wltyp = '4'
		AND Workhead.whstatus > '1'
		AND Wlmfgid = :an_file
	GROUP BY wkcode,wkname,wkcost,wlfileline
	ORDER BY 2, 1
```

## Colonnes
| Colonne |
|---------|
| cstatus |
| workers_wkcode |
| workers_wkname |
| ctottime |
| ctotcost |
| workline_wlfileline |
| workers_wkcost |

