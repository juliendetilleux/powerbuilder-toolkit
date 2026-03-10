# d_bcd_qcctrline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlline.qlseq,   
         qcctrlline.qltestid,   
         qcctrlline.qlum,   
         qcctrlline.qlvalid,   
         qcctrlline.qlline,   
         qcctrlline.qlctrlid,   
         qctest.qttyp,   
         qcctrlline.qldesc,   
         qcctrlline.qlcmnt,   
         qcctrlline.qlusrid,   
         qcctrlline.qltestdat,   
         qcctrlline.qlflag,   
         qcctrlline.qlrsltrange,   
         qcctrlline.qlchoiceid,   
         qcctrlline.qlchoiceseq,   
         qcctrlline.qlchdesc,   
         qcctrlline.qlrslt,   
         qcctrlline.qlmin,   
         qcctrlline.qlmax,   
         qcctrlline.qlrsltval  
    FROM qcctrlline,   
         qctest  
   WHERE ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( qcctrlline.qlctrlid = :ai_ctrlid ) and
 			( qcctrlline.qlline = :ai_qlline )  
ORDER BY qcctrlline.qlseq ASC,   
         qcctrlline.qlline ASC   

```

## Colonnes
| Colonne |
|---------|
| qlseq |
| qltestid |
| qlum |
| qlvalid |
| qlline |
| qlctrlid |
| qctest_qttyp |
| qcctrlline_qldesc |
| qcctrlline_qlcmnt |
| qlusrid |
| qltestdat |
| qlflag |
| qlrsltrange |
| qlchoiceid |
| qlchoiceseq |
| qlchdesc |
| qlrslt |
| qlmin |
| qlmax |
| qlrsltval |

