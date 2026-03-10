# d_advsched_cells_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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
			machine.mcid,
			machine.mcode,
			machine.mcname,
			dateformat( dateadd(mi, mfgwcreqs_advsc.maduration, convert(time, '00:00')), 'hh:mm' )  as duration,
			CELLS.clname,
			cells.clid
    FROM mfgwcreqs_advsc 
			join mfgwcreqs 
			join workcenters
			join machine on mfgwcreqs_advsc.mamachine = machine.mcid
			join CELLS ON machine.mccells = cells.clid
 WHERE mfgwcreqs_advsc.maschednum = ( select pmnval from parameters where pmcode = 'ADVSCHDT')  AND
		mfgwcreqs_advsc.mastart BETWEEN :adt_Start AND :adt_Stop
 ORDER BY CELLS.clname,
		mfgwcreqs.mwwccode,
		machine.mcode,
		mfgwcreqs_advsc.mastart,
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
| machine_mcid |
| machine_mcode |
| machine_mcname |
| duration |
| cells_clname |
| cells_clid |

