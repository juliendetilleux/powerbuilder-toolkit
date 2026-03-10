# d_qcctrl_cofa_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlhead.qhctrlid,   
         qcctrlhead.qhitem,   
         qcctrlhead.qhappro,   
         qcctrlhead.qhapprodat,   
         qcctrlhead.qhlot,   
         qcctrlline.qlseq,   
         qcctrlline.qltestid,   
         qcctrlline.qldesc,   
         qcctrlline.qlrslt,   
         qcctrlline.qlflag,   
         qcctrlline.qlchoiceid,   
         qctest.qtnameext,   
         qcctrlline.qlchoiceseq,   
         qcctrlline.qlcmnt,   
         items.itname,   
         qcctrlline.qlshowext,   
         qcctrlline.qlrsltval,   
         qctest.qttyp,   
         qcctrlline.qlchdesc,   
         qcctrlline.qlum,   
         qcctrlhead.qhapprousr ,
		qcctrlline.qlchoicestr,
		qcctrlline.qldescnum 
    FROM qcctrlhead,   
         qcctrlline,   
         qctest,   
         items  
   WHERE ( qcctrlline.qlctrlid = qcctrlhead.qhctrlid ) and  
         ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( qcctrlhead.qhitem = items.itcode ) and  
         ( ( qcctrlhead.qhctrlid = :ai_ctrlid ) ) AND  
         qcctrlline.qlshowext = 'Y'   
ORDER BY qcctrlline.qlseq ASC   

```

## Colonnes
| Colonne |
|---------|
| qcctrlhead_qhctrlid |
| qcctrlhead_qhitem |
| qcctrlhead_qhappro |
| qcctrlhead_qhapprodat |
| qcctrlhead_qhlot |
| qcctrlline_qlseq |
| qcctrlline_qltestid |
| qcctrlline_qldesc |
| qcctrlline_qlrslt |
| qcctrlline_qlflag |
| qcctrlline_qlchoiceid |
| qctest_qtnameext |
| qcctrlline_qlchoiceseq |
| qcctrlline_qlcmnt |
| items_itname |
| qcctrlline_qlshowext |
| qcctrlline_qlrsltval |
| qctest_qttyp |
| qcctrlline_qlchdesc |
| qcctrlline_qlum |
| qcctrlhead_qhapprousr |
| qcctrlline_qlchoicestr |
| qcctrlline_qldescnum |

