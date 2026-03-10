# d_bcd_advsched_cell

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
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
			machine.mcode,
			machine.mcname,
			dateformat( dateadd(mi, mfgwcreqs_advsc.maduration, convert(time, '00:00')), 'hh:mm' )  as duration,
			CELLS.clname
    FROM mfgwcreqs_advsc 
			join mfgwcreqs 
			join workcenters
			join machine on mfgwcreqs_advsc.mamachine = machine.mcid
			join CELLS ON machine.mccells = cells.clid
 WHERE mfgwcreqs_advsc.maschednum = ( select pmnval from parameters where pmcode = 'ADVSCHDT')  AND
		cells.clid = :al_cell AND
		date( mfgwcreqs_advsc.mastart ) = date( now() )
 ORDER BY mfgwcreqs_advsc.mastart,
		mfgwcreqs_advsc.mamwcode, 
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
| machine_mcode |
| machine_mcname |
| duration |
| cells_clname |

