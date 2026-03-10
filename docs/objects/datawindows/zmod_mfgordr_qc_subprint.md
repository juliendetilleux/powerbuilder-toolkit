# zmod_mfgordr_qc_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT qcctrlhead.qhctrlid,
		qcctrlhead.qhitem ,
		qcctrlhead.qhtyp ,
		qcctrlhead.qhadcode ,
		qcctrlhead.qhversn ,
		qcctrlhead.qhlot ,
		qcctrlhead.qhactiv ,
		qcctrlhead.qhappro ,
		qcctrlline.qltestid ,
		qcctrlline.qlrsltval ,
		qcctrlline.qlrslt ,
		qcctrlline.qlusrid ,
		qcctrlhead.qhapprodat ,
		qcctrlline.qlflag ,
		qcctrlline.qlseq ,
		qcctrlhead.qhcreadat ,
		qcctrlhead.qhapprousr ,
		qcctrlline.qlcmnt ,
		qcctrlline.qlchdesc ,
		qcctrlline.qlum ,
		qctest.qttyp ,
		qctest.qtname ,
		qctest.qtnameext ,
		qcctrlline.qlmin ,
		qcctrlline.qlmax ,
		qcctrlline.qlrsltrange     
	FROM qcctrlhead ,
		qcctrlline ,
		qctest ,
		mfghead     
	WHERE qcctrlline.qlctrlid = qcctrlhead.qhctrlid
		and qctest.qttestid = qcctrlline.qltestid
		and mfghead.mhqcip = qcctrlhead.qhctrlid
		and mfghead.mhcode = :Sel_of
```

## Colonnes
| Colonne |
|---------|
| qcctrlhead_qhctrlid |
| qcctrlhead_qhitem |
| qcctrlhead_qhtyp |
| qcctrlhead_qhadcode |
| qcctrlhead_qhversn |
| qcctrlhead_qhlot |
| qcctrlhead_qhactiv |
| qcctrlhead_qhappro |
| qcctrlline_qltestid |
| qcctrlline_qlrsltval |
| qcctrlline_qlrslt |
| qcctrlline_qlusrid |
| qcctrlhead_qhapprodat |
| qcctrlline_qlflag |
| qcctrlline_qlseq |
| qcctrlhead_qhcreadat |
| qcctrlhead_qhapprousr |
| qcctrlline_qlcmnt |
| qcctrlline_qlchdesc |
| qcctrlline_qlum |
| qctest_qttyp |
| qctest_qtname |
| qctest_qtnameext |
| qcctrlline_qlmin |
| qcctrlline_qlmax |
| qcctrlline_qlrsltrange |

