# d_qry_lot_qcresultat_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlhead.qhlot,   
         qcctrlline.qlctrlid,   
         qcctrlline.qltestid,   
         qcctrlline.qlrsltval,   
         qcctrlline.qlum,   
         qcctrlline.qltestdat,   
         qcctrlline.qlrslt,   
         qcctrlhead.qhappro,   
         qctest.qttyp,
		items.itdefaultlot,
		qcctrlline.qlusrid,
		qcctrlline.qlvalid,
		qcctrlline.qlrsltrange,
		qcctrlline.qlflag,
		qcctrlline.qlchoiceid,
		qcctrlline.qlchoiceseq,
		qcctrlline.qlchdesc,
		qcctrlline.qlshowext,
		qcctrlline.qlshowsum,
		qcctrlline.qlexectyp,
		qcctrlline.qlline,
		qcctrlline.qlseq,
		qcctrlline.qlmin,
		qcctrlline.qlmax,
		qcctrlline.qldesc,
		qcctrlline.qlcmnt,
		items.itcode,
		items.itname
    FROM qcctrlline,   
         qcctrlhead,   
         qctest,
			items  
   WHERE ( qcctrlhead.qhctrlid = qcctrlline.qlctrlid ) and  
         ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( ( qcctrlhead.qhappro <> 'E' ) ) AND  
         qcctrlline.qltestid = :as_testid AND  
         qcctrlhead.qhtyp = :as_typ AND  
         qcctrlhead.qhadcode = :as_clifour AND  
         qcctrlhead.qhitem like :as_items AND
         qcctrlhead.qhitem = items.itcode AND
         date(qcctrlline.qltestdat) >= date(:ad_start) AND
         date(qcctrlline.qltestdat) <= date(:ad_stop)


```

## Colonnes
| Colonne |
|---------|
| qcctrlhead_qhlot |
| qcctrlline_qlctrlid |
| qcctrlline_qltestid |
| qcctrlline_qlrsltval |
| qcctrlline_qlum |
| qcctrlline_qltestdat |
| qcctrlline_qlrslt |
| qcctrlhead_qhappro |
| qctest_qttyp |
| items_itdefaultlot |
| qcctrlline_qlusrid |
| qcctrlline_qlvalid |
| qcctrlline_qlrsltrange |
| qcctrlline_qlflag |
| qcctrlline_qlchoiceid |
| qcctrlline_qlchoiceseq |
| qcctrlline_qlchdesc |
| qcctrlline_qlshowext |
| qcctrlline_qlshowsum |
| qcctrlline_qlexectyp |
| qcctrlline_qlline |
| qcctrlline_qlseq |
| qcctrlline_qlmin |
| qcctrlline_qlmax |
| qcctrlline_qldesc |
| qcctrlline_qlcmnt |
| items_itcode |
| items_itname |

