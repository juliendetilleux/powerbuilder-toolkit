# d_bcd_qcctrlline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
  SELECT qcctrlline.qlseq,   
         qcctrlline.qltestid,   
         qcctrlline.qlum,   
         qcctrlline.qlrslt,   
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
         qcctrlline.qlmin,   
         qcctrlline.qlmax,   
         qcctrlline.qlrsltval  
    FROM qcctrlline,   
         qctest  
   WHERE ( qctest.qttestid = qcctrlline.qltestid ) and  
         ( ( qcctrlline.qlctrlid = :ai_ctrlid ) )   
ORDER BY qcctrlline.qlseq ASC,   
         qcctrlline.qlline ASC   

```

## Colonnes
| Colonne |
|---------|
| qlseq |
| qltestid |
| qlum |
| qlrslt |
| qlvalid |
| qlline |
| qlctrlid |
| qctest_qttyp |
| qcctrlline_qldesc |
| qcctrlline_qlcmnt |
| qcctrlline_qlusrid |
| qcctrlline_qltestdat |
| qlflag |
| qlrsltrange |
| qcctrlline_qlchoiceid |
| qcctrlline_qlchoiceseq |
| qcctrlline_qlchdesc |
| qlmin |
| qlmax |
| qlrsltval |

