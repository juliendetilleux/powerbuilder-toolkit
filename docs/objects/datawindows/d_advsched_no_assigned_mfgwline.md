# d_advsched_no_assigned_mfgwline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT mfgwcreqs_advsc.maid,
			mfgwcreqs_advsc.mamwcode,
			mfgwcreqs_advsc.mamwline,
			mfgwcreqs_advsc.mastart,
			mfgwcreqs_advsc.maduration,
			mfgwcreqs_advsc.macmnt,
			mfgwcreqs.mwwccode,
			workcenters.wcname,
			mfgwcreqs.mwadvscsort,
			mfgwcreqs_advsc.maschednum,
			mfgwcreqs_advsc.mamachine,
			mfgwcreqs_advsc.matype,
			dateformat( dateadd(mi, mfgwcreqs_advsc.maduration, convert(time, '00:00')), 'hh:mm' )  as duration,
			( select first clname
				from link_machine_pdc 
					join  machine ON machine.mcid = link_machine_pdc.mpmachine
					join CELLS ON CELLS.clid = machine.mccells
			 where link_machine_pdc.mpworkcenters = workcenters.wccode ) as cell_name
    FROM mfgwcreqs_advsc 
		join mfgwcreqs on mfgwcreqs_advsc.mamwcode = mfgwcreqs.mwcode AND mfgwcreqs_advsc.mamwline = mfgwcreqs.mwline
		join workcenters on workcenters.wccode =  mfgwcreqs.mwwccode
 WHERE mfgwcreqs_advsc.mamachine is null AND
		mfgwcreqs_advsc.maschednum = (select cast( pmnval as integer ) from parameters where pmcode = 'ADVSCHDT' ) AND
		mfgwcreqs_advsc.mamwcode = :al_of AND
		mfgwcreqs_advsc.mamwline = :al_line 
 ORDER BY mfgwcreqs_advsc.mamwcode, 
		mfgwcreqs_advsc.mamwline

```

## Colonnes
| Colonne |
|---------|
| mfgwcreqs_advsc_maid |
| mfgwcreqs_advsc_mamwcode |
| mfgwcreqs_advsc_mamwline |
| mfgwcreqs_advsc_mastart |
| mfgwcreqs_advsc_maduration |
| mfgwcreqs_advsc_macmnt |
| mfgwcreqs_mwwccode |
| workcenters_wcname |
| mfgwcreqs_mwadvscsort |
| mfgwcreqs_advsc_maschednum |
| mfgwcreqs_advsc_mamachine |
| mfgwcreqs_advsc_matype |
| duration |
| cell_name |

