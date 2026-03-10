# d_advsched_no_assigned

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
			 where link_machine_pdc.mpworkcenters = workcenters.wccode ) as cell_name,
			items.itcode,
			items.itname
    FROM mfgwcreqs_advsc 
		join mfgwcreqs on mfgwcreqs_advsc.mamwcode = mfgwcreqs.mwcode AND mfgwcreqs_advsc.mamwline = mfgwcreqs.mwline
		join workcenters on workcenters.wccode =  mfgwcreqs.mwwccode
		join mfghead on mfghead.mhcode = mfgwcreqs_advsc.mamwcode
		join items on items.itcode = mfghead.mhitem
 WHERE mfgwcreqs_advsc.mamachine is null AND
		mfgwcreqs_advsc.maschednum = :al_schednum
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
| items_itcode |
| items_itname |

