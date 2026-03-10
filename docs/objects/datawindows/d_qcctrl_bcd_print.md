# d_qcctrl_bcd_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlhead.qhctrlid,   
         qcctrlhead.qhitem,   
         qcctrlhead.qhtyp,   
         qcctrlhead.qhadcode,   
         qcctrlhead.qhversn,   
         qcctrlhead.qhlot,   
         qcctrlhead.qhactiv,   
         qcctrlhead.qhappro,   
         qcctrlline.qltestid,   
         qcctrlline.qlrslt,   
         qcctrlline.qltestdat,   
         qcctrlline.qlusrid,   
         qcctrlhead.qhapprodat,   
         qcctrlline.qlflag,   
         qcctrlline.qlseq,   
         qcctrlhead.qhcreadat,   
         qcctrlhead.qhapprousr,   
         qcctrlline.qlchdesc,   
         qcctrlline.qlum,   
         qctest.qttyp,   
         qctest.qtnameext,   
         items.itname,   
         qcctrlline.qlrsltrange,   
         qcctrlline.qldesc,   
         qcctrlhead.qhcmnt,   
         qcctrlline.qlmin,   
         qcctrlline.qlmax,   
         qcctrlline.qlcmnt,   
         qcctrlline.qlrsltval,   
         qcctrlline.qlline  
    FROM qcctrlhead,   
         qcctrlline,   
         qctest,   
         items  
   WHERE ( qcctrlline.qlctrlid = qcctrlhead.qhctrlid ) and  
         ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( qcctrlhead.qhitem = items.itcode ) and  
         ( ( qcctrlhead.qhctrlid = :ai_ctrlid ) )   
ORDER BY qcctrlline.qlseq ASC,   
         qcctrlline.qlline ASC   

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
| qcctrlline_qlrslt |
| qcctrlline_qltestdat |
| qcctrlline_qlusrid |
| qcctrlhead_qhapprodat |
| qcctrlline_qlflag |
| qcctrlline_qlseq |
| qcctrlhead_qhcreadat |
| qcctrlhead_qhapprousr |
| qcctrlline_qlchdesc |
| qcctrlline_qlum |
| qctest_qttyp |
| qctest_qtnameext |
| items_itname |
| qcctrlline_qlrsltrange |
| qcctrlline_qldesc |
| qcctrlhead_qhcmnt |
| qcctrlline_qlmin |
| qcctrlline_qlmax |
| qcctrlline_qlcmnt |
| qcctrlline_qlrsltval |
| qcctrlline_qlline |

