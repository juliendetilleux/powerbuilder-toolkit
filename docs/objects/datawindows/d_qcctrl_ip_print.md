# d_qcctrl_ip_print

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
         qcctrlline.qlcmnt,   
         qcctrlline.qlchdesc,   
         qcctrlline.qlum,   
         qctest.qttyp,   
         qctest.qtname,   
         qctest.qtnameext,   
         mfghead.mhcode,   
         items.itname,   
         mfghead.mhlotmfg,   
         qcctrlline.qlrsltval,   
         qcctrlline.qlmin,   
         qcctrlline.qlmax,   
         qcctrlline.qlrsltrange  ,   
         qcctrlline.qlchoicestr  ,   
         qcctrlline.qldescnum  
    FROM qcctrlhead,   
         qcctrlline,   
         qctest,   
         mfghead,   
         items  
   WHERE ( qcctrlline.qlctrlid = qcctrlhead.qhctrlid ) and  
         ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( mfghead.mhqcip = qcctrlhead.qhctrlid ) and  
         ( items.itcode = mfghead.mhitem ) and  
         ( ( mfghead.mhcode = :Sel_of ) )    
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
| qcctrlline_qlcmnt |
| qcctrlline_qlchdesc |
| qcctrlline_qlum |
| qctest_qttyp |
| qctest_qtname |
| qctest_qtnameext |
| mfghead_mhcode |
| items_itname |
| mfghead_mhlotmfg |
| qcctrlline_qlrsltval |
| qcctrlline_qlmin |
| qcctrlline_qlmax |
| qcctrlline_qlrsltrange |
| qcctrlline_qlchoicestr |
| qcctrlline_qldescnum |

