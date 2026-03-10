# d_fileworkcenters

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
	select workcenters.wccode,
			upper(workcenters.wcname) as wcname,
			sum(ifnull(mfgwcreqs.mwreqlab,0,mfgwcreqs.mwreqlab)) as reqvalue,
			sum(ifnull(mfgwcreqs.mwrealab,0,mfgwcreqs.mwrealab)) as reavalue,
			mfghead.mhfileline
		from workcenters,
			mfghead,
			mfgwcreqs
		where mfghead.mhfileref = :an_fileref
			and mfghead.mhstatus < '9'
			and mfghead.mhsubc <> 'Y'
			and mfgwcreqs.mwcode = mfghead.mhcode
			and mfgwcreqs.mwwccode = workcenters.wccode
		group by workcenters.wccode,
			workcenters.wcname,
			mfghead.mhfileline

 union all

	select workcenters.wccode,
			upper(workcenters.wcname),
			sum(ifnull(adrsactions.aatiming,0,adrsactions.aatiming)) / 60,
			(sum(ifnull(adrsactions.aarealtiming,0,adrsactions.aarealtiming)) + sum(ifnull(adrsactions.aaextratiming,0,adrsactions.aaextratiming))) / 60,
			adrsactions.aafileline
		from workcenters,
			activities,
			adrsactions
		where adrsactions.aafileref = :an_fileref
			and adrsactions.aaaction = activities.accode
			and activities.acworkcenter = workcenters.wccode
		group by workcenters.wccode,
			workcenters.wcname,
			adrsactions.aafileline

 union all

	select workcenters.wccode,
			'POINTAGE SUR PROJET',
			0,
			sum(ifnull(workline.wlwrktime,0,workline.wlwrktime)),
			workline.wlfileline
		from workcenters,
			workline
		where workline.wlmfgid = :an_fileref
			and workline.wltyp = '4'
			and workline.wlwcid = workcenters.wccode
			and workline.wlstatus > 1
		group by workcenters.wccode,
			workcenters.wcname,
			workline.wlfileline

 union all

	select workcenters.wccode,
			upper(workcenters.wcname),
			sum(ifnull(mfgcosts.mcqalloc,0,mfgcosts.mcqalloc)),
			sum(ifnull(mfgcosts.mcqreal,0,mfgcosts.mcqreal)),
			mfghead.mhfileline
		from mfghead,
			mfgcosts,
			workcenters
		where mfghead.mhfileref = :an_fileref
			and mfghead.mhstatus < '9'
			and mfghead.mhsubc <> 'Y'
			and mfghead.mhcode = mfgcosts.mccode
			and mfgcosts.mctype = 'L'
	
```

## Colonnes
| Colonne |
|---------|
| wccode |
| cwcname |
| creqvalue |
| creavalue |
| mfghead_mhfileline |

